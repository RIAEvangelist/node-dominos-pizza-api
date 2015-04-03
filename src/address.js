/**
 * Created by Maddie on 4/1/2015.
 */

function Address() {
    var rawJSON = {
        "Street": "",
        "City": "",
        "Region": "",
        "PostalCode": "",
        "Type": "House" //House or Business
    }
}

Address.prototype.create = function(street, city, region, zip) {
    this.rawJSON.Street = street;
    this.rawJSON.City = city;
    this.rawJSON.Region = region;
    this.rawJSON.PostalCode = zip;
};

Address.prototype.parseCityStateZip = function(locationString) {

};