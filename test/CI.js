import VanillaTest from 'vanilla-test';
import casingTest from './casingTest.js';
import runAddressTest from './address.js';
import runNearbyStoresTest from './nearbyStore.js';
import runStoreTest from './store.js';
import runTrackingTest from './tracking.js';
import runImageTest from './image.js';
import runPaymentTest from './payment.js';

const test=new VanillaTest;

casingTest(test);
runAddressTest(test);
runPaymentTest(test);

// await runNearbyStoresTest(test);
// await runStoreTest(test);
// await runTrackingTest(test);
await runImageTest(test);










test.report();