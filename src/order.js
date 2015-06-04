'use strict';

var urls = require('./urls.json');
var httpJson = require('./http-json');
var stripe = require('stripe')(
	"%STRIPE_API_KEY%".replace("%STRIPE_API_KEY%", process.env.STRIPE_TEST)
);

var Order = function(parameters) {
	if(parameters.customer) {
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
		this.OrderTaker = "";
		this.Payments = [];  //All orders paid with one credit card
		this.Phone = "6366998620";
		this.Products = [];
		this.ServiceMethod = "Delivery";
		this.SourceOrganizationURI = "order.dominos.com";
		this.StoreID = parameters.storeID;
		this.Tags = {};
		this.Version = "1.0";
		this.NoCombine = true;
		this.Partners = {};
		this.NewUser = true;
		this.metaData = {};
	}
	if(parameters.order) {
		var prevOrder = parameters.order;

		this.Address = prevOrder.Address;
		this.Coupons = [];
		this.CustomerID = prevOrder.CustomerID;
		this.Email = prevOrder.Email;
		this.Extension = "";
		this.FirstName = prevOrder.FirstName;
		this.LastName = prevOrder.LastName;
		this.LanguageCode = "en";
		this.OrderChannel = "OLO";
		this.OrderID = "";
		this.OrderMethod = "Web";
		this.OrderTaker = "";
		this.Payments = [];
		this.Phone = "6366998620";
		this.Products = [];
		this.ServiceMethod = "Delivery";
		this.SourceOrganizationURI = "order.dominos.com";
		this.StoreID = prevOrder.StoreID;
		this.Tags = {};
		this.Version = "1.0";
		this.NoCombine = true;
		this.Partners = {};
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

  httpJson.post(urls.order.validate, JSON.stringify(this), function(response) {
	  console.log(response);
	  if(response.success) {
		  console.log(response.result);
	  }
  });
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

  httpJson.post(urls.order.price, JSON.stringify(this), function(response) {
	  console.log(response);
	  if(response.success) {
		  console.log(response.result);
	  }
  });
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

	httpJson.post(urls.order.place, JSON.stringify(this), function(response) {
		if(response.success) {
			console.log(response.result);
		}
	});
};

module.exports = Order;