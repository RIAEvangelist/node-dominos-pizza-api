'use strict';


var Store = require('../src/Store');

var testStore = 8386;

//TODO this test needs fleshing out
describe('Menu', function() {

  describe('ParseMenu', function() {
    it('should parse menu', function(done) {
        var store = new Store({ID: testStore});
        store.getMenu(function(menu) {
            expect(menu).not.toBeNull;

            expect(menu.getFoodCategory()).not.toBeNull;
            expect(menu.getCouponCategory()).not.toBeNull;
            expect(menu.getPreconfiguredCategory()).not.toBeNull;

            var pizzaItem = menu.getItemByCode("S_PIZZA");
            expect(pizzaItem).not.toBeNull();

            expect(pizzaItem.getName()).toMatch("Pizza");

            done();
        });
    });
  });
});
