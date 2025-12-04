import fetch from 'node-fetch';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { urls } from '../utils/urls.js';

/**
 * Account class for managing Domino's account authentication and operations.
 * 
 * This class handles authentication using Domino's GraphQL API, 
 * token management (refresh tokens from Cookies),
 * and account-related operations like retrieving loyalty points.
 * 
 * @example
 * // Create account and login
 * const account = new Account();
 * await account.login('email@example.com', 'password');
 * 
 * // Get loyalty points
 * const points = await account.getPoints();
 * console.log(`You have ${points} loyalty points`);
 * 
 * @example
 * // Use saved refresh token
 * const account = new Account();
 * account.loadToken('./my-token.json');
 * await account.refreshAccessToken();
 */
class Account {
    /**
     * Creates a new Account instance.
     * 
     * @param {Object} [options={}] - Configuration options
     * @param {string} [options.accessToken] - Pre-existing access token
     * @param {string} [options.refreshToken] - Pre-existing refresh token
     * @param {string} [options.tokenPath] - Custom path for token file storage
     */
    constructor(options = {}) {
        this.accessToken = options.accessToken || process.env.DOMINOS_ACCESS_TOKEN || null;
        this.refreshToken = options.refreshToken || process.env.DOMINOS_REFRESH_TOKEN || null;
        this.tokenPath = options.tokenPath || '.dominos-token';
        this.email = null;
        this.customerId = null;
        this.firstName = null;
        this.lastName = null;
        this.phone = null;
        this.loyaltyId = null;
        this.expiresAt = null;
    }

