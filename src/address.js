'use strict';

var Address = function(parameters) {
    this.Type = "House";
    if(parameters.Zip) {
        console.log("No Parse!");
        this.Street = parameters.Street;
        this.City = parameters.City;
        this.Region = parameters.Region;
        this.PostalCode = parameters.Zip;
    }
    else {
        this.parse(parameters);
    }
};

Address.prototype.parse = function(locationString) {
    var splitAddress = locationString.split(',');
    this.Street = splitAddress[0];
    this.City = splitAddress[1];
    this.Region = splitAddress[2];
    this.PostalCode = splitAddress[3];
};

module.exports = Address;
