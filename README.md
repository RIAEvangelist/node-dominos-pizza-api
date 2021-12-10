# Domino's Pizza API

[![Sponsor RIAEvangelist to help development of node-dominos-pizza-api](https://img.shields.io/static/v1?label=Sponsor%20Me%20On%20Github&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/RIAEvangelist)](https://github.com/sponsors/RIAEvangelist)

This is a node.js API for integrating with the Domino's pizza APIs.
[See the pretty Domino's Pizza API documentation](http://riaevangelist.github.io/node-dominos-pizza-api/)

npm dominos info :  [See npm trends and stats for dominos](http://npm-stat.com/charts.html?package=dominos&author=&from=&to=)  
[![Package Quality](http://npm.packagequality.com/badge/dominos.png)](http://packagequality.com/#?package=dominos)  
![dominos npm version](https://img.shields.io/npm/v/dominos.svg) ![supported node version for dominos api](https://img.shields.io/node/v/dominos.svg) ![total npm downloads for dominos](https://img.shields.io/npm/dt/dominos.svg) ![monthly npm downloads for dominos](https://img.shields.io/npm/dm/dominos.svg) ![npm licence for dominos](https://img.shields.io/npm/l/dominos.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub info :
[![node-dominos-pizza-api GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-dominos-pizza-api.svg) ![GitHub license node-dominos-pizza-api license](https://img.shields.io/github/license/RIAEvangelist/node-dominos-pizza-api.svg) ![open issues for node-dominos-pizza-api on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-dominos-pizza-api.svg)](http://riaevangelist.github.io/node-dominos-pizza-api/)

Build Info :  
Mac & Linux & Windows : [![Build Status](https://travis-ci.com/RIAEvangelist/node-dominos-pizza-api.svg?branch=v3.x)](https://travis-ci.com/RIAEvangelist/node-dominos-pizza-api?branch=v3.x) 
---

This work is licenced via the [MIT Licence](http://www.dbad-license.org/). It is a derivative work from Dominos API.

# Install the [Dominos](https://www.npmjs.com/package/dominos) pizza api


` npm i dominos `

# Contributing


1. Pull or Fork code.
2. From the cloned directory run ` npm i ` (this will install required dependancies, depending on your system may require)
3. Be awesome!


# Examples

See the examples directory for simple apps and demonstrations on using the basic functionality.


# Testing

For testing we have started using the extremely light `vanilla-test` testing suite. It is a pretty bare bones testing framework, but it works really well and simply with native ES6 and ESM. [vanilla-test on npm](https://www.npmjs.com/package/vanilla-test)

Simply run ` npm test `

This will setup everything that is needed to run the tests, install the modules required and run the tests for you.

***Remember, the Dominos API is rate limited,*** so if you make too many requests, like running tests back to back too many times, you may need to wait a short while before making new requests.

---

# Code Coverage

For coverage we are using the amazing `c8` coverage suite. It produces awesom instanbul style reports as well as lcov and much mmore. It allows testing of pure ES6 code without transpiling, and does not modify the code at all for coverage. It uses the built in node coverage tools to test the execution directly inside v8 [c8 on npm](https://www.npmjs.com/package/c8)

Simply run ` npm test ` and the coverage files will be added to the `./coverage` directory automatically. You can start a local coverage server to view your results by running `npm run coverage`. This will start a simple [`node-http-server`](https://github.com/RIAEvangelist/node-http-server) for your local coverage directory.

### [See the public c8 & vanilla-test code coverage](https://cdn-avsja.ondigitalocean.app/node-dominos-pizza-api/index.html)

---

# TLDR; Order & Track a Pizza

```js

import {Order,Customer,Item,Payment,NearbyStores,Tracking} from 'dominos';

//extra cheese thin crust pizza
const pizza=new Item(
    {
        //16 inch hand tossed crust
        code:'16SCREEN',
        options:{
            //sauce, whole pizza : normal
            X: {'1/1' : '1'}, 
            //cheese, whole pizza  : double 
            C: {'1/1' : '2'},
            //pepperoni, whole pizza : double 
            P: {'1/2' : '2'}
        }
    }
);

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '2 Portola Plaza, Monterey, Ca, 93940',
        firstName: 'Brandon',
        lastName: 'Miller',
        //where's that 555 number from?
        phone: '941-555-2368',
        email: 'brandon@diginow.it'
    }
);

let storeID=0;
let distance=100;
//find the nearest store
const nearbyStores=await new NearbyStores(customer.address);
//inspect nearby stores
//console.log('\n\nNearby Stores\n\n')
//console.dir(nearbyStores,{depth:5});


//get closest delivery store
for(const store of nearbyStores.stores){
    //inspect each store
    //console.dir(store,{depth:3});
    
    if(
        //we check all of these because the API responses seem to say true for some
        //and false for others, but it is only reliably ok for delivery if ALL are true
        //this may become an additional method on the NearbyStores class.
        store.IsOnlineCapable 
        && store.IsDeliveryStore
        && store.IsOpen
        && store.ServiceIsOpen.Delivery
        && store.MinDistance<distance
    ){
        distance=store.MinDistance;
        storeID=store.StoreID;
        //console.log(store)
    }
}

if(storeID==0){
    throw ReferenceError('No Open Stores');
}

//console.log(storeID,distance);


//create
const order=new Order(customer);

// console.log('\n\nInstance\n\n');
// console.dir(order,{depth:0});

order.storeID=storeID;
// add pizza
order.addItem(pizza);
//validate order
await order.validate();

// console.log('\n\nValidate\n\n');
//console.dir(order,{depth:3});

//price order
await order.price();

// console.log('\n\nPrice\n\n');
// console.dir(order,{depth:0});

//grab price from order and setup payment
const myCard=new Payment(
    {
        amount:order.amountsBreakdown.customer,
        
        // dashes are not needed, they get filtered out
        number:'4100-1234-2234-3234',
        
        //slashes not needed, they get filtered out
        expiration:'01/35',
        securityCode:'867',
        postalCode:'93940',
        tipAmount:4
    }
);

order.payments.push(myCard);

//place order

try{
    //will throw a dominos error because
    //we used a fake credit card
    await order.place();

    console.log('\n\nPlaced Order\n\n');
    console.dir(order,{depth:3});

    const tracking=new Tracking();

    const trackingResult=await tracking.byPhone(customer.phone);

    console.dir(trackingResult,{depth:1});
}catch(err){
    console.trace(err);

    //inspect Order Response to see more information about the 
    //failure, unless you added a real card, then you can inspect
    //the order itself
    console.log('\n\nFailed Order Probably Bad Card, here is order.priceResponse the raw response from Dominos\n\n');
    console.dir(
        order.placeResponse,
        {depth:5}
    );
}




```

# Legacy CommonJS support

This is for those who wish to use the `domnios api` in older code bases still using `require`. While node v12+ is still required, see the detailed info and order example in [CommonJS.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/CommonJS.md) for how to include and use the module in your code.

```js

(async () => {
    const dominos=await import('dominos');

    //importing variables into the global like this just allows us to use the same code
    //from the ESM implementation for the commonJS implementation
    //This is the same as an ESM import of
//import {Address,NearbyStores,Store,Menu,Customer,Item,Image,Order,Payment,Tracking,urls,IsDominos} from 'dominos'

    Object.assign(global,dominos);

    //need to await dominos promise completion
    //because ES6 is async by nature
    start();
})()

function start(){
    //any of the ESM examples from the other docs will work as is here
    //because we mimiced an ESM import above.
     
    const n='\n';
    console.log(
        n,
        Address,n,
        NearbyStores,n,
        Store,n,
        Menu,n,
        Customer,n,
        Item,n,
        Image,n,
        Order,n,
        Payment,n,
        Tracking,n,
        urls,n,
        IsDominos,n
    );
}


```

---

# International Support

The module now supports using multiple sets of endpoints that we have in `./utils/urls.js` or even custom endpoints. However, if you get hyour country working with custom endpoints, ***PLEASE CONTRIBUTE THEM BACK***! You will get credit as soon as your endpoints are merged back in.

See detailed information on how to use the international endpoints or custom endpoints here : [International Dominos Endpoints and how to use them](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/InternationalSupport.md)

### USA
USA is default so you really dont need to do anything other than `import {urls} from 'dominos';` if you want access to the usa endpoints.

```js

  import {urls} from 'dominos';
  console.dir(urls);



  //Or to reset the usa if you switched to custom or another country
  
  
  import {urls} from 'dominos';
  import {useInternational,canada,usa} from 'dominos/utils/urls.js';
  
  //first set to canada so we can see it work since USA is default
  useInternational(canada);
  console.dir(urls);
  
  //then set it back to usa so we can confirm it works
  useInternational(usa);
  console.dir(urls);
  

```



### Canada

```js

  import {urls} from 'dominos';
  import {useInternational,canada} from 'dominos/utils/urls.js';
  useInternational(canada);

  console.dir(urls);

```

### Custom

```js

  import {urls} from 'dominos';
  import {useInternational,canada} from 'dominos/utils/urls.js';
  
  const myCountriesURLs={
      referer   :"https://order.dominos.nz/en/pages/order/",
      sourceUri :"order.dominos.nz",
          location:{
          find:urls.location.find
      },
      store     : {
          find    : "https://order.dominos.nz/power/store-locator?s=${line1}&c=${line2}&type=${type}",
          info    : "https://order.dominos.nz/power/store/${storeID}/profile",
          menu    : "https://order.dominos.nz/power/store/${storeID}/menu?lang=${lang}&structured=true"
      },
      order     : {
          validate: "https://order.dominos.nz/power/validate-order",
          price   : "https://order.dominos.nz/power/price-order",
          place   : "https://order.dominos.nz/power/place-order"
      },
      track   : "https://order.dominos.nz/orderstorage/GetTrackerData?"
  }


  useInternational(myCountriesURLs);

  console.log('MY COUSTOM FAKE NZ ENDPOINTS');
  console.dir(urls);

```



# Address

See the detailed docs on addresses here : [Address.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md)

```js

  import {Address} from 'dominos';

  //full address examples
  const address = new Address(
      {
          street:'900 Clark Ave',
          city:'St. Louis',
          region:'MO',
          postalCode:'63102'
      }
  );

  const address=new Address('900 Clark Ave, St. Louis, MO, 63102');
  


  //partial address examples
  const address = new Address(
      {
          street:'900 Clark Ave',
          city:'St. Louis',
          postalCode:'63102'
      }
  );
  
  const address=new Address('900 Clark Ave, St. Louis, 63102');



  //street and zip only examples
  const fullAddressObject = new Address(
      {
          street:'900 Clark Ave',
          postalCode:'63102'
      }
  );
  
  const address=new Address('900 Clark Ave, 63102'); 

  //zip only examples
  const fullAddressObject = new Address(
      {
          postalCode:'63102'
      }
  );

  const onlyZip = new Address('63102');

```

---

# NearbyStores

This provides a list of basic info on stores that are nearby an address.

See the detailed docs on finding nearby stores here : [NearbyStores.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/NearbyStores.md)

``` js

    import {NearbyStores, Store} from 'dominos';
  
    const nearbyStores=await new NearbyStores('88 Colin P Kelly Jr St, 94107');

    console.dir(nearbyStores,{depth:1});
    
    console.log('\n\nFirst nearby store');
    console.dir(nearbyStores.stores[0],{depth:1});

    //initialize the frst of the nearbyStores.stores
    const store=await new Store(nearbyStores.stores[0].StoreID);

    console.log('\n\nFull Store info called from the first nearby stores ID');
    console.dir(store,{depth:1});

```

---

# Menu

This provides a detailed menu for a given store.

See the detailed docs on menus here : [Menu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Menu.md)

```js

import {Menu} from 'dominos';

const menu=await new Menu(4337);

console.dir(menu,{depth:1});

```

---

# Store

This provides detailed store information.

See the detailed docs on stores here : [Store.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Store.md)

```js

    import {Store} from 'dominos';

    const store=await new Store(4337);

    console.dir(store,{depth:1});

```

---

# Item

Items are used to place orders.

See the detailed docs on items here : [Item.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Item.md)

```js
import {Item} from 'dominos';

const pepperoniPizza=new Item(
    {
        code:'P_14SCREEN'
    }
)

console.dir(pepperoniPizza);

```

---

# Customer

This creates a customer object for use when making an order.

See the detailed docs on customers here : [Customer.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Customer.md)

```js

import {Customer} from 'dominos';

const customer = new Customer(
    {
        address: '900 Clark Ave, 63102',
        firstName: 'Barack',
        lastName: 'Obama',
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

console.dir(customer);

```

---

# Image
The Image class will grab the image for a product code and base 64 encode it. It extends the [`js-base64-file` class](https://github.com/RIAEvangelist/js-base64-file).

![Pizza image](https://cache.dominos.com/olo/6_47_2/assets/build/market/US/_en/images/img/products/larges/S_PIZPX.jpg)

See the detailed docs on image here : [Image.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Image.md)

```js

import {Image} from 'dominos';

const productCode='S_PIZPX';
const savePath='./';

const pepperoniPizza=await new Image(productCode);
console.log(pepperoniPizza.base64Image);

//you could pass this to a user via sms, web socket, http, tcp, make an ascii art for the terminal, OR save it to disk or a database
//here we just save it to disk as an example.
//this is part of the js-base64-file class refrence, there is a link at the top of this file
pepperoniPizza.saveSync(pepperoniPizza.base64Image,savePath,productCode+'.jpg');


```

---

# Payment

This class will initialize a creditcard payment object for an order.

See the detailed docs on payment here : [Payment.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Payment.md)


```js

import {Payment} from 'dominos';

const myCard=new Payment(
    {
        amount:10.77,
        //dashes are not needed, they just make it easier to read
        //the class sanitizes the data
        number:'4444-4444-4444-4444',
        expiration:'01/12',
        securityCode:'867',
        postalCode:'93940'
    }
)


```
---

# Order

***Finally...*** This class will order you pizza, and other things from the menu.

See the detailed docs on order here : [Order.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Order.md)


```js

import {Order,Customer,Item,Payment} from 'dominos';

//extra cheese thin crust pizza
const pizza=new Item(
    {
        code:'14THIN',
        options:{
            //sauce, whole pizza : normal
            X: {'1/1' : '1'}, 
            //cheese, whole pizza  : double 
            C: {'1/1' : '2'}
        }
    }
);

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '110 S Fairfax Ave, 90036',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

//create
const order=new Order(customer);
order.storeID=8244;
// add pizza
order.addItem(pizza);
//validate order
await order.validate();
//price order
await order.price();

//grab price from order and setup payment
const myCard=new Payment(
    {
        amount:order.amountsBreakdown.customer,
        
        // dashes are not needed, they get filtered out
        number:'4100-1234-2234-3234',
        
        //slashes not needed, they get filtered out
        expiration:'01/35',
        securityCode:'867',
        postalCode:'93940'
    }
);

order.payments.push(myCard);

//place order
await order.place();

//inspect Order
console.dir(order,{depth:5});

//you probably want to add some tracking too...


```

---
# Tracking

This is how you track Pizzas! (and other things)

You can track its progress, who is working on it, who your delivery person is, and how many stops they have before you using this Class.

If there are no orders for a given phone number, it will throw a `DominosTrackingError`.

```js

import {Tracking} from 'dominos';

const tracking=new Tracking();

const trackingResult=await tracking.byPhone('3108675309');

console.dir(trackingResult,{depth:1});

```
---

# Dominos Custom Type Checking

This class extends [`strong-type`](https://github.com/RIAEvangelist/strong-type) to allow strong and weak type checking of dominos specific types, errors and classes. It is used a lot in the `dominos` module to ensure correct types of arguments and errors. The `strong-type` module is really cool. 

See the [DominosTypes.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosTypes.md) for more information.

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



---

# Global DominosErrors

These custom errors are added to the global object for use in your code and the `dominos` api. You can use them to validate errors or even throw your own if you are making a module ontop of this one.

See the detailed docs on DominosErrors here : [DominosErrors.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosErrors.md)

|error                  |parameters           |description|
|-----                  |----------           |-----------|
|DominosValidationError |`.validationResponse`|this error is thrown when a dominos validation request fails|
|DominosPriceError      |`.priceResponse`     |this error is thrown when a dominos price request fails|
|DominosPlaceOrderError |`.placeOrderResponse`|this error is thrown when a dominos place request fails|
|DominosTrackingError   |message string       |this error is thrown when no trackable orders are found for a phone number|
|DominosAddressError    |message string       |this error is thrown when an issue is detected with a dominos address|
|DominosDateError       |message string       |this error is thrown when an issue is detected with a date being used for a dominos order|
|DominosStoreError      |message string       |this error is thrown when an issue is detected with a store being used for a dominos order|
|DominosProductsError   |message string       |this error is thrown when an issue is detected with an orders product list|

----

# Code, Order, Eat, Be Happy!

![Tatsu Ninja Turtles Go Play](https://media1.tenor.com/images/1e5eb7062aefb9fba304ca81ba877922/tenor.gif?itemid=7950001)
