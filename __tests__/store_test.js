'use strict';



const Store = require('../src/Store');

describe('Store', function() {
  it('should create store', function(done) {
    const newStore = new Store({
      ID: 1546
    });

    expect(newStore.ID).toEqual(1546);

    done();
  });
  it('should get info', function(done) {
    const newStore = new Store({
      ID: 1546
    });

    newStore.getInfo(function(info) {
      expect(info).toBeTruthy();
      expect(info.result).toBeTruthy();
      expect(info.result.StoreID).toEqual('1546');

      done();
    });
  });
  it('should get menu', function(done) {
    const newStore = new Store({
      ID: 1546
    });

    newStore.getMenu(function(menu) {
      expect(menu).toBeTruthy();
      expect(menu.getRaw().result).toBeTruthy();
      expect(menu.getRaw().result.Misc.StoreID).toEqual('1546');

      done();
    });
  });
  it('should get all friendly item names from menu', function(done) {
    const newStore = new Store({
      ID: 1546
    });

    newStore.getFriendlyNames(function(mapping) {
      expect(mapping).toBeTruthy();
      expect(mapping.result).toBeTruthy();
      expect(mapping.result.length).toBeGreaterThan(1);

      done();
    });
  });
})
