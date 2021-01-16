import VanillaTest from 'vanilla-test';
import {NearbyStores,Store} from '../index.js';
import IsDominos from '../utils/customTypes.js';
import testAddress from './testAddress.js';

const test=new VanillaTest;
const isDominos=new IsDominos;

// Address class to Populate address.dominos from full AddressObject & String
//setup
let addressObject={
    street:'900 Clark Ave',
    city:'St. Louis',
    region:'MO',
    postalCode:'63102'
}

let addressString=`${addressObject.street}, ${addressObject.city}, ${addressObject.region}, ${addressObject.postalCode}`;
let descriptor='complete';

testAddress(test,addressObject,addressString,descriptor);

// Address class to Populate address.dominos from partial AddressObject & String
//setup
addressObject={
    city:'St. Louis',
    region:'MO',
    postalCode:'63102'
}

addressString=`${addressObject.city}, ${addressObject.region}, ${addressObject.postalCode}`;
descriptor='partial';

testAddress(test,addressObject,addressString,descriptor);

// Address class to Populate address.dominos from city and zip AddressObject & AddressString
// setup
addressObject={
    city:'St. Louis',
    postalCode:'63102'
}

addressString=`${addressObject.city}, ${addressObject.postalCode}`
descriptor='city and zip';

testAddress(test,addressObject,addressString,descriptor);

// Address class to Populate address.dominos from zip AddressObject & AddressString
// setup
addressObject={
    postalCode:'63102'
}

addressString=`${addressObject.postalCode}`
descriptor='zip';

testAddress(test,addressObject,addressString,descriptor);

//cleanup
addressObject={};
addressString='';

// NearbyStores class to Populate nearbyStores.stores from a zip AddressString
// setup

addressString=`63102`;

//for use with next test
let storeID=4337;

try{
    test.expects(`NearbyStores class to Populate nearbyStores.stores from a zip AddressString`);    
    
    const nearbyStores=await new NearbyStores(
        addressString,
        'Delivery'
    );
      
    isDominos.nearbyStores(nearbyStores);

    test.is.array(nearbyStores.stores);
    
    if(nearbyStores.stores.length<1){
        throw new RangeError(`Expected more than ${nearbyStores.stores.length} for nearbyStores.stores.length`);
    }

    storeID=nearbyStores.stores[0].StoreID;
}catch(err){
    console.trace(err);
    test.fail();
}
test.pass();
test.done();

//cleanup
addressString='';

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