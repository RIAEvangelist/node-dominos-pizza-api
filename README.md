PizzaPI API
====
This is a node.js wrapper for the Domino's pizza API's

This work is licenced via the [DBAD Public Licence](http://www.dbad-license.org/). It is a derivative work from Dominos API.

Install PizzaPI
====
npm install pizzapi

Examples
====

A few basic examples are packaged with the API but I haven't written any in-depth examples yet.

For a more detailed / complicated example, see [PizzaGiver](https://github.com/madelinecameron/PizzaGiver)

Finding Nearby Domino's Locations
====

|argument|type|default|required|
|--------|----|-------|--------|
|address|full or partial address string|null|true|
|callback|function to pass the api result to|null|true|
|type|Delivery, Carryout, all| all | false|

### By Postal Code
***this yields the least accurate information***

    pizzapi.Util.findNearbyStores(
        '63102',
        'Delivery',
        function(storeData){
            console.log(storeData);
        }
    );

### By City and Postal Code
***this yields less accurate information but is better than just using the postal code***

    pizzapi.Util.findNearbyStores(
        'St. Louis, MO, 63102',
        'Delivery',
        function(storeData){
            console.log(storeData);
        }
    );

### Using Full or Nearly Full Address
***this yields the best information and sorts stores by actual distance***

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
    Store.getInfo(
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
    Store.getMenu(
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

    var thePresident = new pizzapi.Customer({
        firstName: 'Barack',
        lastName: 'Obama',
        address: '700 Pennsylvania Avenue, Washington, DC...',
        email: 'barack@whitehouse.gov'
      });
    var order = new pizzapi.Order({
        customer: thePresident,
        storeID: '4336'
      });

### Adding a product to the order :

    order.addItem(new pizzapi.Item({
        code: '14SCREEN',
        options: {},
        quantity: 1
      }));

### Validating an Order
This step is ***Strongly** recommended

    order.validate(function(result) {
        console.log("We did it!");
      });

### Price an Order

    order.price(function(result) {
        console.log("Price!")
      });

### Place an Order
Order placing takes a Stripe token to minimize the amount of work you must do. This also helps to comply with PCI. At least one item must've been added to place an order.

    order.place(stripeToken, function(result) {
        console.log("Order placed!");
      });
