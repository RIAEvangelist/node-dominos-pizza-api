PizzaPI API
====
This is a node.js wrapper for the Domino's pizza APIs.
The original npm module ` dominos ` has stopped being maintained and will remain at it's last stable release. For new applications please use this new npm module ` pizzapi `. [See the pretty PizzaPI documentation](http://riaevangelist.github.io/node-dominos-pizza-api/)

[![Join the chat at https://gitter.im/RIAEvangelist/node-dominos-pizza-api](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RIAEvangelist/node-dominos-pizza-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


This work is licenced via the [DBAD Public Licence](http://www.dbad-license.org/). It is a derivative work from Dominos API.

Install PizzaPI
====
npm install pizzapi

Contributing
====

1. Pull or Fork code.
2. from the cloned directory run ` npm install ` (this will install required dependancies, depending on your system may require)
3. be awesome!


Examples
====

See the examples directory for simple apps and demonstrations on using the basic functionality.

<!--
For a more detailed / complicated example, see the awesome [PizzaGiver](https://github.com/madelinecameron/PizzaGiver)
-->

Testing
====
Simply run ` npm test `
if you have issues with this you may want to try installing mocha globally like this : ` npm install -g mocha `

-OR for manual testing-

1. Install mocha ` npm install -g mocha `
1. Run the tests ` mocha `

---

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
var pizzapi=require('pizzapi');

pizzapi.Util.findNearbyStores(
    '63102',))
    'Delivery',
    function(storeData){
        console.log(storeData);
    }
);
```

### By City and Postal Code
***this yields less accurate information but is better than just using the postal code***
```javascript
var pizzapi=require('pizzapi');

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
var pizzapi=require('pizzapi');

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
|ID|Integer|null|true|

```javascript
//Get Store Info for Store #4336
var pizzapi=require('pizzapi');
var myStore=new pizzapi.Store();
myStore.ID=4336;

myStore.getInfo(
    function(storeData){
        console.log(storeData);
    }
);
```

### Store menu

|argument|type|default|required|
|--------|----|-------|--------|
|callback|function|null|true|
```javascript
//Get Menu for Store #4336
var pizzapi=require('pizzapi');
var myStore=new pizzapi.Store();
myStore.ID=4336;

myStore.getMenu(
    function(storeData){
        console.log(storeData);
    }
);
```

### Store info
|argument|type|default|required|
|--------|----|-------|--------|
|callback|function|null|true|
```javascript
//Get Info for Store #4336
var pizzapi=require('pizzapi');
var myStore=new pizzapi.Store();
myStore.ID=4336;

myStore.getInfo(
    function(storeData){
        console.log(storeData);
    }
);
```

### Friendly menu list
|argument|type|default|required|
|--------|----|-------|--------|
|callback|function|null|true|
  Returns a list of all items the store offers in an JSON array, formatted {Code: Friendly Name}
```javascript
//Get friendly name menu for Store #4336
var pizzapi=require('pizzapi');
var myStore=new pizzapi.Store();
myStore.ID=4336;

myStore.getFriendlyNames(
    function(storeData){
        console.log(storeData);
    }
);
```
---

Address
====
When creating a new Address object, there are many ways to instantiate the object! **Order does matter with strings and arrays.**

The following are examples of the methods:

#### By string
```javascript
var fullAddress = new Address('900 Clark Ave, St. Louis, MO, 63102');

//or

var partAddress = new Address('St. Louis, MO, 63102');

//or

var onlyZip = new Address('63102');

//or

var onlyCity = new Address('St. Louis');
```

#### By JSON
```javascript
var jsonAddress = new Address({
  Street: '900 Clark Ave',
  City: 'St. Louis',
  Region: 'MO',
  PostalCode: 63102
  });
  ```
#### By array
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
var customer = new Customer({
  address: someAddressObj,
  firstName: 'Barack',
  lastName: 'Obama',
  phone: '1-800-The-White-House',
  email: 'br'
})
```
---

Item
====
|argument|type|default|
|--------|----|-------|
|code|String|null|
|quantity|Integer|1|
|options|Array|[]|

```javascript
var newItem = new Item({ code: '14SCREEN' });

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
var pizzapi=require('pizzapi');

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
        storeID: myStore.ID,
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
```javascript
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
var pizzapi=require('pizzapi');

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
var pizzapi=require('pizzapi');

pizzapi.Track.byId(
    123456,
    12345,
    function(pizzaData){
        console.log(pizzaData)
    }
);
```

## Original module
Depricated due to massive overhauling by @madelinecameron  
Still in npm for use of last version in production as dominos

` npm install dominos `

[![NPM Stats for dominos api](https://nodei.co/npm/dominos.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/dominos)
[![NPM Download Graph for dominos api](https://nodei.co/npm-dl/dominos.png?months=6&height=3)](https://www.npmjs.com/package/dominos)
[![dominos api package quality](http://npm.packagequality.com/badge/dominos.png)](http://packagequality.com/#?package=dominos)
