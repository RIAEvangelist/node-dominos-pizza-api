'use strict';

var util = require('util');

var Address = function(parameters) {
    if(typeof paramaters == 'object' && parameters.PostalCode){
        this.Street = parameters.Street;
        this.City = parameters.City;
        this.Region = parameters.Region;
        this.PostalCode = parameters.PostalCode;
    }

    if (util.isArray(parameters)) {
        this.Street = parameters[0];
        this.City = parameters[1];
        this.Region = parameters[2];
        this.PostalCode = parameters[3];
    }

    if(typeof paramaters == 'string'){
        this.parse(parameters);
    }

    if (!paramaters.Type) {
        this.Type = 'House';
    }
};

Address.prototype.parse = function(locationString) {
    var splitAddress = locationString.split(',');

    for (var i in splitAddress) {
        splitAddress[i] = splitAddress[i].trim();
    }

    //need better intellegence for auto determining address parts
    switch(splitAddress.length) {
      case 1:
        this.PostalCode = Number(splitAddress[0]);

        if(!this.PostalCode){
            this.City=splitAddress[0];
        }
        break;
      case 2:
        this.Region = splitAddress[0];
        this.PostalCode = splitAddress[1];
        break;
      case 3:
        this.City = splitAddress[0];
        this.Region = splitAddress[1]
        this.PostalCode = splitAddress[2];
        break;
      case 4:
        this.Street = splitAddress[0];
        this.City = splitAddress[1];
        this.Region = splitAddress[2];
        this.PostalCode = splitAddress[3];
    }
};

Address.prototype.getAddressLines = function() {
  var line1 = '';
  var line2 = '';

  if(this.Street) {
    line1 = this.Street;
    line2 = this.City + ',' + this.Region + ',' + this.PostalCode;
  }
  else {
    line2 = String((this.City ? this.City + ',' : '') + (this.Region ? this.Region + ',' : '') + this.PostalCode);
  }

  return [ line1, line2 ]
}

module.exports = Address;
