import {NearbyStores, Store} from '../../index.js';
  
const nearbyStores=await new NearbyStores('88 Colin P Kelly Jr St, 94107');

console.dir(nearbyStores,{depth:1});
console.dir(nearbyStores.stores[0],{depth:1});

//initialize the frst of the nearbyStores.stores
const store=await new Store(nearbyStores.stores[0].StoreID);

console.dir(store,{depth:1});