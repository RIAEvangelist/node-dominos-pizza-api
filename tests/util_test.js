'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var util = require('../src/Utilities');

describe('Utilities', function() {
    describe('FindStores', function() {
        it('should find nearby stores that deliver', function(done) {
            util.findNearbyStores('address', 'Delivery', function(result) {
                expect(result).to.exist;
            })
        })
    })
});