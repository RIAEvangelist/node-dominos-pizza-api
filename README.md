node-dominos-pizza-api
======================

This is a node.js wrapper for the Domino's pizza APIs

Install Domino's API
====
npm install dominos

Finding Nearby Domino's Locations
====

|argument|type|default|required|
|--------|----|-------|--------|
|address|full or partial address string|null|true|
|callback|function to pass the api result to|null|true|
|type|Delivery, Carryout, all| all | false|

### By Postal Code
*** this yeilds the least accurate information ***

    dominos.store.find(
        '20500',
        function(storeData){
            console.log(storeData);
        }
    );

### By City and Postal Code
*** this yeilds less accurate information but is better than just using the postal code ***
    
    dominos.store.find(
        'Beverly Hills 90210',
        function(storeData){
            console.log(storeData);
        }
    );

### Using Full or Nearly Full Address
*** this yeilds the best information and sorts stores by actual distance ***

    dominos.store.find(
        '1600 Pennsylvania Ave NW, 20500',
        function(storeData){
            console.log(storeData);
        }
    );

Domino's Store Info
====

|argument|type|default|required|
|--------|----|-------|--------|
|storeID|string or int|null|true|
|callback|function to pass the api result to|null|true|


    //Get Store Info for Store #4336
    dominos.store.info(
        4336,
        function(storeData){
            console.log(storeData);
        }
    );

Menu for Specific Domino's Store Location
====

|argument|type|default|required|
|--------|----|-------|--------|
|storeID|string or int|null|true|
|callback|function to pass the api result to|null|true|
|lang|language string|en|false|

    //Get Menu for Store #4336
    dominos.store.menu(
        4336,
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

    dominos.track.phone(
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

    dominos.track.orderKey(
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
|dominos.class.Payment|creates a basic credit card payment object|

### creating an order

    var order=new dominos.class.Order();
    order.Order.Phone='2024561111';
    order.Order.FirstName='Barack';
    order.Order.LastName='Obama';
    order.Order.Email='CommanderInChief@whitehouse.gov';

### creating a product and adding it to the order :

    var product=new dominos.class.Product();
    product.Code='14SCREEN' //14" Hand Tossed Cheese Pizza
    order.Order.Products.push(product);


### Validating an Order 
This step is ***Strongly** recommended 

    dominos.order.validate(
        order,
        function(data){
            console.log(data);
        }
    );

### Validating an Order 
This step is ***Strongly** recommended 

    dominos.order.validate(
        order,
        function(data){
            console.log(data);
        }
    );

### Price an Order 

    dominos.order.price(
        order,
        function(data){
            console.log(data);
        }
    );

### Place an Order 

    var cardInfo=new dominos.class.Payment();
    cardInfo.Amount=42.50; //get amount from dominos.order.price request (data.result.Order.Amounts.Customer)
    
    cardInfo.Number='4444888888888888';
    cardInfo.CardType='VISA';
    cardInfo.Expiration='1017';
    cardInfo.SecurityCode='189';
    cardInfo.PostalCode='20500';
    
    order.Order.Payments.push(cardInfo);
    
    dominos.order.place(order,orderPlaced);