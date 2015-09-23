'use strict';

var Coupon = function(parameters) {
    this.Code = parameters.code;
    this.Qty = parameters.quantity ? parameters.quantity : 1;
    this.ID = 1;
    this.isNew = true;
}

module.exports = Coupon;
