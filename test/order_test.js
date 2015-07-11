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
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      var havener = new Address(addressParams);
      expect(havener).not.to.be.null;
      expect(havener.Street).to.equal(addressParams.Street);
      expect(havener.City).to.equal(addressParams.City);
      expect(havener.Region).to.equal(addressParams.Region);

      var customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: "joe@mst.edu",
        address: havener,
        phone: "1-800-Joe"
      };

      var joeMiner = new Customer(customerParams);

      var order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      expect(order).not.to.be.null;
      expect(order.Address).to.equal(joeMiner.address);
      expect(order.ServiceMethod).to.equal("Delivery");
      expect(order.StoreID).to.equal("1546");

      done();
    });

    it('should add a pizza', function(done) {
      var addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      var havener = new Address(addressParams);

      var customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: "joe@mst.edu",
        address: havener,
        phone: "1-800-Joe"
      };

      var joeMiner = new Customer(customerParams);

      var order = new Order({
        customer: joeMiner,
        storeID: "1546"
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

    describe('validate', function() {
      it('should validate cheese pizza', function(done) {
        var addressParams = {
          Street: "1346 N Bishop Ave",
          City: "Rolla",
          Region: "MO",
          PostalCode: "65401",
          Type: "House"
        };

        var havener = new Address(addressParams);

        var customerParams = {
          firstName: "Joe",
          lastName: "Miner",
          email: "joe@mst.edu",
          address: havener,
          phone: "1-800-Joe"
        };

        var joeMiner = new Customer(customerParams);

        var order = new Order({
          customer: joeMiner,
          storeID: "1546"
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
      it('should validate pepperoni pizza', function(done) {
        var addressParams = {
          Street: "1346 N Bishop Ave",
          City: "Rolla",
          Region: "MO",
          PostalCode: "65401",
          Type: "House"
        };

        var havener = new Address(addressParams);

        var customerParams = {
          firstName: "Joe",
          lastName: "Miner",
          email: "joe@mst.edu",
          address: havener,
          phone: "1-800-Joe"
        };

        var joeMiner = new Customer(customerParams);

        var order = new Order({
          customer: joeMiner,
          storeID: "1546"
        });

        order.addItem(new Item({
          code: '14SCREEN',
          options: 'P',  // Pepperoni pizza
          quantity: 1
        }));

        order.validate(function(result) {
          var results = result.result;
          expect(results.Order).to.exist;
          expect(result.success).to.be.true;
          expect(results.Order.OrderID).to.not.eql("");

          done();

        });
      });
      it('should validate assorted order', function(done) {
        var addressParams = {
          Street: "1346 N Bishop Ave",
          City: "Rolla",
          Region: "MO",
          PostalCode: "65401",
          Type: "House"
        };

        var havener = new Address(addressParams);

        var customerParams = {
          firstName: "Joe",
          lastName: "Miner",
          email: "joe@mst.edu",
          address: havener,
          phone: "1-800-Joe"
        };

        var joeMiner = new Customer(customerParams);

        var order = new Order({
          customer: joeMiner,
          storeID: "1546"
        });

        order.addItem(new Item({
          code: '14SCREEN',
          options: '',  // Cheese pizza
          quantity: 1
        }));

        order.addItem(new Item({
          code: '14SCREEN',
          options: 'P',  // Pepperoni pizza
          quantity: 1
        }));

        order.addItem(new Item({
          code: 'W08PHOTW',  //Hot wings
          options: '',
          quantity: 1
        }));
        order.validate(function(result) {
          var results = result.result;
          console.log(results);
          expect(results.Order).to.exist;
          expect(result.success).to.be.true
          expect(results.Order.OrderID).to.not.eql("");

          done();

        });
      });

    });

    it('should price order', function(done) {
      var addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      var havener = new Address(addressParams);

      var customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: "joe@mst.edu",
        address: havener,
        phone: "1-800-Joe"
      };

      var joeMiner = new Customer(customerParams);

      var order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: {},  // Cheese pizza
        quantity: 1
      }));

      order.validate(function(result) {
        var newOrder = new Order(result.result);
        newOrder.price(function(result) {
          var priceResults = result.result.Order;

          expect(priceResults).to.exist;
          expect(priceResults.Amounts).not.to.eql({});
          expect(priceResults.EstimatedWaitMinutes).not.to.eql('');

          done();
        });
      });
    });
  });
});
