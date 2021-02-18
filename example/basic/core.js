import {Store} from '../../index.js';
import Is from 'strong-type';
import Item from '../../modules/Item.js';

const weakIs=new Is(false);
//const store=await new Store(4332);

// var customer = new Customer(
//     {
//         address: '900 Clark Ave, 63102',
//         firstName: 'Barack',
//         lastName: 'Obama',
//         phone: '1-800-The-White-House',
//         email: 'br'
//     }
// );

// console.dir(customer);

const pepperoniPizza=new Item(
    {
        code:'P_14SCREEN'
    }
)

console.dir(pepperoniPizza);

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


