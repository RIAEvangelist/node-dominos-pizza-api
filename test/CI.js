import VanillaTest from 'vanilla-test';
import IsDominos from '../utils/DominosTypes.js'
import {Store} from '../index.js';
import runAddressTest from './address.js';
import runNearbyStoresTest from './nearbyStore.js';
import runStoreTest from './store.js';

const isDominos=new IsDominos;

const test=new VanillaTest;

runAddressTest(test);
await runNearbyStoresTest(test);
await runStoreTest(test);









test.report();