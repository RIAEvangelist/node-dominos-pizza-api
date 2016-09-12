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

        this.PostalCode= splitAddress[splitAddress.length-1]

        //need better intellegence for auto determining address parts
        //added some, should externalize it
        //while not perfect, it does seem to get most of the right stuff
        //in good enough places for dominos to like it.
        switch (splitAddress.length) {
            case 1:
                if (!this.PostalCode) {
                    this.PostalCode='';
                    this.City = splitAddress[0];
                }
                break;
            case 2:
                if(splitAddress[0].length<3){
                    this.Region = splitAddress[0];
                }else{
                    this.City = splitAddress[0];
                }
                if (!this.PostalCode) {
                    if(splitAddress[1].length>2){
                        if(this.City){
                            this.Street = this.City;
                        }
                        this.City = splitAddress[1];
                    }else{
                        if(this.Region){
                            this.City=this.Region;
                        }
                        this.Region = splitAddress[1];
                    }
                }
                break;
            case 3:
                if(splitAddress[0].length<3){
                    this.Region = splitAddress[0];
                }else{
                    this.City = splitAddress[0];
                }

                if(splitAddress[1].length<3){
                    if(this.Region){
                        if(this.City){
                            this.Street = this.City;
                        }
                        this.City=this.Region;
                    }
                    this.Region = splitAddress[1];
                }else{
                    if(this.City){
                        this.Street = this.City;
                    }
                    this.City = splitAddress[1];
                }

                if (!this.PostalCode) {
                    if(splitAddress[2].length<3){
                        if(this.Region){
                            if(this.City){
                                this.Street = this.City;
                            }
                            this.City=this.Region;
                        }
                        this.Region = splitAddress[2];
                    }else{
                        if(this.City){
                            this.Street = this.City;
                        }
                        this.City = splitAddress[1];
                    }
                }
                break;
            case 4:
                this.Street = splitAddress[0];
                this.City = splitAddress[1];
                this.Region = splitAddress[2];
                this.PostalCode = splitAddress[3];
        }

        if (!this.PostalCode) {
            this.PostalCode='';
        }
        //converts to string if number
        this.PostalCode+='';
    };

    function getAddressLines() {
        var line1 = this.Street||'';
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
