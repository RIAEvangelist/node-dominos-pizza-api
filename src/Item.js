'use strict';


var Item = function(parameters) {
    this.Code = parameters.code;
    this.Qty = parameters.quantity ? parameters.quantity : 0;
    this.ID = 1;
    this.isNew = true;
    this.Options = { 'C': {'1/1': '1'}, 'X': {'1/1': '1'} };
    for(var option in parameters.option) {
      this.Options[parameters.options] = { '1/1': '1' };
    }
}

module.exports = Item;
