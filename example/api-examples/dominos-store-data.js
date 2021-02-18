import {NearbyStores, Store} from '../../index.js';
  
const nearbyStores=await new NearbyStores('88 Colin P Kelly Jr St, 94107');

//initialize the frst of the nearbyStores.stores
const store=await new Store(nearbyStores.stores[0].StoreID);

console.log(`
   ##################
   # Store instance #
   ##################
`);
console.dir(store,{depth:0});


console.log(`
   #######################
   # Detailed Store.info #
   #######################
`);
console.dir(store.info,{depth:0});