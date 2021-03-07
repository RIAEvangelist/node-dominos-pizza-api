# Dominos Custom Type Checking

This class extends [`strong-type`](https://github.com/RIAEvangelist/strong-type) to allow strong and weak type checking of dominos specific types, errors and classes. It is used a lot in the `dominos` module to ensure correct types of arguments and errors. The `strong-type` module is really cool. 

See the [`strong-type` documentation](https://github.com/RIAEvangelist/strong-type) for more detailed information on how to use this. There are lots of cool features inherited into `IsDominos` like weak or non-strict type checking, which will just return true or false instead of throwing. 

# Example

```js

import {IsDominos,Address} from 'dominos'

isDominos=new IsDominos;

let address='bob';

//address is a string so this will throw an Error
try{
    isDominos.address(address);
}catch(err){
    console.trace(err);
}

address=new Address('1 alvarado st, 93940');

//will not throw because this is an Address instance
isDominos.address(address);


```


# Available Types

```js

import Is from 'strong-type';
import VanillaTest from 'vanilla-test';

//imports all the various DOminos classes and Errors 

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

    addressError(value){
        return this.instanceCheck(value,DominosAddressError);
    }

    dateError(value){
        return this.instanceCheck(value,DominosDateError);
    }

    storeError(value){
        return this.instanceCheck(value,DominosStoreError);
    }

    productsError(value){
        return this.instanceCheck(value,DominosProductsError);
    }

    fetchError(value){
        return this.instanceCheck(value,FetchError);
    }
}

```