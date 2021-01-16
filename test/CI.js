import VanillaTest from 'vanilla-test';
import IsDominos from '../utils/DominosTypes.js'
import {Store} from '../index.js';
import runAddressTest from './address.js';
import runNearbyStoresTest from './nearbyStore.js';

const isDominos=new IsDominos;

const test=new VanillaTest;

runAddressTest(test);
await runNearbyStoresTest(test);

//for use with next test
let storeID=4337;

// Store class to Populate store.info and store.menu for StoreID from NearbyStores
// setup

try{
    test.expects(`Store class to Populate store.info and store.menu from NearbyStores`);    
    
    const store=await new Store(storeID);
    
    //confirm Store class creation as expected
    isDominos.store(store);
    
    //test the expected format after completion
    test.is.object(store.info);
    test.is.object(store.menu);

    //test a smattering of the expected values
    test.is.string(store.info.StoreID);
    test.is.string(store.info.BusinessDate);
    test.is.string(store.info.Phone);
    test.is.string(store.info.StreetName);
    test.is.string(store.info.City);

    //confirm it was the right store that got populated
    test.compare(
        storeID,
        store.info.StoreID,
        `storeID of ${storeID} to match store.info.StoreID of ${store.info.StoreID}`
    );
    
    //test a smattering of the menu categories for existance and format
    test.is.object(store.menu.Misc);
    test.is.object(store.menu.Categorization);
    test.is.object(store.menu.Products);
    test.is.object(store.menu.Toppings);
    test.is.object(store.menu.PreconfiguredProducts);
    
    //test that the menu was for the right store
    test.compare(
        storeID,
        store.menu.Misc.StoreID,
        `storeID of ${storeID} to match store.menu.Misc.StoreID of ${store.menu.Misc.StoreID}`
    );
}catch(err){
    console.trace(err);
    test.fail();
}
test.pass();
test.done();

//cleanup
storeID=0;







test.report();