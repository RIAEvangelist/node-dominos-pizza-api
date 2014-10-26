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