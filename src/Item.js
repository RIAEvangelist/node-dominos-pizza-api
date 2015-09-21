'use strict';


var Item = function(parameters) {
    this.Code = parameters.code;
    this.Qty = parameters.quantity ? parameters.quantity : 1;
    this.ID = 1;
    this.isNew = true;
    this.Options = { 'C': {'1/1': '1'}, 'X': {'1/1': '1'} };
    if(parameters.options) {
    	var _this = this;
    	parameters.options.forEach(function(value) {
			_this.Options[value] = { '1/1': '1' };
    	});
    }
}

module.exports = Item;