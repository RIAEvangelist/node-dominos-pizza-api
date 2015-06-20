'use strict';

var httpJson = require('./http-json.js');
var urls = require('./urls.json');
var Address = require('./Address.js');

var findNearbyStores = function(address, pickUpType, callback) {
    if(!address || !callback) {
        if(callback) {
            callback(
                {
                    success: false,
                    message: "At least a partial address (minimum accepted is zipcode) is required to find stores"
                }
            );
        }
        return;
    }

    var addressLines = new Address(address).getAddressLines();

    var url = urls.store.find.replace(
        '${line1}',
        encodeURI(
          addressLines[0]
        )
    ).replace(
        '${line2}',
        encodeURI(
          addressLines[1]
        )
    ).replace(
        '${type}',
        pickUpType
    );

    httpJson.get(url, callback);
};

module.exports = {
    findNearbyStores: findNearbyStores
};
