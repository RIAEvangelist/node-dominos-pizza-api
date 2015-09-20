'use strict';

var util = require('util');

var Address = function(parameters) {
    Object.defineProperties(
        this,
        {
            parse:{
                value:parse,
                enumerable:true,
                writable:false
            },
            getAddressLines:{
                value:getAddressLines,
                enumerable:true,
                writable:false
            },
            Type:{
                value:'House',
                enumerable:true,
                writable:true
            },
            Street:{
                value:'',
                enumerable:true,
                writable:true
            },
            City:{
                value:'',
                enumerable:true,
                writable:true
            },
            Region:{
                value:'',
                enumerable:true,
                writable:true
            },
            PostalCode:{
                value:'',
                enumerable:true,
                writable:true
            },
            _init:{
                value:init,
                enumerable:false,
                writable:false
            },
            _parameters:{
                value:parameters,
                enumerable:false,
                writable:false
            }
        }
    );

    this._init();

    function init(){
        if (typeof this._parameters == 'object' && this._parameters.PostalCode) {
            this.Street = this._parameters.Street;
            this.City = this._parameters.City;
            this.Region = this._parameters.Region;
            this.PostalCode = this._parameters.PostalCode;
        }



        if (util.isArray(this._parameters)) {
            this.Street = this._parameters[0];
            this.City = this._parameters[1];
            this.Region = this._parameters[2];
            this.PostalCode = this._parameters[3];
        }

        if (typeof this._parameters == 'number') {
            this._parameters+='';
        }

        if (typeof this._parameters == 'string') {
            this.parse(this._parameters);
        }

        if (this._parameters.Type) {
            this.Type = this._parameters.Type;
        }
    }

    function parse(locationString) {
        var splitAddress = locationString.split(',');

        for (var i in splitAddress) {
            splitAddress[i] = splitAddress[i].trim();
        }

        //need better intellegence for auto determining address parts
        switch (splitAddress.length) {
            case 1:
                this.PostalCode = Number(splitAddress[0]);

                if (!this.PostalCode) {
                    this.PostalCode='';
                    this.City = splitAddress[0];
                }
                this.PostalCode+='';
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

    function getAddressLines() {
        var line1 = (this.Street ? this.Street : '');
        var line2 = (this.City ? this.City + ',' : '') +
            (this.Region ? this.Region + ',' : '') +
            this.PostalCode

        var lines=[line1, line2];
        lines.line1=line1;
        lines.line2=line2;

        return lines;
    }
};

module.exports = Address;
