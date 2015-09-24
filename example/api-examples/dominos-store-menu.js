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
        Store.getMenu(function(menu) {
            function printCategory(showItems,category,depth) {
                if (!depth) depth = 0;
                var indent = Array(depth+1).join("  ");
                console.log(indent+category.getName());
                for (var subIndex in category.getSubcategories()) {
                    printCategory(showItems,category.getSubcategories()[subIndex],depth+1);
                }
                if (showItems) {
                    category.getProducts().forEach(function(product) {
                        console.log(indent+"  ["+product.getCode()+"] "+product.getName());
                    });
                }
            }

            console.log("************ Coupon Menu ************");
            printCategory(true,menu.getCouponCategory(),1);
            console.log("\n\n************ Preconfigured Menu ************");
            printCategory(true,menu.getPreconfiguredCategory(),1);
            console.log("\n\n************ Regular Menu ************");
            printCategory(true,menu.getFoodCategory(),1);
        });
    }
);
