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
                    message: 'At least a partial address (minimum accepted is zipcode) is required to find stores'
                }
            );
        }
        return;
    }

    address=new Address(address);

    var url = urls.store.find.replace(
        '${line1}',
        encodeURI(
            address.Line1
        )
    ).replace(
        '${line2}',
        encodeURI(
            address.Line2
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
