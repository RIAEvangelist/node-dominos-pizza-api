'use strict';

var Item = function(parameters) {
    this.Code = parameters.code;
    this.Qty = parameters.quantity;
    this.ID = 1;
    this.isNew = true;
    this.Options = { 'C': {'1/1': '1'}, 'X': {'1/1': '1'} };
    if(parameters.options != '') {
      this.Options[parameters.options] = { '1/1': '1' };
    }
}

module.exports = Item;
