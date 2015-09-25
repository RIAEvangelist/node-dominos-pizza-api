'use strict';


var Item = function(parameters) {
    if(!parameters){
        parameters={}
    }

    this.AutoRemove=false;

    this.Code = parameters.code||null;
    this.Qty = parameters.quantity||1;
    this.ID = 1;
    
    this.isNew = true;
    this.Options = { 'C': {'1/1': '1'}, 'X': {'1/1': '1'} };

    if(parameters.options) {
        for (var i=0; i<parameters.options.length; i++) {
            this.Options[parameters.options[i]] = { '1/1': '1' };
        }
    }
}

module.exports = Item;
