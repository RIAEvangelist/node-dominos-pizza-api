# Domino's Pizza API

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


You can run the domino's pizza command line interface from your terminal just by running ` npm start `! See the example in the examples directory.

See the examples directory for simple apps and demonstrations on using the basic functionality.


# Testing

For testing we have started using the extremely light `vanilla-test` testing suite. It is a pretty bare bones testing framework, but it works really well and simply with native ES6 and ESM. [vanilla-test on npm](https://www.npmjs.com/package/vanilla-test)

Simply run ` npm test `

This will setup everything that is needed to run the tests, install the modules required and run the tests for you.

Remember, the Dominos API is rate limited, so if you make too many requests, like running tests back to back too many times, you may need to wait a short while before making new requests.

---

# Code Coverage

For coverage we are using the amazing `c8` coverage suite. It produces awesom instanbul style reports as well as lcov and much mmore. It allows testing of pure ES6 code without transpiling, and does not modify the code at all for coverage. It uses the built in node coverage tools to test the execution directly inside v8 [c8 on npm](https://www.npmjs.com/package/c8)

Simply run ` npm test ` and the coverage files will be added to the `./coverage` directory automatically. You can start a local coverage server to view your results by running `npm run coverage`. This will start a simple [`node-http-server`](https://github.com/RIAEvangelist/node-http-server) for your local coverage directory.

### [See the public c8 & vanilla-test code coverage](https://cdn-p939v.ondigitalocean.app/node-dominos-pizza-api/index.html)

---

# International Support

The module now supports using multiple sets of endpoints that we have in `./utils/urls.js` or even custom endpoints. However, if you get hyour country working with custom endpoints, ***PLEASE CONTRIBUTE THEM BACK***! You will get credit as soon as your endpoints are merged back in.

See detailed information on how to use the international endpoints or custom endpoints here : [International Dominos Endpoints and how to use them](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/InternationalSupport.md)

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

See the detailed docs on addresses here : [Address.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Address.md)

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

See the detailed docs on finding nearby stores here : [NearbyStores.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/NearbyStores.md)

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

See the detailed docs on menus here : [Menu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Menu.md)

```js

import {Menu} from 'dominos';

const menu=await new Menu(4337);

console.dir(menu,{depth:1});

```

---

# Store

This provides detailed store information.

See the detailed docs on stores here : [Store.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Store.md)

```js

    import {Store} from 'dominos';

    const store=await new Store(4337);

    console.dir(store,{depth:1});

```

---

# Item

Items are used to place orders.

See the detailed docs on items here : [Item.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Item.md)

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

See the detailed docs on customers here : [Customer.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Customer.md)

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

See the detailed docs on image here : [Image.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Image.md)

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

# Tracking

This is how you track Pizzas! (and other things)

See the detailed docs on tracking here : [Tracking.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Tracking.md)

```js

import {Tracking} from 'dominos';

const tracking=new Tracking();

const trackingResult=await tracking.byPhone('3108675309');

console.dir(trackingResult,{depth:1});

//outputs
Tracking {
  orders: {},
  query: { Phone: '3108675309' },
  dominosAPIResult: { 'soap:Envelope': [Object] }
}

```

# Payment

This class will initialize a creditcard payment object for an order.

See the detailed docs on payment here : [Payment.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Payment.md)


```js

import {Payment} from '../index.js';

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










# Global DominosErrors

These custom errors are added to the global object for use in your code and the `dominos` api. You can use them to validate errors or even throw your own if you are making a module ontop of this one.

See the detailed docs on DominosErrors here : [DominosErrors.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/DominosErrors.md)

|error                  |parameters         |description|
|-----                  |----------         |-----------|
|DominosValidationError |validationResponse |this error is thrown when a dominos validation request fails|


# Below docs are still v2.0 updating docs in order as I go


# Order


This is the class that every other class feeds into.

|argument|type|default|
|--------|----|-------|
|code|String|null|
|quantity|Integer|1|
|options|Array|[]|

### creating an order

```javascript

  var pizza = require('dominos');

  var thePresident = new pizza.Customer(
      {
          firstName: 'Barack',
          lastName: 'Obama',
          address: '1600 Pennsylvania Avenue, Washington, DC',
          email: 'barack@whitehouse.gov'
      }
  );

  var order = new pizza.Order(
      {
          customer: thePresident,

          //optional set the store ID right away
          storeID: myStore.ID,

          deliveryMethod: 'Delivery' //(or 'Carryout')
      }
  );

  //or

  var order = new pizza.Order();

  order.FirstName = data;
  order.LastName = data;
  order.Email = data;
  order.Phone = data;

  //and if you want to update the store id just :

  order.StoreID = myStore.ID;

```

### duplicating an order

```javascript

  var anotherIdenticalOrder = new pizza.Order(
      {
          order:order
          //or
          //Order:order
          //because domino's pizza web API returns pascal case...
      }
  );

  //or create a duplicate order WITH different customer params

  var order = new pizza.Order(
      {
          customer: thePresident,
          deliveryMethod: 'Delivery' //(or 'Carryout')
      }
  );

```

### Adding a product to the order :

```javascript

  order.addItem(
      new pizza.Item(
          {
              code: '14SCREEN',
              options: [],
              quantity: 1
          }
      )
  );

```

### Validating an Order
This step is **Strongly** recommended

```javascript

  order.validate(
      function(result) {
          console.log("We did it!");
      }
  );

```

### Price an Order

```javascript

  order.price(
      function(result) {
          console.log("Price!")
      }
  );

```

### Place an Order
At least one item must've been added to place an order.

#### with payment allowed
You don't have to do anything for the payment, Domino's Pizza will handle all transactions.

```javascript

  var pizza = require('dominos');

  var cardNumber = '4100123422343234';

  var cardInfo = new order.PaymentObject();
  cardInfo.Amount = order.Amounts.Customer;
  cardInfo.Number = cardNumber;
  cardInfo.CardType = order.validateCC(cardNumber);
  cardInfo.Expiration = '0115';//  01/15 just the numbers "01/15".replace(/\D/g,'');
  cardInfo.SecurityCode = '777';
  cardInfo.PostalCode = '90210'; // Billing Zipcode

  order.Payments.push(cardInfo);

  order.place(
      function(result) {
          console.log("Order placed!");
      }
  );

```

---



Code, Order, Eat, Be Happy!
