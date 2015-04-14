var urls = require('./urls.json');
var httpJson = require('./http-json');

var Customer = function(parameters) {
    this.ID = "";
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
    this.email = parameters.email;
    this.address = parameters.address;
    this.phone = parameters.phone;
};

Customer.prototype.findNearbyStores = function(callback) {
    var url = urls.store.find.replace('${line1}', encodeURI(this.address.Street))
        .replace('${line2}', encodeURI(this.address.City + "," + this.address.Region + "," + this.address.PostalCode))
        .replace('${type}', pickUpType);

    httpJson.get(url, callback);
};

exports = Customer;