import {NearbyStores} from '../index.js';

const nearbyStores=await new NearbyStores('110 S Fairfax Ave, 90036');

console.dir(nearbyStores,{depth:5});

console.log('\n\nFirst store in the list');
console.dir(nearbyStores.stores[0],{depth:0});