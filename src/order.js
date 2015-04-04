var urls = require('./urls.json');
var httpJson = require('./http-json');

exports = function(parameters) {
    var Customer = parameters.Customer;

    this.Address = parameters.Address;
    this.Coupons = [];
    this.CustomerID = Customer.ID;
    this.Email = Customer.Email;
    this.Extension = "";
    this.FirstName = Customer.FirstName;
    this.LastName = Customer.LastName;
    this.LanguageCode = "en";
    this.OrderChannel = "OLO";
    this.OrderID = "";
    this.OrderMethod = "Web";
    this.OrderTaker = "";
    this.Payments = [];
    this.Phone = Customer.Phone;
    this.Products = [];
    this.ServiceMethod = "Delivery";
    this.SourceOrganizationURI = "order.dominos.com";
    this.StoreID = parameters.Store.ID;
    this.Tags = {};
    this.Version = "1.0";
    this.NoCombine = true;
    this.Partners = {};
    this.NewUser = true;
    this.metaData = {};
}

Order.prototype.addItem = function(Item) {  //Add product to Order
  this.Products.push(Item)
};

Order.prototype.removeItem = function(Item) {  //Remove product from Order
  var index = this.Products.indexOf(Item);
  if(index != -1) {
    this.Products.splice(index, 1);
  }
};

Order.prototype.validateOrder = function(callback) {  //Validate Order
  if( !order || !callback) {
      if(callback) {
        callback({
          message: "Order object is required!"
        });
      }
      return;
  }

  httpJson.post(urls.order.validate, JSON.stringify(this), callback);
};

Order.prototype.priceOrder = function(callback) {
  if( !order || !callback) {
      if(callback) {
        callback({
          error: {
            message: "Order object is required!"
          }
        });
      }
      return;
  }

  httpJson.post(urls.order.price, JSON.stringify(this), callback);
};
Order.prototype.placeOrder = function(callback) {
  if( !order || !callback) {
      if(callback) {
        callback({
          message: "Order object is required!"
        });
      }
      return;
  }

  httpJson.post(urls.order.place, JSON.stringify(this), callback);
};
