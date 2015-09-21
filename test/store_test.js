'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Store = require('../src/Store');

describe('Store', function() {
  it('should create store', function(done) {
    var newStore = new Store({
      ID: 1546
    });

    expect(newStore.ID).to.equal(1546);

    done();
  });
  it('should get info', function(done) {
    var newStore = new Store({
      ID: 1546
    });

    newStore.getInfo(function(info) {
      expect(info).to.exist;
      expect(info.result).to.exist;
      expect(info.result.StoreID).to.equal('1546');

      done();
    });
  });
  it('should get menu', function(done) {
    var newStore = new Store({
      ID: 1546
    });

    newStore.getMenu(function(menu) {
      expect(menu).to.exist;
      expect(menu.result).to.exist;
      expect(menu.result.Misc.StoreID).to.equal('1546');

      done();
    });
  });
  it('should get all friendly names', function(done) {
    var newStore = new Store({
      ID: 1546
    });

    newStore.getFriendlyNames(function(mapping) {
      expect(mapping).to.exist;
      expect(mapping.result).to.exist;
      expect(mapping.result).to.have.length.above(1);

      done();
    });
  });
})
