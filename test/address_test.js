'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Address = require('../src/Address');

describe(
    'Address',
    function() {
        it(
            'should create Address object from JSON',
            function() {
                var jsonObj = {
                    Street: '123 Easy Street',
                    City: 'St. Louis',
                    Region: 'MO',
                    PostalCode: '63105',
                    Type: 'House'
                };

                var address = new Address(jsonObj);

                expect(address).not.to.be.null;
                expect(address.Street).to.equal(jsonObj.Street);
                expect(address.City).to.equal(jsonObj.City);
                expect(address.Region).to.equal(jsonObj.Region);

            }
        );

        it(
            'should create Address object from string',
            function() {
                var address = new Address('123 Easy Street, St. Louis, MO, 63105');

                expect(address).to.be.defined;
                expect(address.Street).to.equal('123 Easy Street');
                expect(address.City).to.equal('St. Louis');
                expect(address.Region).to.equal('MO');
                expect(address.PostalCode).to.equal('63105');
            }
        );

        it(
            'should return address lines',
            function() {
                var address = new Address('123 Easy Street, St.Louis, MO, 63105');
                var addressLines = address.getAddressLines();

                expect(addressLines.length).to.equal(2);

                expect(
                    addressLines[0]
                ).to.equal(
                    '123 Easy Street'
                );

                expect(
                    addressLines[1]
                ).to.equal(
                    address.City + ',' +
                    address.Region + ',' +
                    address.PostalCode
                );

                expect(
                    addressLines.line1
                ).to.equal(
                    '123 Easy Street'
                );

                expect(
                    addressLines.line2
                ).to.equal(
                    address.City + ',' +
                    address.Region + ',' +
                    address.PostalCode
                );

            }
        );

        it(
            'should return only zip code in line2',
            function() {
                var address = new Address('63105');
                var addressLines = address.getAddressLines();

                expect(addressLines.length).to.equal(2);
                expect(addressLines[0]).to.equal('');
                expect(addressLines[1]).to.equal(address.PostalCode);

                expect(addressLines.line1).to.equal('');
                expect(addressLines.line2).to.equal(address.PostalCode);

            }
        );

        it(
            'should return city, state, zip in address lines',
            function() {
                var address = new Address('St. Louis, MO, 63105');
                var addressLines = address.getAddressLines();

                expect(addressLines).to.have.length(2);
                expect(addressLines[0]).to.equal('');
                expect(addressLines[1]).to.equal(address.City + ',' + address.Region + ',' + address.PostalCode);
            }
        );

        it(
            'should create Address object from array',
            function() {
                var address = new Address(['123 Easy Street', 'St. Louis', 'MO', '63105']);
                expect(address).not.to.be.null;
                expect(address.Street).to.equal('123 Easy Street');
                expect(address.City).to.equal('St. Louis');
                expect(address.Region).to.equal('MO');
                expect(address.PostalCode).to.equal('63105');
            }
        );
    }
);
