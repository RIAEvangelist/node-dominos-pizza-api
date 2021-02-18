# Domino's Pizza API

This is a node.js API for integrating with the Domino's pizza APIs.
[See the pretty Domino's Pizza API documentation](http://riaevangelist.github.io/node-dominos-pizza-api/)

npm dominos info :  [See npm trends and stats for dominos](http://npm-stat.com/charts.html?package=dominos&author=&from=&to=)  
[![Package Quality](http://npm.packagequality.com/badge/dominos.png)](http://packagequality.com/#?package=dominos)  
![dominos npm version](https://img.shields.io/npm/v/dominos.svg) ![supported node version for dominos api](https://img.shields.io/node/v/dominos.svg) ![total npm downloads for dominos](https://img.shields.io/npm/dt/dominos.svg) ![monthly npm downloads for dominos](https://img.shields.io/npm/dm/dominos.svg) ![npm licence for dominos](https://img.shields.io/npm/l/dominos.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub info :
[![node-dominos-pizza-api GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-dominos-pizza-api.svg) ![GitHub license node-dominos-pizza-api license](https://img.shields.io/github/license/RIAEvangelist/node-dominos-pizza-api.svg) ![open issues for node-dominos-pizza-api on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-dominos-pizza-api.svg)](http://riaevangelist.github.io/node-dominos-pizza-api/)

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

Simply run ` npm test ` and the coverage files will be added to the `./coverage` directory automatically. 

---

# International Support


Provided a country uses the same api as the US, you can just update the URL endpoints from the url ESM.

See the various [International Dominos Endpoints and how to use them](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/InternationalSupport.md)



# Address

[Address.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Address.md)

---

# NearbyStores for Finding Stores

[NearbyStores.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/NearbyStores.md)

---

# Menu

[Menu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Menu.md)

---

# Store

[Store.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Store.md)

---

# Item

[Item.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Item.md)

---


# Below docs are still v2.0 updating docs in order as I go

# Customer


|argument|type|default|
|--------|----|-------|
|address|Address|null|
|firstName|String|''|
|lastName|String|''|
|email|String|''|
|phone|String|''|

---

```javascript

  var customer = new Customer(
      {
          address: someAddressObj,
          firstName: 'Barack',
          lastName: 'Obama',
          phone: '1-800-The-White-House',
          email: 'br'
      }
  )

```
---

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

# Tracking


### By Phone

|argument|type|default|required|
|--------|----|-------|--------|
|phone|Phone number string or int|null|true|
|callback|function to pass the api result to|null|true|

```javascript

  var pizza = require('dominos'); 

  pizza.Track.byPhone(
      2024561111,
      function(pizzaData){
          console.log(pizzaData);
      }
  );

```

### By orderKey

|argument|type|default|required|
|--------|----|-------|--------|
|orderKey|string or int|null|true|
|storeID|sting or int|null|true|
|callback|function to pass the api result to|null|true|

```javascript

  var pizza = require('dominos'); 

  pizza.Track.byId(
      123456,
      12345,
      function(pizzaData){
          console.log(pizzaData)
      }
  );

```

Code, Order, Eat, Be Happy!
