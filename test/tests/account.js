import {Account} from '../../index.js';

const runTest=async function(test){
    // Test 1: Initialization with default options
    try{
        test.expects(`Account to initialize with default options`);    
        const account = new Account();
        
        if(account.accessToken !== null) test.fail();
        if(account.refreshToken !== null) test.fail();
        if(account.tokenPath !== '.dominos-token') test.fail();
        
    }catch(err){
        test.fail();
    }
    test.pass();
    test.done();

    // Test 2: Initialization with custom options
    try{
        test.expects(`Account to initialize with custom options`);    
        const account = new Account({
            accessToken: 'test-access-token',
            refreshToken: 'test-refresh-token',
            tokenPath: './custom-token-path.json'
        });
        
        if(account.accessToken !== 'test-access-token') test.fail();
        if(account.refreshToken !== 'test-refresh-token') test.fail();
        if(account.tokenPath !== './custom-token-path.json') test.fail();
        
    }catch(err){
        test.fail();
    }
    test.pass();
    test.done();

    // Test 3: Token expiration check - expired
    try{
        test.expects(`Account.isTokenExpired to return true when no expiresAt set`);    
        const account = new Account();
        
        if(!account.isTokenExpired()) test.fail(); // Should be true when not set
        
    }catch(err){
        test.fail();
    }
    test.pass();
    test.done();

    // Test 4: Token expiration check - valid
    try{
        test.expects(`Account.isTokenExpired to return false for future expiration`);    
        const account = new Account();
        account.expiresAt = Date.now() + 3600000; // 1 hour from now
        
        if(account.isTokenExpired()) test.fail(); // Should be false
        
    }catch(err){
        test.fail();
    }
    test.pass();
    test.done();

    // Test 5: getPoints without authentication should throw
    try{
        test.expects(`Account.getPoints to throw if not authenticated`);    
        const account = new Account();
        
        await account.getPoints();
        test.fail(); // Should have thrown
    }catch(err){
        if(err.message !== 'Not authenticated. Please login or refresh token first.'){
            test.fail();
        }
    }
    test.pass();
    test.done();

    // Test 6: getInfo returns correct structure
    try{
        test.expects(`Account.getInfo to return account information object`);    
        const account = new Account({
            accessToken: 'test-token'
        });
        account.email = 'test@example.com';
        account.firstName = 'John';
        account.lastName = 'Doe';
        
        const info = account.getInfo();
        
        if(info.email !== 'test@example.com') test.fail();
        if(info.firstName !== 'John') test.fail();
        if(info.lastName !== 'Doe') test.fail();
        if(info.isAuthenticated !== true) test.fail();
        
    }catch(err){
        test.fail();
    }
    test.pass();
    test.done();

    // Test 7: refreshAccessToken without refresh token should throw
    try{
        test.expects(`Account.refreshAccessToken to throw without refresh token`);    
        const account = new Account();
        
        await account.refreshAccessToken();
        test.fail(); // Should have thrown
    }catch(err){
        if(err.message !== 'No refresh token available. Please login first.'){
            test.fail();
        }
    }
    test.pass();
    test.done();

    // Test 8: saveToken without refresh token should throw
    try{
        test.expects(`Account.saveToken to throw without refresh token`);    
        const account = new Account();
        
        account.saveToken();
        test.fail(); // Should have thrown
    }catch(err){
        if(err.message !== 'No refresh token to save'){
            test.fail();
        }
    }
    test.pass();
    test.done();

    // Test 9: loadToken with non-existent file should throw
    try{
        test.expects(`Account.loadToken to throw for non-existent file`);    
        const account = new Account();
        
        account.loadToken('./non-existent-token-file.json');
        test.fail(); // Should have thrown
    }catch(err){
        if(!err.message.includes('Token file not found')){
            test.fail();
        }
    }
    test.pass();
    test.done();

    // Test 10: Path traversal protection
    try{
        test.expects(`Account.saveToken to reject path traversal attempts`);    
        const account = new Account({ refreshToken: 'test-token' });
        
        account.saveToken('../../../etc/passwd');
        test.fail(); // Should have thrown
    }catch(err){
        if(err.message !== 'Invalid file path'){
            test.fail();
        }
    }
    test.pass();
    test.done();
}

export {
    runTest as default,
    runTest
}
