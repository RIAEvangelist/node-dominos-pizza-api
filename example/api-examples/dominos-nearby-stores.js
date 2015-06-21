var pizzapi = require('../../dominos-pizza-api');

//Get stores by postal code, distance is not as accurate this way
pizzapi.Util.findNearbyStores(
    '63102',
    'Delivery',
    function(storeData) {
        console.log('\n\n##################\nNearby Stores\n##################\n\n',storeData.result.Stores);
    }
);
