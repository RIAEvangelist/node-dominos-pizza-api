'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;

describe('Order', function() {
  describe('Creating', function() {
    it('should create Customer', function(done) {
      var jsonObj = {
        Street: "123 Easy Street",
        City: "St. Louis",
        Region: "MO",
        Zip: 63105
      };
      var address = new Address(jsonObj);
      expect(address).not.to.be.null;
      expect(address).to.eql(jsonObj);  // Expect to be deeply equal
    })
  });
  describe('Ordering', function() {
    it('should create Address object from string', function(done) {
      var address = new Address("123 Easy Street, St. Louis, MO, 63105");
      expect(address).not.to.be.null;
      expect(address.Street).to.equal("123 Easy Street");
      expect(address.City).to.equal("St. Louis");
      expect(address.Region).to.equal("MO");
      expect(address.PostalCode).to.equal("63105");
    })
  })
});