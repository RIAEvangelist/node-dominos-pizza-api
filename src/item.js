'use strict';

var Item = function(parameters) {
    this.Code = parameters.code;
    this.Qty = parameters.quantity;
    this.ID = 1;
    this.isNew = true;
    this.Options = parameters.options != '';
}

module.exports = Item;
