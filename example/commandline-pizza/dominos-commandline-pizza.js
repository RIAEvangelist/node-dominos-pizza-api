import {Order,Customer,Item,Payment,NearbyStores,Tracking,Menu} from '../../index.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const addressString = await rl.question('Delivery Address?');

const customer = new Customer(
    {
        address: addressString
    }
);

let storeID=0;
let distance=25;
rl.write(`${distance}`);
distance = parseInt(await rl.question('Distance?'));

const nearbyStores=await new NearbyStores(customer.address);
console.log(`List of stores that will deliver within ${distance} miles:`);
console.table(
    {
        'customer address':nearbyStores.address
    }
);

const deliveryStores={};

for(const store of nearbyStores.stores){
    
    if(
        store.IsOnlineCapable 
        && store.IsDeliveryStore
    ){
        //console.log(store);
        deliveryStores[store.StoreID]={
            address:store.AddressDescription,
            phone:store.Phone,
            hours:store.ServiceHoursDescription.DeliverToMe,
            info:store.LocationInfo
        };
    }
}

console.table(deliveryStores);

rl.write(`${Object.keys(deliveryStores)[0]}`);
storeID=await rl.question('Which Store?');

console.log(`Menu for StoreID ${storeID}:`);
const menu=await new Menu(storeID);
console.log(Object.keys(menu.menu.categories.food));


const preconfiguredProducts=menu.menu.preconfiguredProducts;
const popularPizzas={}
for(const code of menu.menu.categories.preconfiguredProducts.popularItems.subCategories.popularItemsPizza.products){
    const pizza=preconfiguredProducts[code];
    popularPizzas[code]={
        size:pizza.size,
        name:pizza.name,
        description:pizza.description
    }
}

console.log('Popular Pizzas');
console.table(popularPizzas);



const popularNonPizzas={}
for(const code of menu.menu.categories.preconfiguredProducts.popularItems.subCategories.popularItemsSandwichesSidesDesserts.products){
    const item=preconfiguredProducts[code];
    popularNonPizzas[code]={
        size:item.size,
        name:item.name,
        description:item.description
    }
}

console.log('Other Popular Items');
console.table(popularNonPizzas);

const firstName = await rl.question('First Name?');
const lastName = await rl.question('Last Name?');
const phone = await rl.question('Phone?');
const email = await rl.question('Email?');



rl.close();