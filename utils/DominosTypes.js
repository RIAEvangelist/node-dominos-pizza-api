import '../modules/DominosErrors.js';

import Is from 'strong-type';
import {FetchError} from 'node-fetch';

import Address from '../modules/Address.js';
import AmountsBreakdown from '../modules/AmountsBreakdown.js';
import NearbyStores from '../modules/NearbyStores.js';
import Menu from '../modules/Menu.js';
import Store from '../modules/Store.js';
import Item from '../modules/Item.js';
import Image from '../modules/Image.js';
import Customer from '../modules/Customer.js';
import Tracking from '../modules/Tracking.js';
import Payment from '../modules/Payment.js';

import VanillaTest from 'vanilla-test';

class IsDominos extends Is{
    test(value){
        return this.instanceCheck(value,VanillaTest);
    }

    address(value){
        return this.instanceCheck(value,Address);
    }

    amountsBreakdown(value){
        return this.instanceCheck(value,AmountsBreakdown);
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

    validationError(value){
        return this.instanceCheck(value,DominosValidationError);
    }

    priceError(value){
        return this.instanceCheck(value,DominosPriceError);
    }

    placeOrderError(value){
        return this.instanceCheck(value,DominosPlaceOrderError);
    }

    fetchError(value){
        return this.instanceCheck(value,FetchError);
    }
}

export {
    IsDominos as default, 
    IsDominos
};