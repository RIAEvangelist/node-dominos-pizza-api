import VanillaTest from 'vanilla-test';
import delay from '../utils/delay.js';
import casingTest from './tests/casingTest.js';
import runAddressTest from './tests/address.js';
import runNearbyStoresTest from './tests/nearbyStore.js';
import runStoreTest from './tests/store.js';
import runTrackingTest from './tests/tracking.js';
import runImageTest from './tests/image.js';
import runPaymentTest from './tests/payment.js';
import runItemTest from './tests/item.js';
import runCustomerTest from './tests/customer.js';
import runInternationalTest from './tests/international.js';
import runOrderTest from './tests/order.js';

const test=new VanillaTest;

//we will add delays between the tests that API requests
//this will help prevent us from getting rate limited due to testing

casingTest(test);
runAddressTest(test);
runPaymentTest(test);
runItemTest(test);
runCustomerTest(test);
runInternationalTest(test);

await runImageTest(test);
delay(5e3);

await runNearbyStoresTest(test);
delay(5e3);

await runStoreTest(test);
delay(5e3);

await runTrackingTest(test);
delay(5e3);

await runOrderTest(test);









test.report();