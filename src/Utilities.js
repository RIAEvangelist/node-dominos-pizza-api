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

    console.log(address);

    var url = urls.store.find.replace('${line1}', encodeURI(address[0]))
        .replace('${line2}', encodeURI(address[1]))
        .replace('${type}', pickUpType);

    httpJson.get(url, callback);
};

module.exports = {
    findNearbyStores: findNearbyStores
};