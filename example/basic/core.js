import {Store} from '../../index.js';
import {toCamel} from '../../utils/toCase.js';
import Is from 'strong-type';
import fs from 'fs';

const weakIs=new Is(false);
const store=await new Store(4332);

// console.dir(
//     //JSON.stringify(store.info, null, 4)
//     store.info,
//     {depth:0}
// );



console.dir(
    JSON.stringify(store.menu.parsed),
    //store.menu.parsed,
    {
        depth:30
    }
);

fs.writeFileSync('./menu.json', JSON.stringify(store.menu.parsed, null, 4) , 'utf-8');

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


