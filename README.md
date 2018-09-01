Domino's Pizza API
====
This is a node.js API for integrating with the Domino's pizza APIs.
[See the pretty Domino's Pizza API documentation](http://riaevangelist.github.io/node-dominos-pizza-api/)

[![Join the chat at https://gitter.im/RIAEvangelist/node-dominos-pizza-api](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RIAEvangelist/node-dominos-pizza-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

__PAYMENT-SUPPORTED-MODULE__
This module will pass payment information directly from the customer to Domino's Pizza for Domino's Pizza to process.

npm dominos info :  [See npm trends and stats for dominos](http://npm-stat.com/charts.html?package=dominos&author=&from=&to=)  
[![Package Quality](http://npm.packagequality.com/badge/dominos.png)](http://packagequality.com/#?package=dominos)  
![dominos npm version](https://img.shields.io/npm/v/dominos.svg) ![supported node version for dominos api](https://img.shields.io/node/v/dominos.svg) ![total npm downloads for dominos](https://img.shields.io/npm/dt/dominos.svg) ![monthly npm downloads for dominos](https://img.shields.io/npm/dm/dominos.svg) ![npm licence for dominos](https://img.shields.io/npm/l/dominos.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub info :
[![node-dominos-pizza-api GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-dominos-pizza-api.svg) ![GitHub license node-dominos-pizza-api license](https://img.shields.io/github/license/RIAEvangelist/node-dominos-pizza-api.svg) ![open issues for node-dominos-pizza-api on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-dominos-pizza-api.svg)](http://riaevangelist.github.io/node-dominos-pizza-api/)

---

Special thanks to : [@madelinecameron](https://github.com/madelinecameron), a major contributor to this repo.

---

This work is licenced via the [DBAD Public Licence](http://www.dbad-license.org/). It is a derivative work from Dominos API.

Install the [Dominos](https://www.npmjs.com/package/dominos) pizza api
====

` npm i dominos ` or ` npm i --save dominos `


Contributing
====

1. Pull or Fork code.
2. from the cloned directory run ` npm install ` (this will install required dependancies, depending on your system may require)
3. be awesome!


Examples
====

You can run the domino's pizza command line interface from your terminal just by running ` npm start `! See the example in the examples directory.

See the examples directory for simple apps and demonstrations on using the basic functionality.


Testing
====
Simply run ` npm test `
if you have issues with this you may want to try installing mocha globally like this : ` npm install -g mocha `

-OR for manual testing-

1. Install mocha ` npm install -g mocha `
1. Run the tests ` mocha `

---

For Canada
====

Set the urls.json file to be:
```
{
  "referer":"https://order.dominos.ca/en/pages/order/",
  "sourceUri":"order.dominos.ca",
  "store": {
    "find": "https://order.dominos.ca/power/store-locator?s=${line1}&c=${line2}&type=${type}",
    "info": "https://order.dominos.ca/power/store/${storeID}/profile",
    "menu": "https://order.dominos.ca/power/store/${storeID}/menu?lang=${lang}&structured=true"
  },
  "order": {
    "validate": "https://order.dominos.ca/power/validate-order",
    "price": "https://order.dominos.ca/power/price-order",
    "place": "https://order.dominos.ca/power/place-order"
  },
  "track": "https://trkweb.dominos.ca/orderstorage/GetTrackerData?"
}

```

Finding Stores
====

|argument|type|default|required|
|--------|----|-------|--------|
|address|full or partial address string|null|true|
|type|Delivery, Carryout, all| all | true|
|callback|function to pass the api result to|null|true|

Note: the 'address' parameter is passed to the Address class. This means any formatting that works for Address will work being passed here. This means you can pass JSON, array or string.

### By Postal Code
***this yields the least accurate information***

```javascript

var pizzapi = require('dominos');

pizzapi.Util.findNearbyStores(
    '63102',
    'Delivery',
    function(storeData){
        console.log(storeData);
    }
);

```

### By City and Postal Code
***this yields less accurate information but is better than just using the postal code***

```javascript

  var pizzapi = require('dominos');

  pizzapi.Util.findNearbyStores(
      'St. Louis, MO, 63102',
      'Delivery',
      function(storeData){
          console.log(storeData);
      }
  );
```

### Using Full or Nearly Full Address
***this yields the best information and sorts stores by actual distance***

```javascript

  var pizzapi = require('dominos'); 

  pizzapi.Util.findNearbyStores(
      '700 Clark Ave, St. Louis, MO, 63102',
      'Delivery',
      function(storeData){
          console.log(storeData);
      }
  );

```

---

Store
====

|argument|type|default|required|
|--------|----|-------|--------|
|ID      |Integer|null|true    |

```javascript

  //Get Store Info for Store #4336
  var pizzapi = require('dominos');
  var myStore = new pizzapi.Store({ ID: 4336 });

  myStore.getInfo(
      function(storeData){
          console.log(storeData);
      }
  );

```

### Store menu

|argument|type|default|required|
|--------|----|-------|--------|
|callback|function|null|true   |

```javascript

  //Get Menu for Store #4336
  var pizzapi = require('dominos'); 
  var myStore = new pizzapi.Store({ ID: 4336 });

  myStore.getMenu(
      function(storeData){
          console.log(storeData);
      }
  );

```

### Store info
|argument|type|default|required|
|--------|----|-------|--------|
|callback|function|null|true   |

```javascript

  //Get Info for Store #4336
  var pizzapi = require('dominos');
  var myStore = new pizzapi.Store({ ID: 4336 });

  myStore.getInfo(
      function(storeData){
          console.log(storeData);
      }
  );

```

### Friendly menu list
|argument|type|default|required|
|--------|----|-------|--------|
|callback|function|null|true   |

Returns a list of all items the store offers in an JSON array, formatted {Code: Friendly Name}

```javascript

  //Get friendly name menu for Store #4336
  var pizzapi = require('dominos'); 
  var myStore = new pizzapi.Store({ ID: 4336 });

  myStore.getFriendlyNames(
      function(storeData){
          console.log(storeData);
      }
  );

```

---

Address
====
When creating a new Address object, there are many ways to instantiate the object!

The following are examples of the methods:

#### From string *note the commas*

```javascript

  var fullAddress = new Address('900 Clark Ave, St. Louis, MO, 63102');

  //or

  var partAddress = new Address('St. Louis, MO, 63102');

  //or

  var stateAndZip = new Address('St. Louis, 63102');

  //or

  var cityAndZip = new Address('St. Louis, 63102');

  //only zip

  var onlyZip = new Address('63102');

```

#### From JSON

```javascript

  var jsonAddress = new Address(
      {
          Street: '900 Clark Ave',
          City: 'St. Louis',
          Region: 'MO',
          PostalCode: 63102
      }
  );

```

#### From array

```javascript

  var arrayAddress = new Address(['900 Clark Ave', 'St. Louis', 'MO', '63102']);

```

---

Customer
===

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

Item
====
You can get the codes from one of the menu requests.

|argument|type|default|
|--------|----|-------|
|code|String|null|
|quantity|Integer|1|
|options|Array|[]|

```javascript

  var newItem = new Item(
    {
        code: '14SCREEN'
    }
  );
  //and so on...

```
---

Order
====

This is the class that every other class feeds into.

|argument|type|default|
|--------|----|-------|
|code|String|null|
|quantity|Integer|1|
|options|Array|[]|

### creating an order

```javascript

  var pizzapi = require('dominos');

  var thePresident = new pizzapi.Customer(
      {
          firstName: 'Barack',
          lastName: 'Obama',
          address: '700 Pennsylvania Avenue, Washington, DC',
          email: 'barack@whitehouse.gov'
      }
  );

  var order = new pizzapi.Order(
      {
          customer: thePresident,

          //optional set the store ID right away
          storeID: myStore.ID,

          deliveryMethod: 'Delivery' //(or 'Carryout')
      }
  );

  //or

  var order = new pizzapi.Order();

  order.FirstName = data;
  order.LastName = data;
  order.Email = data;
  order.Phone = data;

  //and if you want to update the store id just :

  order.StoreID = myStore.ID;

```

### duplicating an order

```javascript

  var anotherIdenticalOrder = new pizzapi.Order(
      {
          order:order
          //or
          //Order:order
          //because domino's pizza web API returns pascal case...
      }
  );

  //or create a duplicate order WITH different customer params

  var order = new pizzapi.Order(
      {
          customer: thePresident,
          deliveryMethod: 'Delivery' //(or 'Carryout')
      }
  );

```

### Adding a product to the order :

```javascript

  order.addItem(
      new pizzapi.Item(
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

  var pizzapi = require('dominos');

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

Tracking
====

### By Phone

|argument|type|default|required|
|--------|----|-------|--------|
|phone|Phone number string or int|null|true|
|callback|function to pass the api result to|null|true|

```javascript

  var pizzapi = require('dominos'); 

  pizzapi.Track.byPhone(
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

  var pizzapi = require('dominos'); 

  pizzapi.Track.byId(
      123456,
      12345,
      function(pizzaData){
          console.log(pizzaData)
      }
  );

```

Code, Order, Eat, Be Happy!