    /**
     * Validates that a file path is safe (no path traversal).
     * @param {string} filePath - The path to validate
     * @returns {boolean} True if path is safe
     * @private
     */
    #isPathSafe(filePath) {
        // Reject paths with traversal patterns
        if (filePath.includes('..') || filePath.includes('//')) {
            return false;
        }
        return true;
    }

    /**
     * Makes a GraphQL request to Domino's API.
     * @param {string} operationName - The GraphQL operation name
     * @param {Object} variables - The variables for the query
     * @param {string} query - The GraphQL query string
     * @param {Object} [customHeaders={}] - Additional headers to include
     * @returns {Promise<Object>} The response data
     * @throws {Error} If the request fails or returns errors
     * @private
     */
    async #graphqlRequest(operationName, variables, query, customHeaders = {}) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'dpz-language': 'en',
            'dpz-market': 'UNITED_STATES',
            ...customHeaders
        };

        if (this.accessToken) {
            headers['Authorization'] = `Bearer ${this.accessToken}`;
        }

        const response = await fetch(urls.graphql, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                operationName,
                variables,
                query
            })
        });

        if (!response.ok) {
            throw new Error(`GraphQL request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            throw new Error(`GraphQL Error: ${data.errors[0].message}`);
        }

        return data;
    }

    /**
     * Logs into a Domino's account with email and password.
     * 
     * @param {string} email - The account email address
     * @param {string} password - The account password
     * @returns {Promise<Account>} This account instance for chaining
     * @throws {Error} If login fails
     * 
     * @example
     * const account = new Account();
     * await account.login('user@example.com', 'mypassword');
     */
    async login(email, password) {
        const query = `
            mutation signIn($credentials: SignInInput!) {
                signIn(credentials: $credentials) {
                    customer {
                        id
                        firstName
                        lastName
                        email
                        phone
                        loyaltyId
                    }
                    token {
                        tokenType
                        expiresIn
                        accessToken
                        refreshToken
                    }
                }
            }
        `;

        const variables = {
            credentials: {
                email,
                password,
                reCaptchaToken: '',
                shouldRememberPassword: true
            }
        };

        const data = await this.#graphqlRequest('signIn', variables, query);

        if (data.data?.signIn) {
            const { customer, token } = data.data.signIn;
            this.customerId = customer.id;
            this.firstName = customer.firstName;
            this.lastName = customer.lastName;
            this.email = customer.email;
            this.phone = customer.phone;
            this.loyaltyId = customer.loyaltyId;
            this.accessToken = token.accessToken;
            this.refreshToken = token.refreshToken;
            this.expiresAt = Date.now() + (token.expiresIn * 1000);
        }

        return this;
    }

    /**
     * Refreshes the access token using the refresh token.
     * 
     * @returns {Promise<Account>} This account instance for chaining
     * @throws {Error} If no refresh token is available or refresh fails
     * 
     * @example
     * // Refresh an expired token
     * await account.refreshAccessToken();
     */
    async refreshAccessToken() {
        if (!this.refreshToken) {
            throw new Error('No refresh token available. Please login first.');
        }

        const query = `
            mutation refreshToken($refreshToken: String!) {
                refreshToken(refreshToken: $refreshToken) {
                    tokenType
                    expiresIn
                    accessToken
                    refreshToken
                }
            }
        `;

        const variables = {
            refreshToken: this.refreshToken
        };

        const response = await fetch(urls.graphql, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'dpz-language': 'en',
                'dpz-market': 'UNITED_STATES'
            },
            body: JSON.stringify({
                operationName: 'refreshToken',
                variables,
                query
            })
        });

        if (!response.ok) {
            throw new Error(`Token refresh failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            throw new Error(`Token refresh failed: ${data.errors[0].message}`);
        }

        if (data.data?.refreshToken) {
            const token = data.data.refreshToken;
            this.accessToken = token.accessToken;
            this.refreshToken = token.refreshToken;
            this.expiresAt = Date.now() + (token.expiresIn * 1000);
        }

        return this;
    }

    /**
     * Saves the refresh token to a file for later use.
     * 
     * @param {string} [filePath] - Custom file path (defaults to tokenPath option)
     * @returns {Account} This account instance for chaining
     * @throws {Error} If no refresh token to save or path is invalid
     * 
     * @example
     * await account.login('email', 'password');
     * account.saveToken('./my-token.json');
     */
    saveToken(filePath = this.tokenPath) {
        if (!this.#isPathSafe(filePath)) {
            throw new Error('Invalid file path');
        }
        if (!this.refreshToken) {
            throw new Error('No refresh token to save');
        }

        const tokenData = {
            refreshToken: this.refreshToken,
            email: this.email,
            savedAt: new Date().toISOString()
        };

        writeFileSync(filePath, JSON.stringify(tokenData, null, 2), { mode: 0o600 });
        return this;
    }

    /**
     * Loads a refresh token from a file.
     * 
     * @param {string} [filePath] - Custom file path (defaults to tokenPath option)
     * @returns {Account} This account instance for chaining
     * @throws {Error} If file doesn't exist, cannot be parsed, or path is invalid
     * 
     * @example
     * const account = new Account();
     * account.loadToken('./my-token.json');
     * await account.refreshAccessToken();
     */
    loadToken(filePath = this.tokenPath) {
        if (!this.#isPathSafe(filePath)) {
            throw new Error('Invalid file path');
        }
        if (!existsSync(filePath)) {
            throw new Error(`Token file not found: ${filePath}`);
        }

        const content = readFileSync(filePath, 'utf-8');
        const tokenData = JSON.parse(content);

        if (tokenData.refreshToken) {
            this.refreshToken = tokenData.refreshToken;
        }
        if (tokenData.email) {
            this.email = tokenData.email;
        }

        return this;
    }

    /**
     * Checks if the current access token is expired.
     * 
     * @returns {boolean} True if token is expired or not set
     * 
     * @example
     * if (account.isTokenExpired()) {
     *     await account.refreshAccessToken();
     * }
     */
    isTokenExpired() {
        if (!this.expiresAt) return true;
        // Add 60 second buffer
        return Date.now() >= (this.expiresAt - 60000);
    }

    /**
     * Gets the current loyalty points balance.
     * 
     * @returns {Promise<number>} The current points balance
     * @throws {Error} If not authenticated or request fails
     * 
     * @example
     * const points = await account.getPoints();
     * console.log(`You have ${points} points`);
     */
    async getPoints() {
        if (!this.accessToken) {
            throw new Error('Not authenticated. Please login or refresh token first.');
        }

        const response = await fetch(urls.customerLoyalty, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Accept': 'application/json',
                'dpz-language': 'en',
                'dpz-market': 'UNITED_STATES'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to get loyalty points: status ${response.status}`);
        }

        const data = await response.json();

        if (data.Status === -1) {
            throw new Error('Failed to get loyalty points');
        }

        return data.Balance || 0;
    }

    /**
     * Gets account information as a plain object.
     * 
     * @returns {Object} Account information
     * 
     * @example
     * const info = account.getInfo();
     * console.log(info.email, info.firstName);
     */
    getInfo() {
        return {
            email: this.email,
            customerId: this.customerId,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            loyaltyId: this.loyaltyId,
            isAuthenticated: !!this.accessToken,
            isTokenExpired: this.isTokenExpired()
        };
    }
}

export { Account };
export default Account;
