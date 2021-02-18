import defaultParameters from './defaultParameters.js';
import {pascalObjectKeys,camelObjectKeys} from '../utils/toCase.js';

class DominosFormat{
    constructor(parameters){
        //merge params into this object
        const paramsRemaining=defaultParameters(this,parameters);
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