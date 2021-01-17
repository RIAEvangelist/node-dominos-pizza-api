import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';

const is=new Is;

class Item{
    constructor(parameters) {
        defaultParameters.call(this,parameters);
    }

    AutoRemove=false
    isNew = true
    
    get code(){
        return this.#dominos.Code;
    }
    set code(value){
        id.string(value);
        return this.#dominos.Code=value;
    }

    get quantity(){
        return this.#dominos.Qty;
    }
    set quantity(value){
        id.number(value);
        return this.#dominos.Qty=value;
    }

    get ID(){
        return this.#dominos.ID;
    }
    set ID(value){
        id.number(value);
        return this.#dominos.ID=value;
    }

    //to maintain private structure
    //options must be rewritten when updated
    get options(){
        return this.#dominos.Options;
    }
    set options(value){
        id.object(value);
        return this.#dominos.Options=value;
    }

    get dominos(){
        return this.#dominos;
    }

    #dominos={
        Code:'',
        Qty:1,
        ID:1,
        Options:{}
    }
}

export {
    Item as default,
    Item
};