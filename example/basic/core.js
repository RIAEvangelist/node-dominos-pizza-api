import {Store} from '../../index.js';
import Is from 'strong-type';
import Customer from '../../modules/Customer.js';

const weakIs=new Is(false);
const store=await new Store(4332);

const customer=new Customer();

console.dir(customer);

// console.dir(
//     //JSON.stringify(store.info, null, 4)
//     store.info,
//     {depth:0}
// );



// console.dir(
//     //JSON.stringify(store.menu.parsed),
//     store.menu.parsed.categories,
//     {
//         depth:1
//     }
// );

// fs.writeFileSync('./menu.json', JSON.stringify(store.menu.parsed, null, 4) , 'utf-8');

// console.dir(
//     //JSON.stringify(store.menu)
//     store.menu.parsed.preconfiguredProducts.XC_14SCREEN,
//     {
//         depth:1
//     }
// );

// console.dir(
//     //JSON.stringify(store.menu)
//     store.menu.parsed.categories.food,
//     {
//         depth:0
//     }
// );


