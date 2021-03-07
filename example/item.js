import {Item} from '../index.js';

const cheesePizza=new Item(
    {
        ID:1,
        code:'14SCREEN',
        options:{
            X: {'1/1' : '1'}, 
            C: {'1/1' : '2'}
        }
    }
);

console.dir(cheesePizza);