# Account

The `Account` class provides authentication and account management for Domino's customer accounts. It handles JWT token management, loyalty points retrieval, and session persistence.

## Important Note on Authentication

Domino's now requires reCAPTCHA for login via their API. To authenticate:

1. Log in to [dominos.com](https://www.dominos.com) in your browser
2. Open Developer Tools (F12) → Application → Cookies
3. Copy the `accessToken` cookie value
4. Use `setToken()` or pass the token in the constructor

## Usage

### Basic Setup with Browser Token

```javascript
import { Account } from 'dominos';

// Option 1: Pass token in constructor
const account = new Account({
    token: 'YOUR_ACCESS_TOKEN_FROM_BROWSER'
});

// Option 2: Use setToken() - handles "Bearer+" prefix automatically
const account = new Account();
account.setToken('Bearer+YOUR_ACCESS_TOKEN_FROM_BROWSER');
```

### Check Token Status

```javascript
// Check if token is valid
if (account.isTokenValid()) {
    console.log('Token is valid!');
    console.log('Email:', account.email);
    console.log('Customer ID:', account.customerId);
    console.log('Expires:', account.getTokenExpiration());
    console.log('Minutes remaining:', account.getTokenMinutesRemaining());
}

// Get detailed token status
const status = account.getTokenStatus();
// Returns: { hasToken, hasRefreshToken, isValid, email, customerId, expiresAt, minutesRemaining, needsRefresh }
```

### Get Loyalty Points

```javascript
try {
    const loyalty = await account.getPoints();
    
    console.log('Account Status:', loyalty.AccountStatus);
    console.log('Vested Points:', loyalty.VestedPointBalance);
    console.log('Pending Points:', loyalty.PendingPointBalance);
    console.log('Points Expire:', loyalty.BasePointExpirationDate);
} catch (error) {
    console.error('Error:', error.message);
}
```

### Token Persistence

```javascript
// Save token to file (default: .dominos-token)
account.saveToken();

// Or save to custom path
account.saveToken('./my-token.json');

// Load token from file
const loaded = account.loadToken();
if (loaded) {
    console.log('Token loaded successfully');
}
```

### Using Environment Variables

The `Account` class can load tokens from environment variables:

```bash
# In your shell or .env file
export DOMINOS_TOKEN="your_jwt_token_here"
export DOMINOS_REFRESH_TOKEN="your_refresh_token_here"  # Optional, for auto-refresh
```

```javascript
// Load from environment (async - handles auto-refresh)
const account = await Account.fromEnvironment();

// Or sync version (no auto-refresh)
const account = Account.fromEnvironmentSync();

if (account) {
    console.log('Authenticated as:', account.email);
} else {
    console.log('No valid token found');
    console.log(Account.getTokenInstructions());
}
```

### Token Refresh

If you have a refresh token (from "Remember Me" at login), the access token can be refreshed:

```javascript
// Set refresh token
account.setRefreshToken('your_refresh_token_from_cookie');

// Refresh the access token
await account.refreshAccessToken();

// Or let it auto-refresh when needed
const valid = await account.ensureValidToken();
```

## Constructor Options

| Property | Type | Description |
|----------|------|-------------|
| `email` | `string` | Account email address |
| `password` | `string` | Account password (for login attempts) |
| `token` | `string` | JWT access token |
| `customerId` | `string` | Customer ID (auto-extracted from token) |
| `refreshToken` | `string` | Refresh token for session persistence |
| `customer` | `Customer` | Customer object with personal details |

## Methods

### Authentication

| Method | Description |
|--------|-------------|
| `setToken(token)` | Set the access token (handles Bearer+ prefix) |
| `setRefreshToken(token)` | Set the refresh token |
| `login(recaptchaToken)` | Attempt login (requires reCAPTCHA) |
| `refreshAccessToken()` | Refresh access token using refresh token |
| `ensureValidToken()` | Ensure token is valid, refresh if needed |

### Token Status

| Method | Returns | Description |
|--------|---------|-------------|
| `isTokenValid()` | `boolean` | Check if token is valid and not expired |
| `getTokenExpiration()` | `Date\|null` | Get token expiration time |
| `getTokenMinutesRemaining()` | `number` | Minutes until token expires |
| `getTokenStatus()` | `object` | Detailed token status info |

### Account Data

| Method | Returns | Description |
|--------|---------|-------------|
| `getPoints()` | `Promise<object>` | Get loyalty points and coupons |

### Persistence

| Method | Returns | Description |
|--------|---------|-------------|
| `saveToken(filePath?)` | `string` | Save token to file |
| `loadToken(filePath?)` | `boolean` | Load token from file |

### Static Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `Account.fromEnvironment(path?)` | `Promise<Account\|null>` | Create from env vars/file (async) |
| `Account.fromEnvironmentSync(path?)` | `Account\|null` | Create from env vars/file (sync) |
| `Account.getTokenInstructions()` | `string` | Get help text for obtaining tokens |

## Loyalty Response Structure

The `getPoints()` method returns:

```javascript
{
    AccountStatus: 'string',           // e.g., 'Active'
    VestedPointBalance: number,        // Earned points available to use
    PendingPointBalance: number,       // Points pending from recent orders
    BasePointExpirationDate: 'string'  // When points expire
}
```

## Files

- `.dominos-token` - Default token storage file (gitignored)
- `.env` - Environment variables (gitignored)
- `.env.example` - Example environment configuration
