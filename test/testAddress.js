import IsDominos from '../utils/customTypes.js';
import {Address} from '../index.js';

const isDominos=new IsDominos;

const testAddress=function(test,addressObject,addressString,descriptor){
    try{
        isDominos.test(test);
        test.is.object(addressObject);
        test.is.string(descriptor);
        test.expects(`Address class to Populate address.dominos from ${descriptor} AddressObject`);    
        
        const address=new Address(addressObject);
        isDominos.address(address);

        validateAddress(test,address,addressObject);
    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();

    // Address class to Populate address.dominos from AddressString
    try{
        isDominos.test(test);
        test.is.string(addressString);
        test.is.string(descriptor);
        test.expects(`Address class to Populate address.dominos from ${descriptor} AddressString`);    
        
        const address=new Address(addressString);
        isDominos.address(address);

        validateAddress(test,address,addressObject);
    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const validateAddress=function(test,address,addressObject){
    isDominos.test(test);
    isDominos.address(address);
    isDominos.object(addressObject);

    for(const [key,value] of Object.entries(addressObject)){
        test.compare(
            value,
            address[key],
            `expected addressObject.${key} "${value}" to equal address.${key} "${address[key]}"`    
        );
        
        const dominosKey=key[0].toUpperCase()+key.slice(1);
        const dominosValue=address.dominos[dominosKey];

        test.compare(
            value,
            dominosValue,
            `expected addressObject.${key} "${value}" to equal address.dominos.${dominosKey} "${dominosValue}"`    
        );
    }

    test.compare(
        'House',
        address.dominos.UnitType,
        `expected address.dominos.UnitType ${address.dominos.UnitType} to equal House`    
    );
}

export {
    testAddress as default,
    testAddress
}