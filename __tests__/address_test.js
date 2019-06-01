'use strict';


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
      expect(address).not.toBeNull();
      expect(address.Street).toEqual(jsonObj.Street);
      expect(address.City).toEqual(jsonObj.City);
      expect(address.Region).toEqual(jsonObj.Region);

      done();
   })
  it('should create Address object from string', function(done) {
    var address = new Address("123 Easy Street, St. Louis, MO, 63105");

    expect(address).not.toBeNull();
    expect(address.Street).toEqual("123 Easy Street");
    expect(address.City).toEqual("St. Louis");
    expect(address.Region).toEqual("MO");
    expect(address.PostalCode).toEqual("63105");

    done();
  })
  it('should return full address to pass to findNearbyStores', function(done) {
    var address = new Address("123 Easy Street, St.Louis, MO, 63105");
    var addressLines = address.getAddressLines();

    expect(addressLines).toHaveLength(2);
    expect(addressLines[0]).toEqual("123 Easy Street");
    expect(addressLines[1].trim()).toEqual(address.City + "," + address.Region + "," + address.PostalCode);

    done();

  })
  it('should return zip code to pass to findNearbyStores', function(done) {
    var address = new Address("63105");
    var addressLines = address.getAddressLines();

    expect(addressLines).toHaveLength(2);
    expect(addressLines[0]).toEqual('');
    expect(addressLines[1]).toEqual(address.PostalCode);

    done();

  })
  it('should return city, state, zip to pass to findNearbyStores', function(done) {
    var address = new Address("St. Louis, MO, 63105");
    var addressLines = address.getAddressLines();

    expect(addressLines).toHaveLength(2);
    expect(addressLines[0]).toEqual('');
    expect(addressLines[1]).toEqual(address.City + "," + address.Region + "," + address.PostalCode);

    done();

  })
  it('should create Address object from array', function(done) {
    var address = new Address(["123 Easy Street", "St. Louis", "MO", "63105"]);
    expect(address).not.toBeNull();
    expect(address.Street).toEqual("123 Easy Street");
    expect(address.City).toEqual("St. Louis");
    expect(address.Region).toEqual("MO");
    expect(address.PostalCode).toEqual("63105");

    done();
  })
});
