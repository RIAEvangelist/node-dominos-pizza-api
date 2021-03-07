import {urls} from '../../index.js';
import {useInternational,usa,canada} from '../../utils/urls.js';

const confirmUSADefault=function(test){
    try{
        test.expects(`Default urls to be for the USA.`);    
        
        if(urls!==usa){
            throw new ReferenceError('urls should be the USA urls, but they are not.');
        }    

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const testCountry=function(test,countryName,countryObject){
    try{
        test.expects(`useInternational({..}) to set urls to ${countryName} urls.`);    
        
        useInternational(countryObject);

        if(urls!==countryObject){
            throw new ReferenceError(`urls should be the ${countryName} urls, but they are not.`);
        }

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}


const runTest=async function(test){
    confirmUSADefault(test);
    testCountry(test,'canada',canada);
    
    //important to reset
    testCountry(test,'usa',usa);
}

export {
    runTest as default,
    runTest
}