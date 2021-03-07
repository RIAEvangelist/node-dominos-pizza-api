import Is from 'strong-type';
import Address from './Address.js';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Customer extends DominosFormat{
    constructor(parameters) {
        super();
        this.init=parameters;
        this.address=new Address(parameters.address);
        this.phone=this.phone.replace(/\-/g,'');
        return this;
    }

    firstName   =''
    lastName    =''
    email       =''
    address     =new Address
    phone       =''
    phonePrefix =''
    
};

export {
    Customer as default,
    Customer
}
