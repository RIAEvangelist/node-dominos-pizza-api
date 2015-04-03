function Order(firstName, lastName, address, email) {
    this.rawJSON = {
        "Order": {
            "Address": address.rawJSON,
            "Coupons": [],
            "CustomerID": "",
            "Email": email,
            "Extension": "",
            "FirstName": firstName,
            "LastName": lastName,
            "LanguageCode": "en",
            "OrderChannel": "OLO",
            "OrderID": "",
            "OrderMethod": "Web",
            "OrderTaker": null,
            "Payments": [],
            "Phone": "",
            "Products": [],
            "ServiceMethod": "Delivery",
            "SourceOrganizationURI": "order.dominos.com",
            "StoreID": "",
            "Tags": {},
            "Version": "1.0",
            "NoCombine": true,
            "Partners": {},
            "NewUser": true,
            "metaData": {}
        }
    };
}

Order.prototype.addItem = function() {

};
Order.prototype.removeItem = function() {

};
Order.prototype.validateOrder = function() {

};
Order.prototype.priceOrder = function() {

};
Order.prototype.placeOrder = function() {

};
