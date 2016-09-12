'use strict';

var urls = require('./urls.json');
var httpJson = require('./http-json');
var util=require('util');

var Order = function(parameters) {
  if(!parameters){
      parameters={}
  }
  //default order
  this.Address = '';
  this.Coupons = [];
  this.CustomerID = '';
  this.Email = '';
  this.Extension = '';
  this.FirstName = '';
  this.LastName = '';
  this.LanguageCode = 'en';
  this.OrderChannel = 'OLO';
  this.OrderID = '';
  this.OrderMethod = 'Web';
  this.OrderTaker = null;
  this.Payments = [];
  this.Phone = '';
  this.Products = [];
  this.Market = '';
  this.Currency = '';
  this.ServiceMethod = parameters.deliveryMethod || 'Delivery';
  this.SourceOrganizationURI = urls.sourceUri;
  this.StoreID = parameters.storeID||'';
  this.Tags = {};
  this.Version = '1.0';
  this.NoCombine = true;
  this.Partners = {};
  this.NewUser = true;
  this.metaData = {};
  this.Amounts = {};
  this.BusinessDate = '';
  this.EstimatedWaitMinutes = '';
  this.PriceOrderTime = '';
  this.AmountsBreakdown;

  if(parameters['customer']) {
    var Customer = parameters.customer;

    this.Address = Customer.address;
    this.CustomerID = Customer.ID;
    this.Email = Customer.email;
    this.FirstName = Customer.firstName;
    this.LastName = Customer.lastName;
    this.Phone = Customer.phone;
    return this;
  }
  if(parameters['Order'] || parameters['order']) {  //Used to initialize order object from Dominos results (Also handy for initializing from DB)
    var prevOrder = parameters.Order;
    var Customer = parameters.customer;

    this.Address = (Customer)? (
        (Customer.address)? Customer.address : prevOrder.Address
    ):prevOrder.Address;

    this.CustomerID = (Customer)? (
        (Customer.address)? Customer.ID : prevOrder.CustomerID
    ):prevOrder.CustomerID;

    this.Email = (Customer)? (
        (Customer.address)? Customer.email : prevOrder.Email
    ):prevOrder.Email;

    this.FirstName = (Customer)? (
        (Customer.address)? Customer.firstName : prevOrder.FirstName
    ):prevOrder.FirstName;

    this.LastName = (Customer)? (
        (Customer.address)? Customer.lastName : prevOrder.LastName
    ):prevOrder.LastName;

    this.OrderID = prevOrder.OrderID;
    this.Products = prevOrder.Products;
    this.Market = prevOrder.Market;
    this.Currency = prevOrder.Currency;
    this.StoreID = prevOrder.StoreID;
    this.Amounts = prevOrder.Amounts || {};
    this.BusinessDate = prevOrder.BusinessDate || '';
    this.EstimatedWaitMinutes = prevOrder.EstimatedWaitMinutes || '';
    this.PriceOrderTime = prevOrder.PriceOrderTime || '';
    this.AmountsBreakdown = prevOrder.AmountsBreakdown || {};

    return this;
  }
};

Order.prototype.addCoupon = function(Coupon) { //Add coupon to Order
    this.Coupons.push(Coupon)
};

Order.prototype.removeCoupon = function(Coupon) { //Remove coupon from Order
    var index = this.Coupons.indexOf(Coupon);
    if (index != -1) {
        this.Coupons.splice(index, 1);
    }
};

Order.prototype.addItem = function(Item) { //Add product to Order
    this.Products.push(Item)
};

Order.prototype.removeItem = function(Item) {  //Remove product from Order
  var index = this.Products.indexOf(Item);
  if(index != -1) {
    this.Products.splice(index, 1);
  }
};

Order.prototype.validate = function(callback) {  //Validate Order
  if(!this.Products || !callback) {
    if(callback) {
      callback({
        success: false,
        message: 'At least one Item must be added!'
      });
    }
    return;
  }

  //Blame Dominos, this isn't my doing.
  var stringified = JSON.stringify({
    'Order' : this
  });

  httpJson.post(urls.order.validate, stringified, this.mergeResponse.bind(this,callback));
};

Order.prototype.price = function(callback) {
  if(!this.Products || !callback) {
    if(callback) {
      callback({
        success: false,
        message: 'At least one Item must be added!'
      });
    }
    return;
  }

  var stringified = JSON.stringify({
    'Order' : this
  });

  httpJson.post(urls.order.price, stringified, this.mergeResponse.bind(this,callback));
};

Order.prototype.place = function(callback) {
  if(!this.Products || !callback) {
      if(callback) {
          callback({
              success: false,
              message: 'At least one product must be added!'
          })
      }
  }

  var stringified = JSON.stringify({
    'Order' : this
  });

  httpJson.post(urls.order.place, stringified, callback);
};

Order.prototype.mergeResponse = function(callback,response){
    for(var key in response.result.Order){
        if(util.isArray(response.result.Order[key])&&!response.result.Order[key].length){
            continue;
        }
        this[key]=response.result.Order[key];
    }
    //console.log(util.inspect(this.Products, { showHidden: true, depth: 5 }));
    if(callback){
        callback(response);
    }
}

Order.prototype.validateCC=function(number){
    var re = {
        visa        : /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard  : /^5[1-5][0-9]{14}$/,
        amex        : /^3[47][0-9]{13}$/,
        diners      : /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover    : /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb         : /^(?:2131|1800|35\d{3})\d{11}$/,
        enroute     : /^(?:2014|2149)\d{11}$/
    };

    if (re.visa.test(number))
        return 'VISA';

    if (re.mastercard.test(number))
        return 'MASTERCARD';

    if (re.amex.test(number))
        return 'AMEX';

    if (re.diners.test(number))
        return 'DINERS';

    if (re.discover.test(number))
        return 'DISCOVER';

    if (re.jcb.test(number))
        return 'JCB';

    if (re.enroute.test(number))
        return 'JCB';

    return "";
}

Order.prototype.PaymentObject=function(){
    Object.defineProperties(
        this,
        {
            "Type": {
                writable:false,
                enumerable:true,
                value:"CreditCard"
            },
            "Amount":  {
                writable:true,
                enumerable:true,
                value:0
            },
            "Number":  {
                writable:true,
                enumerable:true,
                value:""
            },
            "CardType":  {
                writable:true,
                enumerable:true,
                value:""//uppercase
            },
            "Expiration":  {
                writable:true,
                enumerable:true,
                value:""//digits only
            },
            "SecurityCode":  {
                writable:true,
                enumerable:true,
                value:""
            },
            "PostalCode":  {
                writable:true,
                enumerable:true,
                value:""
            }
        }
    );
}

module.exports = Order;
