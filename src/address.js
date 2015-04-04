exports = function(parameters) {
    this.Street = parameters.street;
    this.City = parameters.city;
    this.Region = parameters.region;
    this.PostalCode = parameters.postalCode;
    this.Type = "House";
}

Address.prototype.parseCityStateZip = function(locationString) {
    return "";  //Not implemented, yet.
};