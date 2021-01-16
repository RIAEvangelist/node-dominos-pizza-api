import defaultParameters from './defaultParameters.js';
import {get,post} from '../utils/api-json.js';
import urls from '../utils/urls.js';
import Menu from './Menu.js';
import Is from 'strong-type';

const is=new Is;
const weakIs=new Is(false);

class Store{
    //parameters object required
    //parameters.id also required as a minimum
    constructor(id,lang='en') {
        //accept both string and number types for id
        if(!weakIs.number(id)&&!weakIs.string(id)){
            throw new ReferenceError(`Store class expects id to be a number or string, but got ${id}`);
        }
        is.string(lang);
        return this.#init(id,lang);
    }

    get info(){
        return this.#info;
    }

    //add this back in once menu parsing complete
    // get menu(){
    //     return this.#menu;
    // }

    #info={}
    //#menu={}

    async #init(id,lang) {

        this.#info=await get(
            urls.store.info.replace('${storeID}', id)
        );

        
        this.menu=new Menu(
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
