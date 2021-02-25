import Is from 'strong-type';
import {Address,NearbyStores,Menu,Store, Item, Customer, Tracking, Payment, Image} from '../index.js';
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

    menu(value){
        return this.instanceCheck(value,Menu);
    }

    store(value){
        return this.instanceCheck(value,Store);
    }

    item(value){
        return this.instanceCheck(value,Item);
    }

    customer(value){
        return this.instanceCheck(value,Customer);
    }

    image(value){
        return this.instanceCheck(value,Image);
    }

    payment(value){
        return this.instanceCheck(value,Payment);
    }

    tracking(value){
        return this.instanceCheck(value,Tracking);
    }
}

export {
    IsDominos as default, 
    IsDominos
};