'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Item = require('../src/Item');

describe('Item', function() {
  it('should create base item', function(done) {
      var newItem = new Item({
        code: 'Some code',
      });

      expect(newItem.Code).to.equal('Some code');
      expect(newItem.Qty).to.equal(1);
      expect(newItem.Options).to.eql({ 'C': {'1/1': '1'}, 'X': {'1/1': '1'} });

      done();
  });

  it('should create item with quantity 1', function(done) {
      var newItem = new Item({
        code: 'Some code',
        quantity: 1
      });

      expect(newItem.Code).to.equal('Some code');
      expect(newItem.Qty).to.equal(1);
      expect(newItem.Options).to.eql({ 'C': {'1/1': '1'}, 'X': {'1/1': '1'} });

      done();
  });

  it('should create item with one option', function(done) {
    var newItem = new Item({
      code: 'Some code',
      quantity: 1,
      options: ['P']
    });

    expect(newItem.Code).to.equal('Some code');
    expect(newItem.Qty).to.equal(1);
    expect(newItem.Options).to.eql({ 'C': {'1/1': '1'}, 'X': {'1/1': '1'}, 'P': {'1/1': '1'} });

    done();
  });

  it('should create item with multiple options', function(done) {
    var newItem = new Item({
      code: 'Some code',
      quantity: 1,
      options: ['P', 'S']
    });

    expect(newItem.Code).to.equal('Some code');
    expect(newItem.Qty).to.equal(1);
    expect(newItem.Options).to.eql({ 'C': {'1/1': '1'}, 'X': {'1/1': '1'}, 'P': {'1/1': '1'}, 'S': {'1/1': '1'} });

    done();
  });
})
