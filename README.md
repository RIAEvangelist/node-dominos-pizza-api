node-dominos-pizza-api
======================

This is a node.js wrapper for the dominos pizza apis

Install
====
npm install dominos

Tracking
====

### By Phone

    dominos.track.phone(
        2024561111, //phone number pizza is associated with
        function(pizzaData){ //callback to run when api returns
            console.log(pizzaData);
        }
    );

### By orderKey

    dominos.track.orderKey(
        123456, //pizza orderKey
        12345,//store ID
        function(pizzaData){ //callback to run when api returns
            console.log(pizzaData)
        }
    );