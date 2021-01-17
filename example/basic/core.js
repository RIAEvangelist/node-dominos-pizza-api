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
    store.menu.parsed,
    {
        depth:0
    }
);

