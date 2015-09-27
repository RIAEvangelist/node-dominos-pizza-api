var pizzapi = require('../../dominos-pizza-api');

//Get stores by postal code, distance is not as accurate this way
pizzapi.Track.byPhone(
    2024561111,
    function(pizzaData){
        console.log(pizzaData);
    }
);
