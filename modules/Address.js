import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';

const weakIs=new Is(false);

class Address extends DominosFormat{
    constructor(parameters){
        super();
        this.init=parameters;

        if(weakIs.string(parameters)){
            this.#parse(parameters);
        }
        
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
