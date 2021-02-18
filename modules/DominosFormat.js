
import {pascalObjectKeys,camelObjectKeys} from '../utils/toCase.js';

class DominosFormat{
    constructor(){

    }

    get formatted(){
        return pascalObjectKeys(this);
    }

    set formatted(dominosAddress){
        Object.assign(
            this,
            camelObjectKeys(dominosAddress)
        );

        return this;
    }
}

export {
    DominosFormat as default,
    DominosFormat
}