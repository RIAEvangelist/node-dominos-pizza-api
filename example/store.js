import {Store} from '../index.js';

const store=await new Store(4337);

console.dir(store,{depth:1});