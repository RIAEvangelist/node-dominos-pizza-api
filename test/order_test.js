'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Customer = require('../src/Customer');
var Order = require('../src/Order');
var Address = require('../src/Address');
var Item = require('../src/Item');

describe('Order', function() {
  describe('Creation', function() {
    it('should create Customer', function(done) {
      var addressParams = {
        Street: "900 Clark Street",
        City: "St. Louis",
        Region: "MO",
        PostalCode: "63102",
        Type: "House"
      };

      var cardsStadium = new Address(addressParams);
      expect(cardsStadium).not.to.be.null;
      expect(cardsStadium.Street).to.equal(addressParams.Street);
      expect(cardsStadium.City).to.equal(addressParams.City);
      expect(cardsStadium.Region).to.equal(addressParams.Region);

      var customerParams = {
        firstName: "Fred",
        lastName: "Bird",
        email: "fred@cardinals.are.hackers",
        address: cardsStadium,
        phone: "1-800-Fredd"
      };

      var fredBird = new Customer(customerParams);

      var order = new Order({
        customer: fredBird,
        storeID: 4336
      });

      expect(order).not.to.be.null;
      expect(order.Address).to.equal(fredBird.address);
      expect(order.ServiceMethod).to.equal("Delivery");
      expect(order.StoreID).to.equal(4336);

      done();
    });

    it('should add a pizza', function(done) {
      var addressParams = {
        Street: "900 Clark Street",
        City: "St. Louis",
        Region: "MO",
        PostalCode: "63102"
      };

      var cardsStadium = new Address(addressParams);
      var customerParams = {
        firstName: "Fred",
        lastName: "Bird",
        email: "fred@cardinals.are.hackers",
        address: cardsStadium,
        phone: "1-800-Fredd"
      };

      var fredBird = new Customer(customerParams);
      var order = new Order({
        customer: fredBird,
        storeID: 4336
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: '',  // Cheese pizza
        quantity: 1
      }));

      var itemParams = {
        Code: '14SCREEN',
        Qty: 1,
        ID: 1,
        isNew: true,
        Options: { 'C': {'1/1': '1'}, 'X': { '1/1': '1'}}
      };

      expect(order.Products).not.to.be.empty;
      expect(order.Products).to.include(itemParams);
      expect(order.Products[0].Qty).to.equal(itemParams.Qty);

      done();
    });

    it('should validate order', function(done) {
      var addressParams = {
        Street: "900 Clark Street",
        City: "St. Louis",
        Region: "MO",
        PostalCode: "63102"
      };

      var cardsStadium = new Address(addressParams);
      var customerParams = {
        firstName: "Fred",
        lastName: "Bird",
        email: "fred@cardinals.are.hackers",
        address: cardsStadium,
        phone: "1-800-Fredd"
      };

      var fredBird = new Customer(customerParams);
      var order = new Order({
        customer: fredBird,
        storeID: 4336
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: '',  // Cheese pizza
        quantity: 1
      }));

      order.validate(function(result) {
        var results = result.result;

        expect(results.Order).to.exist;
        expect(results.Order.OrderID).to.not.eql("");

        done();

      });

    });

    it('should price order', function(done) {
      var addressParams = {
        Street: "900 Clark Street",
        City: "St. Louis",
        Region: "MO",
        PostalCode: "63102"
      };

      var cardsStadium = new Address(addressParams);
      var customerParams = {
        firstName: "Fred",
        lastName: "Bird",
        email: "fred@cardinals.are.hackers",
        address: cardsStadium,
        phone: "1-800-Fredd"
      };

      var fredBird = new Customer(customerParams);
      var order = new Order({
        customer: fredBird,
        storeID: 4336
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: {},  // Cheese pizza
        quantity: 1
      }));

      order.validate(function(result) {
        order = new Order(result.result);
          console.log("new order: \n");
          console.dir(order);
          order.price(function(result) {
            var priceResults = result.result.Order;
            console.log("Price results!: \n");
            console.dir(priceResults.Products);

            expect(priceResults).to.exist;
            expect(results.Amounts).not.to.be({});
            expect(results.EstimatedWaitMinutes).not.to.be('');

            done();
          });
      });

    });
  });
});
