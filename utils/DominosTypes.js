import Is from 'strong-type';
import {Address,NearbyStores,Store} from '../index.js';
import VanillaTest from 'vanilla-test';

class IsDominos extends Is{
    test(value){
        return this.instanceCheck(value,VanillaTest);
    }

    address(value){
        return this.instanceCheck(value,Address);
    }

    nearbyStores(value){
        return this.instanceCheck(value,NearbyStores);
    }

    store(value){
        return this.instanceCheck(value,Store);
    }
}

export {
    IsDominos as default, 
    IsDominos
};