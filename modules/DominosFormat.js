import defaultParameters from './defaultParameters.js';
import {pascalObjectKeys,camelObjectKeys} from '../utils/toCase.js';

class DominosFormat{
    constructor(){
        
        return this;
    }

    set init(parameters){
        //merge params into this object
        defaultParameters(this,parameters);
    }

    get formatted(){
        return pascalObjectKeys(
            JSON.parse(
                JSON.stringify(this)
            )
        );
    }

    set formatted(dominosAddress){
        Object.assign(
            this,
            camelObjectKeys(dominosAddress)
        );

        return this;
    }

    get dominosAPIResponse(){
        return this.#dominosAPIResponse; 
    }

    set dominosAPIResponse(value){
        is.object(value);

        return this.#dominosAPIResponse=value;
    }

    #dominosAPIResponse={}
}

export {
    DominosFormat as default,
    DominosFormat
}