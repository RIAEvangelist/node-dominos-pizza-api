'use strict';

var Item = function(parameters) {
    this.Code = parameters.code;
    this.Qty = parameters.quantity;
    this.ID = 1;
    this.isNew = true;
    this.Options = { 'C': {'1/1': '1'}, 'X': {'1/1': '1'} };
    for (var i=0; i<parameters.options.length; i++) {
      this.Options[parameters.options[i]] = { '1/1': '1' };
    }
}

module.exports = Item;
