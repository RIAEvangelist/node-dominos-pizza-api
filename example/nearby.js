import {NearbyStores} from '../index.js';

const nearbyStores=await new NearbyStores('63102');

console.dir(nearbyStores,{depth:1});
console.dir(nearbyStores.stores[0],{depth:1});