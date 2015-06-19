'use strict';

var urls = require('./urls.json');
var httpJson = require('./http-json');

var Customer = function(parameters) {
    // These are named with camelCaps because Dominos 'demands' this format
    this.ID = "";
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
    this.email = parameters.email;
    this.address = parameters.address;
    this.phone = parameters.phone;
};

module.exports = Customer;
