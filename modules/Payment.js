import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Payment extends DominosFormat{
    constructor(parameters={}) {
        super();

        

        this.init=parameters;
    }

    
    type="CreditCard"
    amount=0
    number=""
    
    //all uppercase
    cardType=""
    
    //digits only
    expiration=""
    securityCode=""
    postalCode=""    
}

export {
    Payment as default,
    Payment
}