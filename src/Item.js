'use strict';


var Item = function(parameters) {
    if(!parameters){
        parameters={}
    }
    this.Code = parameters.code||null;
    this.Qty = parameters.quantity||1;
    this.ID = 1;
    this.isNew = true;
    //Can not default options on items which do not support said options.
    //they get removed from order.
    //For example I'm trying to order a PM_14SCREEN (pep&mush pizza) which is a
    //predefined pizza, so it rejects it.
    //
    //Also, cant add cheese to a sprite ;)
    //
    //this.Options = { 'C': {'1/1': '1'}, 'X': {'1/1': '1'} };
    this.Options = {}
    if(parameters.options) {
    	var _this = this;
    	parameters.options.forEach(function(value) {
      	_this.Options[value] = { '1/1': '1' };
    	})
    }
}

module.exports = Item;
