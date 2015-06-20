'use strict';

var urls = require('./urls.json');
var httpJson = require('./http-json');
/* just commenting out for the moment to get things working and discuss benifits of requiring stripe in the public module.
var stripe = require('stripe')(
  "%STRIPE_API_KEY%".replace("%STRIPE_API_KEY%", process.env.STRIPE_TEST)
);
*/

var Order = function(parameters) {
  if(parameters["customer"]) {
    var Customer = parameters.customer;

    this.Address = Customer.address;
    this.Coupons = [];
    this.CustomerID = Customer.ID;
    this.Email = Customer.email;
    this.Extension = "";
    this.FirstName = Customer.firstName;
    this.LastName = Customer.lastName;
    this.LanguageCode = "en";
    this.OrderChannel = "OLO";
    this.OrderID = "";
    this.OrderMethod = "Web";
    this.OrderTaker = null;
    this.Payments = [];
    this.Phone = "";
    this.Products = [];
    this.Market = '';
    this.Currency = '';
    this.ServiceMethod = parameters.deliveryMethod ? parameters.deliveryMethod : "Delivery";
    this.SourceOrganizationURI = "order.dominos.com";
    this.StoreID = parameters.storeID;
    this.Tags = {};
    this.Version = "1.0";
    this.NoCombine = true;
    this.Partners = {};
    this.NewUser = true;
    this.metaData = {};
    this.Amounts = {};
    this.BusinessDate = '';
    this.EstimatedWaitMinutes = '';
    this.PriceOrderTime = '';
    this.AmountsBreakdown;

    return this;
  }
  if(parameters["Order"]) {  //Used to initialize order object from Dominos results (Also handy for initializing from DB)
    var prevOrder = parameters.Order;
    
    this.Address = prevOrder.Address;
    this.Coupons = [];
    this.CustomerID = prevOrder.CustomerID;
    this.Email = prevOrder.Email;
    this.Extension = "";
    this.FirstName = prevOrder.FirstName;
    this.LastName = prevOrder.LastName;
    this.LanguageCode = "en";
    this.OrderChannel = "OLO";
    this.OrderID = prevOrder.OrderID;
    this.OrderMethod = "Web";
    this.OrderTaker = null;
    this.Payments = [];
    this.Phone = "";
    this.Products = prevOrder.Products;
    this.Market = prevOrder.Market;
    this.Currency = prevOrder.Currency;
    this.ServiceMethod = "Delivery";
    this.SourceOrganizationURI = "order.dominos.com";
    this.StoreID = prevOrder.StoreID;
    this.Tags = {};
    this.Version = "1.0";
    this.NoCombine = true;
    this.Partners = {};
    this.Amounts = prevOrder.Amounts ? prevOrder.Amounts : {};
    this.BusinessDate = prevOrder.BusinessDate ? prevOrder.BusinessDate : '';
    this.EstimatedWaitMinutes = prevOrder.EstimatedWaitMinutes ? prevOrder.EstimatedWaitMinutes : '';
    this.PriceOrderTime = prevOrder.PriceOrderTime ? prevOrder.PriceOrderTime : '';
    this.AmountsBreakdown = prevOrder.AmountsBreakdown ? prevOrder.AmountsBreakdown : {};

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
        message: "At least one product must be added!"
      });
    }
    return;
  }

  //Blame Dominos, this isn't my doing.
  var stringified = JSON.stringify({
    "Order" : this
  });

  httpJson.post(urls.order.validate, stringified, callback);
};

Order.prototype.price = function(callback) {
  if(!this.Products || !callback) {
    if(callback) {
      callback({
        success: false,
        message: "At least one product must be added!"
      });
    }
    return;
  }

  var stringified = JSON.stringify({
    "Order" : this
  });

  httpJson.post(urls.order.price, stringified, callback);

};

Order.prototype.place = function(stripeToken, callback) {
    if(!this.Products || !callback) {
        if(callback) {
            callback({
                success: false,
                message: "At least one product must be added!"
            })
        }
    }

/* just commenting out for the moment to discuss what the stripe implementation os for

  stripe.charges.create({
    amount: (this.Price * this.maxAllowedTip * 100) + 50,  //Stripe uses cents, not dollars...
    currency: "USD",
    source: stripeToken,
    description: "Charge for pizza!",
    shipping: {},
    capture: false  //Don't capture charge so tip can be charged.
  }, function(error, charge) {
    if(error) {
      console.log("Error!" + error);
      callback({
        success: false,
        message: error
      });
    }

    if(charge.status === "succeeded") {
      console.log("Stripe payment succeeded for order");
    }
  });

*/

  httpJson.post(urls.order.place, JSON.stringify(this), callback);
};

module.exports = Order;
