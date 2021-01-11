import {get,post} from '../utils/api-json.js';
import urls from '../utils/urls.js';
import IsDominos from '../utils/customTypes.js';
import {Address} from '../index.js';

const isDominos=new IsDominos;

class NearbyStores{
    constructor(addressInfo, pickUpType=this.pickUpType) {
        isDominos.string(pickUpType);
        this.address = new Address(addressInfo);
        this.pickUpType = pickUpType;

        return this.#getStores();
    }

    address={}
    pickUpType='all'

    get stores(){
        return this.#stores;
    }

    #stores=[];

    async #getStores(){
        const stores=await get(
            urls.store.find
                .replace(
                    '${line1}',
                    encodeURI(
                        this.address.addressLines.line1
                    )
                ).replace(
                    '${line2}',
                    encodeURI(
                        this.address.addressLines.line2
                    )
                ).replace(
                    '${type}',
                    this.pickUpType
                )
        );

        this.#stores=stores.Stores;
        
        return this;
    }
};

export {
    NearbyStores as default,
    NearbyStores
};
