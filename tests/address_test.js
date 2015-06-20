'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Address = require('../src/Address');

describe('Address', function() {
  describe('JSON', function() {
    it('should create Address object from JSON', function(done) {
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
  describe('String', function() {
    it('should create Address object from string', function(done) {
      var address = new Address("123 Easy Street, St. Louis, MO, 63105");
      expect(address).not.to.be.null;
      expect(address.Street).to.equal("123 Easy Street");
      expect(address.City).to.equal("St. Louis");
      expect(address.Region).to.equal("MO");
      expect(address.PostalCode).to.equal("63105");
    })

    it('should return lines to pass to findNearbyStores', function(done) {
      var address = new Address("123 Easy Street, St. Louis, MO, 63105");
      var addressLines = address.getAddressLines();

      expect(addressLines).to.have.length(2);
      expect(addressLines[0]).to.be("123 Easy Street");
      expect(addressLines[1]).to.be("St. Louis,MO,63015");

    })
  });
  describe('Array', function() {
    it('should create Address object from array', function(done) {
      var address = new Address(["123 Easy Street", "St. Louis", "MO", "63105"]);
      expect(address).not.to.be.null;
      expect(address.Street).to.equal("123 Easy Street");
      expect(address.City).to.equal("St. Louis");
      expect(address.Region).to.equal("MO");
      expect(address.PostalCode).to.equal("63105");
    })
  })
});
