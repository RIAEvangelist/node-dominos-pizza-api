import Is from 'strong-type';
import Address from './Address.js';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Customer extends DominosFormat{
    constructor(parameters) {
        super();
        this.init=parameters;
        this.address=new Address(parameters.address);
    }

    firstName   =''
    lastName    =''
    email       =''
    address     =new Address
    phone       =''
    
};

export {
    Customer as default,
    Customer
}