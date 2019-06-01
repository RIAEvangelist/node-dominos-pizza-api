'use strict';



const Customer = require('../src/Customer');
const Order = require('../src/Order');
const Address = require('../src/Address');
const Item = require('../src/Item');

const joeNumber='800joeMine';
const joeMail='joe@mst.edu';

describe('Order', function() {
  describe('Creation', function() {
    it('should create Customer', function(done) {
      const addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      const havener = new Address(addressParams);
      expect(havener).not.toBeNull;
      expect(havener.Street).toEqual(addressParams.Street);
      expect(havener.City).toEqual(addressParams.City);
      expect(havener.Region).toEqual(addressParams.Region);

      const customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: joeMail,
        address: havener,
        phone: joeNumber
      };

      const joeMiner = new Customer(customerParams);

      const order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      expect(order).not.toBeNull;
      expect(order.Address).toEqual(joeMiner.address);
      expect(order.ServiceMethod).toEqual("Delivery");
      expect(order.StoreID).toEqual("1546");

      done();
    });

    it('should add a pizza', function(done) {
      const addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      const havener = new Address(addressParams);

      const customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: joeMail,
        address: havener,
        phone: joeNumber
      };

      const joeMiner = new Customer(customerParams);

      const order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: '',  // Cheese pizza
        quantity: 1
      }));

      const itemParams = {
        AutoRemove: false,
        Code: '14SCREEN',
        Qty: 1,
        ID: 1,
        isNew: true,
        Options: { 'C': {'1/1': '1'}, 'X': { '1/1': '1'}}
      };

      expect(order.Products).toEqual(expect.not.objectContaining({}));
      expect(order.Products).toEqual(expect.arrayContaining([itemParams]));
      expect(order.Products[0].Qty).toEqual(itemParams.Qty);

      done();
    });
  });
  describe('Validate', function() {
    it('should validate cheese pizza', function(done) {
      const addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      const havener = new Address(addressParams);

      const customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: joeMail,
        address: havener,
        phone: joeNumber
      };

      const joeMiner = new Customer(customerParams);

      const order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: [],  // Cheese pizza
        quantity: 1
      }));

      order.validate(function(result) {
        const results = result.result;
        expect(results.Order).toBeTruthy();
        expect(results.Order.OrderID.length).toBeGreaterThan(0);

        done();

      });
    });
    it('should validate pepperoni pizza', function(done) {
      const addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      const havener = new Address(addressParams);

      const customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: joeMail,
        address: havener,
        phone: joeNumber
      };

      const joeMiner = new Customer(customerParams);

      const order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: ['P'],  // Pepperoni pizza
        quantity: 1
      }));

      order.validate(function(result) {
        const results = result.result;
        expect(results.Order).toBeTruthy();
        expect(result.success).toBeTruthy();
        expect(results.Order.OrderID.length).toBeGreaterThan(0);

        done();

      });
    });
    it('should validate assorted order', function(done) {
      const addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      const havener = new Address(addressParams);

      const customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: joeMail,
        address: havener,
        phone: joeNumber
      };

      const joeMiner = new Customer(customerParams);

      const order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: [],  // Cheese pizza
        quantity: 1
      }));

      order.addItem(new Item({
        code: '14SCREEN',
        options: ['P'],  // Pepperoni pizza
        quantity: 1
      }));

      order.addItem(new Item({
        code: 'W08PHOTW',  //Hot wings
        options: [],
        quantity: 1
      }));
      order.validate(function(result) {
        const results = result.result;

        expect(results.Order).toBeTruthy();
        expect(result.success).toBeTruthy();
        expect(results.Order.OrderID.length).toBeGreaterThan(0);

        done();

      });
    });
  });
  describe('Price', function() {
    it('should price order', function(done) {
      const addressParams = {
        Street: "1346 N Bishop Ave",
        City: "Rolla",
        Region: "MO",
        PostalCode: "65401",
        Type: "House"
      };

      const havener = new Address(addressParams);

      const customerParams = {
        firstName: "Joe",
        lastName: "Miner",
        email: joeMail,
        address: havener,
        phone: joeNumber
      };

      const joeMiner = new Customer(customerParams);

      const order = new Order({
        customer: joeMiner,
        storeID: "1546"
      });

      order.addItem(new Item({
        code: '14SCREEN',
        options: [],  // Cheese pizza
        quantity: 1
      }));

      order.validate(function(result) {
        const newOrder = new Order(result.result);
        newOrder.price(function(result) {
          const priceResults = result.result.Order;

          expect(priceResults).toBeTruthy();
          expect(priceResults.Amounts).toMatchObject({});
          expect(priceResults.EstimatedWaitMinutes.length).toBeGreaterThan(0);

          done();
        });
      });
    });
  })
});
