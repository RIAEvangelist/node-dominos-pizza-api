Node Domino's API
====
This is a node.js wrapper for the Domino's pizza API's

This work is licenced via the [DBAD Public Licence](http://www.dbad-license.org/). 

Install Domino's API
====
npm install dominos

![NPM Stats for dominos api](https://nodei.co/npm/dominos.png?downloads=true&downloadRank=true&stars=true)
![NPM Download Graph for dominos api](https://nodei.co/npm-dl/dominos.png?months=6&height=3)

Finding Nearby Domino's Locations
====

|argument|type|default|required|
|--------|----|-------|--------|
|address|full or partial address string|null|true|
|callback|function to pass the api result to|null|true|
|type|Delivery, Carryout, all| all | false|

### By Postal Code
***this yields the least accurate information***

    dominos.store.find(
        '20500',
        function(storeData){
            console.log(storeData);
        }
    );

### By City and Postal Code
***this yields less accurate information but is better than just using the postal code***
    
    dominos.store.find(
        'Beverly Hills 90210',
        function(storeData){
            console.log(storeData);
        }
    );

### Using Full or Nearly Full Address
***this yields the best information and sorts stores by actual distance***

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
Before you can place an order you must create a payment method and add it to the order :

|paramater|type|required|default|
|---------|----|--------|-------|
|Amount|Float|true|0|
|Number|Credit Card Number Int/String|true||
|CardType|String|true||
|Expiration|Digits only Int/String|true||
|SecurityCode|Int/String|true||

    var cardInfo=new dominos.class.Payment();
    cardInfo.Amount=42.50; 
    //get amount from dominos.order.price request 
    //data.result.Order.Amounts.Customer
    
    cardInfo.Number='4444888888888888';
    cardInfo.CardType='VISA';
    cardInfo.Expiration='1017';
    cardInfo.SecurityCode='189';
    cardInfo.PostalCode='20500';
    
    order.Order.Payments.push(cardInfo);


Then you can place the order and catch placement failures :
    
    dominos.order.place(
        order,
        function(data){
            console.log(data);

            if(data.result.Order.Status==-1){
                console.log(
                    '\n###### NO PIZZA FOR YOU! ######\n',
                    orderData.result.Order.StatusItems,
                    '\n#########################\n\n'
                );
                return;
            }

        }
    );

