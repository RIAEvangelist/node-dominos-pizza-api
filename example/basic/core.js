import {Store} from '../../index.js';

const store=await new Store(4332);

console.dir(
    //JSON.stringify(store.info, null, 4)
    store.info,
    {depth:0}
);

console.dir(
    //JSON.stringify(store.menu)
    store.menu,
    {depth:0}
);

