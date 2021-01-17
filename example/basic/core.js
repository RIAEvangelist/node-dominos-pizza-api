import {Store} from '../../index.js';
import {toCamel} from '../../utils/toCase.js';
import Is from 'strong-type';

const weakIs=new Is(false);
const store=await new Store(4332);

// console.dir(
//     //JSON.stringify(store.info, null, 4)
//     store.info,
//     {depth:0}
// );



console.dir(
    //JSON.stringify(store.menu)
    store.menu.parsed.categories.preconfiguredProducts.popularItems.subCategories.popularItemsPizza,
    {
        depth:1
    }
);

console.dir(
    //JSON.stringify(store.menu)
    store.menu.parsed.preconfiguredProducts.XC_14SCREEN,
    {
        depth:1
    }
);

console.dir(
    //JSON.stringify(store.menu)
    store.menu.parsed.categories.food,
    {
        depth:0
    }
);


