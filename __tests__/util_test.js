'use strict';



const util = require('../src/Utilities');

describe('Utilities', function() {
    describe('FindStores', function() {
        it('should find nearby stores that deliver', function(done) {
            util.findNearbyStores('900 Clark Ave, St. Louis, MO, 63102', 'Delivery', function(result) {
                expect(result).toBeTruthy();
                expect(result.result.Stores.length).toBeGreaterThan(0);

                done();
            });
        });

        it('should find nearby stores that carryout', function(done) {
            util.findNearbyStores('900 Clark Ave, St. Louis, MO, 63102', 'Carryout', function(result) {
                expect(result).toBeTruthy();
                expect(result.result.Stores.length).toBeGreaterThan(0);

                done();
            });
        })
    })
});
