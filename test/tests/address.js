import IsDominos from '../../utils/DominosTypes.js';
import {toPascal} from '../../utils/toCase.js';
import {Address} from '../../index.js';

const isDominos=new IsDominos;
const defaultExpected=new Address;
const defaultAddress=new Address('222 2nd St, San Francisco, CA 94105');

const testAddress=function(test,addressInfo=defaultAddress,expected=defaultExpected){
    try{
        isDominos.test(test);
        test.expects(`Address class to Populate address from addressInfo: ${JSON.stringify(addressInfo)}`);    
        
        const address=new Address(addressInfo);
        isDominos.address(address);

        validateAddress(test,address,expected);
    }catch(err){
        console.trace(err);
        test.fail();
    }

    test.pass();
    test.done();
}

const validateAddress=function(test,address=defaultAddress,expected=defaultExpected){
    isDominos.test(test);
    isDominos.address(address);

    const formattedAddress=address.formatted;

    // console.dir(address)
    // console.dir(expected);

    for(const [key,value] of Object.entries(expected)){
        const pascalKey=toPascal(key);
        
        //ensure that all address values match expected values
        test.compare(
            value,
            address[key],
            `address.${key} ${JSON.stringify(address[key])} to equal expected.${key} ${JSON.stringify(value)}`    
        );

        //ensure that all dominos formatted values match expected values
        test.compare(
            value,
            formattedAddress[pascalKey],
            `expected.${key} ${JSON.stringify(value)} to equal address.formatted.${pascalKey} ${JSON.stringify(formattedAddress[pascalKey])}`    
        );
    }
}


const runTest=function(test){
    let addressObject={
        street:'900 Clark Ave Apt. 2',
        city:'St. Louis',
        region:'MO',
        postalCode:'63102'
    }

    let addressString=`${addressObject.street}, ${addressObject.city}, ${addressObject.region}, ${addressObject.postalCode}`;

    // Address class to Populate address from full AddressObject
    testAddress(test,addressObject,addressObject);

    // Address class to Populate address from full AddressString
    testAddress(test,addressString,addressObject);

    addressObject={
        street:'900 Clark Ave',
        city:'St. Louis',
        postalCode:'63102'
    }
    
    addressString=`${addressObject.street}, ${addressObject.city}, ${addressObject.postalCode}`;

    // Address class to Populate address from spartial AddressObject
    testAddress(test,addressObject,addressObject);
    
    // Address class to Populate address from partial AddressString
    testAddress(test,addressString,addressObject);


    addressObject={
        street:'900 Clark Ave',
        postalCode:'63102'
    }

    addressString=`${addressObject.street}, ${addressObject.postalCode}`;

    // Address class to Populate address from state and zip AddressObject
    testAddress(test,addressObject,addressObject);

    // Address class to Populate address from state and zip AddressString
    testAddress(test,addressString,addressObject);

    addressObject={
        postalCode:'63102'
    }
    
    addressString=`${addressObject.postalCode}`;
    
    // Address class to Populate address from zip AddressObject
    testAddress(test,addressObject,addressObject);

    // Address class to Populate address from zip AddressString
    testAddress(test,addressString,addressObject);

    addressString=Number(addressString);
    
    // Address class to Populate address from zip AddressNumber
    testAddress(test,addressObject,addressObject);

}

export {
    runTest as default,
    runTest
}