var pizzapi = require('../../dominos-pizza-api');

//Get stores by postal code, distance is not as accurate this way
pizzapi.Util.findNearbyStores(
    '63102',
    'Delivery',
    function(storeData) {
        var Store = new pizzapi.Store(
            {
                ID: storeData.result.Stores[0].StoreID
            }
        );

        //Get Menu for first store
        Store.getMenu(
            function(storeData) {
                console.log('\n\n##################\nFirst Store Menu\n##################\n\n',storeData.result);
            }
        );
    }
);
