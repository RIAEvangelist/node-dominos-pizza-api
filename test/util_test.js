'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var util = require('../src/Utilities');

describe('Utilities', function() {
    describe('FindStores', function() {
        it('should find nearby stores that deliver', function(done) {
            util.findNearbyStores('900 Clark Ave, St. Louis, MO, 63102', 'Delivery', function(result) {
                expect(result).to.exist;
                expect(result.result.Stores).to.have.length.above(0);

                done();
            });
        });

        it('should find nearby stores that carryout', function(done) {
            util.findNearbyStores('900 Clark Ave, St. Louis, MO, 63102', 'Carryout', function(result) {
                expect(result).to.exist;
                expect(result.result.Stores).to.have.length.above(0);

                done();
            });
        })
    })
});
