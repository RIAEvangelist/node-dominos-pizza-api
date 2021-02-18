import {NearbyStores} from '../../index.js';
  
const nearbyStores=await new NearbyStores('88 Colin P Kelly Jr St, 94107');

console.dir(nearbyStores,{depth:1});

console.dir(nearbyStores.stores[0],{depth:1});