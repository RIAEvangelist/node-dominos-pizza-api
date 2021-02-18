import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';
import {toPascal,toCamel} from '../utils/toCase.js';

const weakIs=new Is(false);

class Address {
    constructor(parameters){
        //merge params into this object
        const paramsRemaining=defaultParameters.call(this,parameters);
        
        if(!paramsRemaining){
            //if no paramsRemaining stop trying to merge
            return this;
        };
        
        if (weakIs.undefined(parameters)) {
            return this;
        }

        this.#parse(parameters);

        return this;
    }

    street      =''
    streetNumber=''
    streetName  =''
    unitType    =''
    unitNumber  =''
    city        =''
    region      =''
    postalCode  =''
    deliveryInstructions=''

    get formatted(){
        const dominosAddress={};
        
        for(const [key,value] of Object.entries(this)){
            const pascalKey=toPascal(key);
            
            dominosAddress[pascalKey]=value;
        }

        return dominosAddress;
    }

    set formatted(dominosAddress){
        for(const [key,value] of Object.entries(dominosAddress)){
            const camelKey=toCamel(key);
            
            this[camelKey]=value;
        }

        return this;
    }

    get addressLines() {
        const line1 = this.street
            ||`${this.streetNumber} ${this.streetName} ${this.unitType} ${this.unitNumber}`
            ||'';
            
        const line2 = `${
            (this.city||'')
        } ${
            (this.region||'')
        } ${
            this.postalCode
        }`

        const lines={
            line1,
            line2
        };
        
        return lines;
    }

    #parse(locationString) {
        return parseAddress.call(this,locationString);
    }   
}

const parseAddress=function(locationString){
    const splitAddress = locationString.split(',');

    for (var i in splitAddress) {
        splitAddress[i] = splitAddress[i].trim();
    }

    this.postalCode= splitAddress[splitAddress.length-1]

    //works well enough for addresses, could be better though
    switch (splitAddress.length) {
        case 2:
            this.street=splitAddress[0];
            break;
        case 3:
            this.street=splitAddress[0];
            this.city = splitAddress[1];
            
            break;
        case 4:
            this.street = splitAddress[0];
            this.city = splitAddress[1];
            this.region = splitAddress[2];
    }
}

export {
    Address as default,
    Address
};
