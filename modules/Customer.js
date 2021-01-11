import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';

const is=new Is;

class Customer{
    constructor(parameters) {
        defaultParameters.call(this,parameters);
    }

    get ID(){
        return this.#dominos.ID;
    }
    set ID(value){
        is.number(value);
        return this.#dominos.ID=value;
    }

    get firstName(){
        return this.#dominos.firstName;
    }
    set firstName(value){
        is.string(value);
        return this.#dominos.firstName=value;
    }

    get lastName(){
        return this.#dominos.lastName;
    }
    set lastName(value){
        is.string(value);
        return this.#dominos.lastName=value;
    }

    get email(){
        return this.#dominos.email;
    }
    set email(value){
        is.string(value);
        return this.#dominos.email=value;
    }

    get address(){
        return this.#dominos.address;
    }
    set address(value){
        is.string(value);
        return this.#dominos.address=value;
    }

    get phone(){
        return this.#dominos.phone;
    }
    set phone(value){
        is.string(value);
        return this.#dominos.phone=value;
    }

    get dominos(){
        return this.#dominos;
    }

    #dominos={
        ID:0,
        firstName:'',
        lastName:'',
        email:'',
        address:'',
        phone:''
    }
};

export {
    Customer as default,
    Customer
}
