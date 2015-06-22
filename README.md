PizzaPI API
====
This is a node.js wrapper for the Domino's pizza APIs.
The original npm module ` dominos ` has stopped being maintained and will remain at it's last stable release. For new applications please use this new npm module ` pizzapi `. [See the pretty PizzaPI documentation](http://riaevangelist.github.io/node-dominos-pizza-api/)

[![Join the chat at https://gitter.im/RIAEvangelist/node-dominos-pizza-api](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RIAEvangelist/node-dominos-pizza-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


[![NPM Stats for dominos api](https://nodei.co/npm/pizzapi.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/pizzapi)
[![NPM Download Graph for dominos api](https://nodei.co/npm-dl/pizzapi.png?months=6&height=3)](https://www.npmjs.com/package/pizzapi)


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

To run the tests, run ` mocha `

Finding Nearby Domino's Locations
====

|argument|type|default|required|
|--------|----|-------|--------|
|address|full or partial address string|null|true|
|callback|function to pass the api result to|null|true|
|type|Delivery, Carryout, all| all | false|

### By Postal Code
***this yields the least accurate information***

    var pizzapi=require('pizzapi');
    
    pizzapi.Util.findNearbyStores(
        '63102',
        'Delivery',
        function(storeData){
            console.log(storeData);
        }
    );

### By City and Postal Code
***this yields less accurate information but is better than just using the postal code***

    var pizzapi=require('pizzapi');
    
    pizzapi.Util.findNearbyStores(
        'St. Louis, MO, 63102',
        'Delivery',
        function(storeData){
            console.log(storeData);
        }
    );

### Using Full or Nearly Full Address
***this yields the best information and sorts stores by actual distance***

    var pizzapi=require('pizzapi');
    
    pizzapi.Util.findNearbyStores(
        '700 Clark Ave, St. Louis, MO, 63102',
        'Delivery',
        function(storeData){
            console.log(storeData);
        }
    );

Domino's Store Info
====

|argument|type|default|required|
|--------|----|-------|--------|
|callback|function to pass the api result to|null|true|


    //Get Store Info for Store #4336
    var pizzapi=require('pizzapi');
    var myStore=new pizzapi.Store();
    myStore.ID=4336;
    
    myStore.getInfo(
        function(storeData){
            console.log(storeData);
        }
    );

Menu for Specific Domino's Store Location
====

|argument|type|default|required|
|--------|----|-------|--------|
|callback|function to pass the api result to|null|true|

    //Get Menu for Store #4336
    var pizzapi=require('pizzapi');
    var myStore=new pizzapi.Store();
    myStore.ID=4336;
    
    myStore.getMenu(
        function(storeData){
            console.log(storeData);
        }
    );

Tracking Domino's Pizza
====

### By Phone

|argument|type|default|required|
|--------|----|-------|--------|
|phone|Phone number string or int|null|true|
|callback|function to pass the api result to|null|true|
    
    var pizzapi=require('pizzapi');
    
    pizzapi.Track.byPhone(
        2024561111,
        function(pizzaData){
            console.log(pizzaData);
        }
    );

### By orderKey

|argument|type|default|required|
|--------|----|-------|--------|
|orderKey|string or int|null|true|
|storeID|sting or int|null|true|
|callback|function to pass the api result to|null|true|

    var pizzapi=require('pizzapi');
    
    pizzapi.Track.byId(
        123456,
        12345,
        function(pizzaData){
            console.log(pizzaData)
        }
    );

Domino's Pizza Orders
====
Three classes exist to get orders started,

|Class|Description|
|-----|-----------|
|dominos.class.Order|creates a basic order object|
|dominos.class.Product|creates a basic product with a quantity of 1|

### creating an order

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

### Adding a product to the order :

    order.addItem(
        new pizzapi.Item(
            {
                code: '14SCREEN',
                options: {},
                quantity: 1
            }
        )
    );

### Validating an Order
This step is ***Strongly** recommended

    order.validate(
        function(result) {
            console.log("We did it!");
        }
    );

### Price an Order

    order.price(
        function(result) {
            console.log("Price!")
        }
    );

### Place an Order
At least one item must've been added to place an order.

    order.place(
        function(result) {
            console.log("Order placed!");
        }
    );

## Original module
Depricated due to massive overhauling by @madelinecameron  
Still in npm for use of last version in production as dominos

` npm install dominos `

[![NPM Stats for dominos api](https://nodei.co/npm/dominos.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/dominos)
[![NPM Download Graph for dominos api](https://nodei.co/npm-dl/dominos.png?months=6&height=3)](https://www.npmjs.com/package/dominos)
[![dominos api package quality](http://npm.packagequality.com/badge/dominos.png)](http://packagequality.com/#?package=dominos)
