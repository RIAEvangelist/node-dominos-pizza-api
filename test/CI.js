import VanillaTest from 'vanilla-test';
import delay from '../utils/delay.js';
import casingTest from './casingTest.js';
import runAddressTest from './address.js';
import runNearbyStoresTest from './nearbyStore.js';
import runStoreTest from './store.js';
import runTrackingTest from './tracking.js';
import runImageTest from './image.js';
import runPaymentTest from './payment.js';

const test=new VanillaTest;

//we will add delays between the tests that API requests
//this will help prevent us from getting rate limited due to testing

casingTest(test);
runAddressTest(test);
runPaymentTest(test);

await runImageTest(test);
delay(5e3);

await runNearbyStoresTest(test);
delay(5e3);

await runStoreTest(test);
delay(5e3);

await runTrackingTest(test);











test.report();