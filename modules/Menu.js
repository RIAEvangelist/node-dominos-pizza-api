import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';

const is=new Is;


class Menu{
    constructor(menu) {
        is.object(menu);
        
        this.#dominos = menu;
    }

    get dominos(){
        return this.#dominos;
    }

    get menu(){
        return this.#menu;
    }



    #menu={}

    #dominos={}
   
}

export {
    Menu as default,
    Menu
}
