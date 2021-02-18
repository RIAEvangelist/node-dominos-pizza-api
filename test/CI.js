import VanillaTest from 'vanilla-test';
import casingTest from './casingTest.js';
import runAddressTest from './address.js';
import runNearbyStoresTest from './nearbyStore.js';
import runStoreTest from './store.js';

const test=new VanillaTest;

// casingTest(test);
// runAddressTest(test);
// await runNearbyStoresTest(test);
await runStoreTest(test);










test.report();