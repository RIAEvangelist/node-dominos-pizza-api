'use strict';

const Item = require('../src/Item');

describe('Item', function() {
  it('should create base item', function(done) {
      const newItem = new Item({
        code: 'Some code',
      });

      expect(newItem.Code).toEqual('Some code');
      expect(newItem.Qty).toEqual(1);
      expect(newItem.Options).toMatchObject({ 'C': {'1/1': '1'}, 'X': {'1/1': '1'} });

      done();
  });

  it('should create item with quantity 1', function(done) {
      const newItem = new Item({
        code: 'Some code',
        quantity: 1
      });

      expect(newItem.Code).toEqual('Some code');
      expect(newItem.Qty).toEqual(1);
      expect(newItem.Options).toMatchObject({ 'C': {'1/1': '1'}, 'X': {'1/1': '1'} });

      done();
  });

  it('should create item with one option', function(done) {
    const newItem = new Item({
      code: 'Some code',
      quantity: 1,
      options: ['P']
    });

    expect(newItem.Code).toEqual('Some code');
    expect(newItem.Qty).toEqual(1);
    expect(newItem.Options).toHaveProperty('P');

    done();
  });

  it('should create item with multiple options', function(done) {
    const newItem = new Item({
      code: 'Some code',
      quantity: 1,
      options: ['P', 'S']
    });

    expect(newItem.Code).toEqual('Some code');
    expect(newItem.Qty).toEqual(1);
    expect(newItem.Options).toHaveProperty('P');
    expect(newItem.Options).toHaveProperty('S');

    done();
  });
})
