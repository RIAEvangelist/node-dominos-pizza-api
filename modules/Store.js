import {get} from '../utils/api-json.js';
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

    async #init(id,lang) {

        this.info=await get(
            urls.store.info.replace('${storeID}', id)
        );

        this.menu=await new Menu(id,lang);

        return this;
    }
};

export {
    Store as default,
    Store
}
