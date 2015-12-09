'use strict';

var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var Store = require('../src/Store');

var testStore = 8386;

//TODO this test needs fleshing out
describe('Menu', function() {
  this.timeout(15000);
  describe('ParseMenu', function() {
    it('should parse menu', function(done) {
        var store = new Store({ID: testStore});
        store.getMenu(function(menu) {
            expect(menu).not.to.be.null;

            expect(menu.getFoodCategory()).not.to.be.null;
            expect(menu.getCouponCategory()).not.to.be.null;
            expect(menu.getPreconfiguredCategory()).not.to.be.null;

            var pizzaItem = menu.getItemByCode("S_PIZZA");
            expect(pizzaItem).to.not.be.null;

            expect(pizzaItem.getName()).to.be.equal("Pizza");

            done();
        });
    });
  });
});
