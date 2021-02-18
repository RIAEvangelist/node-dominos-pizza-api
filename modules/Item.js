import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';
import {pascalObjectKeys,camelObjectKeys} from '../utils/toCase.js';

const is=new Is;

class Item{
    constructor(parameters) {
        defaultParameters(this,parameters);
    }

    code=''
    qty=1
    ID=1
    options={}   

    get formatted(){
        return pascalObjectKeys(this);
    }

    set formatted(dominosItem){
        Object.assign(
            this,
            camelObjectKeys(dominosItem)
        );

        return this;
    }
}

export {
    Item as default,
    Item
};