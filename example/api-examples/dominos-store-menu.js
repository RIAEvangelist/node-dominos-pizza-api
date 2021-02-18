import {NearbyStores, Menu} from '../../index.js';
  
const nearbyStores=await new NearbyStores('88 Colin P Kelly Jr St, 94107');

//initialize the frst of the nearbyStores.stores
const menu=await new Menu(nearbyStores.stores[0].StoreID);

console.log(`
   #################
   # Menu instance #
   #################
`);

console.dir(menu,{depth:1});

console.log(`
   #####################
   # Menu.menu details #
   #####################
`);
console.dir(menu.menu,{depth:1});