'use strict';

var Address = function(parameters) {

    if(!this.Type){
        this.Type = 'House';
    }

    if(parameters.Zip) {
        console.log('No Parse!');
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

    for(var i in splitAddress){
        splitAddress[i]=splitAddress[i].trim();
    }

    this.Street = splitAddress[0];
    this.City = splitAddress[1];
    this.Region = splitAddress[2];
    this.PostalCode = splitAddress[3];

    this.Line1 = '';
    this.Line2 = '';

    if(this.City){
        this.Line2 = this.City.concat(
            this.Region,
            this.Region
        );
    }

    if(this.Street){
        this.Line1 = this.Street.toString();
    }
};

module.exports = Address;
