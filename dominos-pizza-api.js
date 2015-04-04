function Payment() {  //Probably going to change this so no bother in making its own file.
    return {
        "Type": "CreditCard",
        "Amount": 0,
        "Number": "",
        "CardType": "",  //uppercase
        "Expiration": "",  //digits only
        "SecurityCode": "",
        "PostalCode": ""
    }        
}

module.exports = {
    Order: require('./src/Order'),
    Product: require('./src/Product'),
    Customer: require('./src/Customer'),
    Store: require('./src/Store'),
    Track: require('./src/Track'),
    Payment: Payment
};