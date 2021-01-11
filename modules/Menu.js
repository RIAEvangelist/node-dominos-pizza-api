import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';

const is=new Is;


class Menu{
    constructor(menu) {
        is.object(menu);
        
        this.#menu = menu;
    }

    get menu(){
        return this.#menu;
    }

    #menu={}
   
}

export {
    Menu as default,
    Menu
}
