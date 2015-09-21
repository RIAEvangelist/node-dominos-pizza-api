'use strict';

var urls = require('./urls.json');
var httpJson = require('./http-json');

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
  this.SourceOrganizationURI = 'order.dominos.com';
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
    return this;
  }
  if(parameters['Order']) {  //Used to initialize order object from Dominos results (Also handy for initializing from DB)
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

Order.prototype.addItem = function(Item) {  //Add product to Order
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
        this[key]=response.result.Order[key];
    }

    if(callback){
        callback(response);
    }
}

Order.prototype.PaymentObject(){
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
