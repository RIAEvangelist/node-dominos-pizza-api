var pizzapi = require('../../dominos-pizza-api');

// //Get stores by postal code, distance is not as accurate this way
// pizzapi.Util.findNearbyStores(
//     '63102',
//     'Delivery',
//     function(storeData){
//         console.log(storeData.result.Stores);
//     }
// );
//
// //Get stores near an exact address, they will be sorted by distance
// pizzapi.Util.findNearbyStores(
//     'St. Louis, MO, 63102',
//     'Delivery',
//     function(storeData){
//         console.log(storeData.result.Stores);
//     }
// );
//
// //Get stores near an exact multi-line address, they will be sorted by distance
// pizzapi.Util.findNearbyStores(
//     '700 Clark Ave, St. Louis, MO, 63102',
//     'Delivery',
//     function(storeData){
//         console.log(storeData.result.Stores);
//     }
// );

//Get Store Info for Store #4336
var Store = new pizzapi.Store(
    {
        ID: 4336
    }
);

console.log(Store);

Store.getInfo(
    function(storeData){
        console.log(storeData.result);
    }
);

//Get Menu for Store #4336
Store.getMenu(
    function(storeData){
        console.log(storeData.result);
    }
);
