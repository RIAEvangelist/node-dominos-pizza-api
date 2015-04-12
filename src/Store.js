var httpJson = require('./http-json');
var urls = require('./urls.json');

exports = function() {
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
