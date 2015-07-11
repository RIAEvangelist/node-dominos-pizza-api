'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Item = require('../src/Item');

describe('Item', function() {
  it('should create item', function(done) {
      var newItem = new Item({
        code: 'Some code',
        quantity: 1
      });

      expect(newItem.Code).to.equal('Some code');
      expect(newItem.Qty).to.equal(1);

      done();
  });

  it('should create item with options', function(done) {
    var newItem = new Item({
      code: 'Some code',
      quantity: 1,
      options: 'P'
    });

    expect(newItem.Code).to.equal('Some code');
    expect(newItem.Qty).to.equal(1);
    expect(newItem.Options).to.eql({ 'C': {'1/1': '1'}, 'X': {'1/1': '1'}, 'P': {'1/1': '1'} });

    done();
  });
})
