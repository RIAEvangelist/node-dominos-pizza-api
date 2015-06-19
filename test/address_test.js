'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Address = require('../src/Address');

describe('Address', function() {
    it('should create Address object from JSON', function(done) {
      var jsonObj = {
        Street: "123 Easy Street",
        City: "St. Louis",
        Region: "MO",
        PostalCode: "63105",
        Type: "House"
      };
      var address = new Address(jsonObj);
      expect(address).not.to.be.null;
      console.dir(address);
      console.log("\n\n");
      console.dir(jsonObj);
      console.log(address === jsonObj);
      expect(address.Street).to.equal(jsonObj.Street);
      expect(address.City).to.equal(jsonObj.City);
      expect(address.Region).to.equal(jsonObj.Region);

      done();
   })
  it('should create Address object from string', function(done) {
    var address = new Address("123 Easy Street, St. Louis, MO, 63105");

    expect(address).not.to.be.null;
    expect(address.Street).to.equal("123 Easy Street");
    expect(address.City).to.equal("St. Louis");
    expect(address.Region).to.equal("MO");
    expect(address.PostalCode).to.equal("63105");

    done();
  })
  it('should return lines to pass to findNearbyStores', function(done) {
    var address = new Address("123 Easy Street, St.Louis, MO, 63105");
    var addressLines = address.getAddressLines();

    expect(addressLines).to.have.length(2);
    expect(addressLines[0]).to.equal("123 Easy Street");
    expect(addressLines[1]).to.equal("St.Louis,MO,63015");

    done();

  })
  it('should create Address object from array', function(done) {
    var address = new Address(["123 Easy Street", "St. Louis", "MO", "63105"]);
    expect(address).not.to.be.null;
    expect(address.Street).to.equal("123 Easy Street");
    expect(address.City).to.equal("St. Louis");
    expect(address.Region).to.equal("MO");
    expect(address.PostalCode).to.equal("63105");

    done();
  })
});
