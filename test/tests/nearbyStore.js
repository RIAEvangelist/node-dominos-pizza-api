import IsDominos from '../../utils/DominosTypes.js';
import {NearbyStores} from '../../modules/NearbyStores.js';

const isDominos=new IsDominos;

const testNearbyStores=async function(test,address){
    try{
        const description=`NearbyStores class to find nearbyStores.stores supporting Delivery from a detailed, or vague address: ${JSON.stringify(address)}`
        
        test.expects(description);    
        
        const nearbyStores=await new NearbyStores(address);
          
        isDominos.nearbyStores(nearbyStores);
    
        test.is.array(nearbyStores.stores);

        isDominos.string(nearbyStores.stores[0].StoreID);
    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const expectNoNearbyStores=async function(test,address){
    try{
        const description=`NearbyStores class to find NO nearbyStores.stores from: ${JSON.stringify(address)}`

        test.expects(description);    
        
        const nearbyStores=await new NearbyStores(address);
          
        isDominos.nearbyStores(nearbyStores);
    
        test.is.array(nearbyStores.stores);

        //console.log(nearbyStores.stores.length);

        isDominos.undefined(nearbyStores.stores[0]);
    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const runTest=async function(test){
    isDominos.test(test);

    // NearbyStores class to Populate nearbyStores.stores from a zip AddressString
    await testNearbyStores(test,`90013`);

    // NearbyStores class to Populate nearbyStores.stores from a full address
    await testNearbyStores(test,`836 Traction Avenue, Los Angeles, CA 90013`);

    let addressObject={
        city:'Los Angeles',
        region:'CA'
    }

    // NearbyStores class to Populate nearbyStores.stores from an address object that is too vague
    await testNearbyStores(test,addressObject);
    
    addressObject.city=''; 

    // NearbyStores class to Populate nearbyStores.stores from an address object that is too vague
    await expectNoNearbyStores(test,addressObject);

    addressObject={
        street  :'836 Traction Avenue Apt. 2B',
        postalCode:'90013'
    }

    // NearbyStores class to Populate nearbyStores.stores from an apt address object
    await testNearbyStores(test,addressObject);
}

export {
    runTest as default,
    runTest
}