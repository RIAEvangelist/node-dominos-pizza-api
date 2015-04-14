var httpJson = require('./http-json');
var urls = require('./urls.json');

var Store = function() {
    this.ID = "";
};

Store.prototype.getInfo = function(callback) {
    if( !storeID || !callback){
        if(callback)
            callback({
                success: false,
                message: "A storeID, and callback are required to get store info"
            });
        return;
    }

    httpJson.get(urls.store.info.replace('${storeID}', this.ID), callback);
};

Store.prototype.getMenu = function(callback, lang) {
    if( !storeID || !callback){
        if(callback)
            callback({
                success: false,
                message: "A storeID, and callback are required to get a store menu"
            });
        return;
    }

    if(!lang)
        lang = 'en';

    var url = urls.store.menu.replace('${storeID}', this.ID)
        .replace('${lang}', lang);

    httpJson.get(url, callback);
};

Store.prototype.findNearbyStores = function(address, pickUpType, callback) {
    if(!address || !callback) {
        if(callback) {
            callback({
                success: false,
                message: "At least a partial address (minimum accepted is zipcode) is required to find stores"
            });
        }
        return;
    }

    var url = urls.store.find.replace('${line1}', encodeURI(address[0]))
        .replace('${line2}', encodeURI(address[1]))
        .replace('${type}', pickUpType);

    httpJson.get(url, callback);
};

exports = Store;