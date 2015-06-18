'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
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
    expect(newCustomer).not.to.be.null;
    expect(newCustomer.firstName).to.equal("Barack");
    expect(newCustomer.lastName).to.equal("Obama");
    expect(newCustomer.email).to.equal("barack@whitehouse.gov");
    expect(newCustomer.address).to.equal("The White House");
    expect(newCustomer.phone).to.equal("Secret");

    done();
  })
});
