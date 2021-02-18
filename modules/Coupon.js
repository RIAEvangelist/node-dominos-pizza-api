import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';

const is=new Is;

class Coupon{
    constructor(parameters){
        defaultParameters(this,paramaters);  
    }

    
    isNew=true

    get code(){
        return this.#dominos.Code;       
    }
    set code(value){
        is.string(value);
        return this.#dominos.Code=value;
    }

    get quantity(){
        return this.#dominos.Qty;        
    }
    set quantity(value){
        is.number(value);
        return this.#dominos.Qty=value;
    }

    get ID(){
        return this.#dominos.ID;       
    }
    set ID(value){
        is.number(value);
        return this.#dominos.ID=value;
    }

    get dominos(){
        return this.#dominos;
    }

    #dominos={
        Code:'',
        Qty:0,
        ID:1
    }
}

export { 
    Coupon as default,
    Coupon
}
