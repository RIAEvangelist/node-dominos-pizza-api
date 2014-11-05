var dominos=require("../../dominos-pizza-api");

dominos.track.phone(
    2024561111, //phone number pizza is associated with
    function(pizzaData){ //callback to run when api returns
        console.log('\n\n########################\nTracking pizza by phone\n########################\n',pizzaData,'\n############\n');
    }
);

dominos.track.orderKey(
    123456, //pizza orderKey
    12345,//store ID
    function(pizzaData){ //callback to run when api returns
        console.log('########################\nTracking pizza by orderKey\n########################\n',pizzaData,'\n############\n');
    }
);