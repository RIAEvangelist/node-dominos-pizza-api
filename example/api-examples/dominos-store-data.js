var dominos=require("../../dominos-pizza-api");

//Get stores by postal code, distance is not as accurate this way
dominos.store.find(
    '20500', //address to search for nearby stores
    function(storeData){ //callback to run when api returns
        console.log('\n\n########################\nDomino\'s Near Postal Code\n########################\n', storeData, '\n-------------------------\n', storeData.result.Stores,'\n############\n');
    }
);

//Get stores near an exact address, they will be sorted by distance
dominos.store.find(
    '1600 Pennsylvania Ave NW, 20500', //address to search for nearby stores
    function(storeData){ //callback to run when api returns
        console.log('\n\n########################\nDomino\'s Near Address Sorted by distance\n########################\n', storeData,  '\n-------------------------\n', storeData.result.Stores,'\n############\n');
    }
);

//Get Store Info for Store #4336
dominos.store.info(
    4336, //storeID
    function(storeData){ //callback to run when api returns
        console.log('\n\n########################\nStore Info\n########################\n', storeData,'\n############\n');
    }
);

//Get Menu for Store #4336
dominos.store.menu(
    4336, //storeID
    function(storeData){ //callback to run when api returns
        console.log('\n\n########################\nStore Menu\n########################\n', storeData,'\n############\n');
    }
);