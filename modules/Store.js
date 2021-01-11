import defaultParameters from './defaultParameters.js';
import {get,post} from '../utils/api-json.js';
import urls from '../utils/urls.js';
import Menu from './Menu.js';
import Is from 'strong-type';

const is=new Is;

class Store{
    //parameters object required
    //parameters.id also required as a minimum
    constructor(id,lang='en') {
        is.string(lang);
        return this.#init(id,lang);
    }

    get dominos(){
        return this.#dominos;
    }

    get info(){
        return this.#info;
    }

    get menu(){
        return this.#menu.menu;
    }

    #dominos={}
    #info={}
    #menu={}

    async #init(id,lang) {

        this.#info=await get(
            urls.store.info.replace('${storeID}', id)
        );

        
        this.#menu=new Menu(
            await get(
                urls.store.menu
                    .replace('${storeID}', this.info.StoreID)
                    .replace('${lang}', lang)
            )
        );

        return this;
    }
};

export {
    Store as default,
    Store
}
