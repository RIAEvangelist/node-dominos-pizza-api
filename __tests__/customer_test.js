'use strict';



var Customer = require('../src/Customer');

describe('Customer', function() {
  it('should be created', function(done) {
    var customerParams = {
      firstName: "Barack",
      lastName: "Obama",
      email: "barack@whitehouse.gov",
      address: "The White House",  //Address object can be passed as well, this functionality is tested in order_test.
      phone: "Secret"
    }
    var newCustomer = new Customer(customerParams);
    expect(newCustomer).not.toBeNull;
    expect(newCustomer.firstName).toEqual("Barack");
    expect(newCustomer.lastName).toEqual("Obama");
    expect(newCustomer.email).toEqual("barack@whitehouse.gov");
    expect(newCustomer.address).toEqual("The White House");
    expect(newCustomer.phone).toEqual("Secret");

    done();
  })
});
