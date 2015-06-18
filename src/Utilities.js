'use strict';

var httpJson = require('./http-json.js');
var urls = require('./urls.json');

var findNearbyStores = function(address, pickUpType, callback) {
    if(!address || !callback) {
        if(callback) {
            callback({
                success: false,
                message: "At least a partial address (minimum accepted is zipcode) is required to find stores"
            });
        }
        return;
    }

    var parsedAddress;
    if(address.indexOf(',') != -1) {
      var street = address.substring(0, address.indexOf(','));
      console.log(street);
      parsedAddress = [ street, address.substring(address.indexOf(',') + 1).trim()]

      console.log(parsedAddress)
    }
    else {  // If there is no comma, it is a ZIP code
      parsedAddress = [ '', address]
    }
    var url = urls.store.find.replace('${line1}', encodeURI(parsedAddress[0]))
        .replace('${line2}', encodeURI(parsedAddress[1]))
        .replace('${type}', pickUpType);

    httpJson.get(url, callback);
};

module.exports = {
    findNearbyStores: findNearbyStores
};
