
import {Account} from '../index.js';

/**
 * IMPORTANT: Domino's now requires reCAPTCHA for login via API.
 * 
 * To use the Account class, you need to:
 * 1. Log in to dominos.com in your browser
 * 2. Open Developer Tools (F12) -> Application -> Cookies
 * 3. Find the "accessToken" cookie and copy its value
 * 4. Use setToken() or pass the token in the constructor
 */

// Option 1: Pass token in constructor
const account = new Account({
    token: 'YOUR_ACCESS_TOKEN_FROM_BROWSER'
});

// Option 2: Use setToken() - handles "Bearer+" prefix automatically
// const account = new Account();
// account.setToken('Bearer+YOUR_ACCESS_TOKEN_FROM_BROWSER');

// Check if token is valid
if (!account.isTokenValid()) {
    console.log('Token is invalid or expired. Please get a fresh token from dominos.com');
    console.log('Token expiration:', account.getTokenExpiration());
    process.exit(1);
}

console.log('✅ Account authenticated');
console.log('Email:', account.email);
console.log('Customer ID:', account.customerId);
console.log('Token expires:', account.getTokenExpiration());

try {
    // Get loyalty points
    const loyalty = await account.getPoints();
    
    console.log('\n📊 Loyalty Information:');
    console.log('Account Status:', loyalty.AccountStatus);
    console.log('Vested Points:', loyalty.VestedPointBalance);
    console.log('Pending Points:', loyalty.PendingPointBalance);
    console.log('Points Expire:', loyalty.BasePointExpirationDate);
} catch (error) {
    console.error('Error fetching loyalty info:', error.message);
}
