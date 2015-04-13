var urls = require('./urls.json');
var httpJson = require('./http-json');

exports = function(parameters) {
    this.ID = "";
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
    this.email = parameters.email;
    this.address = parameters.address;
    this.phone = parameters.phone;
};

Customer.prototype.findNearbyStores = function(address, pickUpType, callback) {
    if(!address || !callback) {
        if(callback) {
            callback({
              success: false,
              message: "At least a partial address (minimum accepted is zipcode) is required to find stores"
            });
        }
        return;
    }

    if(typeof address == "string")
        address = [address, ' '];

    var url = urls.store.find.replace('${line1}', encodeURI(address[0]))
        .replace('${line2}', encodeURI(address[1]))
        .replace('${type}', pickUpType);

    httpJson.get(url, callback);
};
