exports = function(parameters) {
    this.ID = "";
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
    this.email = parameters.email;
    this.address = parameters.Address;
}

Customer.prototype.findNearbyStores = function(address, callback, type) {
    if( !address || !callback){
        if(callback)
            callback(
                APIError("At least a partial address ( minimum accepted is zipcode ),  and callback are required to find stores")
            );
        return;
    }

    if(!type)
        type='all';

    if(typeof address== "string")
        address = [address, ' '];

    var url = api.store.find.replace('${line1}', encodeURI(address[0]))
        .replace('${line2}', encodeURI(address[1]))
        .replace('${type}', type);

    httpJson.get(url, callback);
};