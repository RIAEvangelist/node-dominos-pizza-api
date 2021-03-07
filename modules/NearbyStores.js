import {get} from '../utils/api-json.js';
import urls from '../utils/urls.js';
import Is from 'strong-type';
import Address from '../modules/Address.js';

const is=new Is;
const defaultAddress=new Address('222 2nd St, San Francisco, CA 94105');

class NearbyStores{
    constructor(addressInfo=this.address, pickUpType='Delivery') {
        
        this.address = new Address(addressInfo);

        return this.#getStores(pickUpType);
    }

    address=defaultAddress
    stores=[]
    
    get dominosAPIResponse(){
        return this.#dominosAPIResponse; 
    }

    set dominosAPIResponse(value){
        is.object(value);

        return this.#dominosAPIResponse=value;
    }

    #dominosAPIResponse={}

    async #getStores(pickUpType){
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
                    '${pickUpType}',
                    pickUpType
                )
        );

        this.dominosAPIResponse=stores;

        this.address.formatted=stores.Address;
        this.stores=stores.Stores;

        //console.dir(this,{depth:1})
        
        return this;
    }
};

export {
    NearbyStores as default,
    NearbyStores
};
