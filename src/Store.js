'use strict';

var httpJson = require('./http-json');
var urls = require('./urls.json');
var util=require('util');
var fs=require('fs');
var Menu=require('./Menu.js');

var Store = function(parameters) {
    this.ID = parameters.ID;
};

Store.prototype.getInfo = function(callback) {
    if( !this.ID || !callback){
        if(callback)
            callback(
                {
                    success: false,
                    message: 'A callback is required to get store info'
                }
            );
        return;
    }

    httpJson.get(urls.store.info.replace('${storeID}', this.ID), callback);
};

Store.prototype.getMenu = function(callback, lang, noCache) {
    if (this.cachedMenu && !noCache) {
        callback(this.cachedMenu); //TODO as below, break compatibility by removing first parameter
        return;
    }
    if( !this.ID || !callback){
        if(callback)
            callback({
                success: false,
                message: 'A callback is required to get a store menu'
            });
        return;
    }

    if(!lang)
        lang = 'en';

    var url = urls.store.menu.replace('${storeID}', this.ID)
        .replace('${lang}', lang);


    httpJson.get(url,(function(jsonObj) {
        this.cachedMenu = new Menu(jsonObj);
        callback(this.cachedMenu); //TODO break compatibility by removing first parameter
    }).bind(this));

    /*
    httpJson.get(
        url,
        (function(response) {
            fs.writeFile('sampleResp/menu'+this.ID+'.json', JSON.stringify(response, null, 4), function (err) {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        }).bind(this)
    );
    */
};

Store.prototype.getFriendlyNames = function(callback, lang) {
  if( !this.ID || !callback){
      if(callback)
          callback({
              success: false,
              message: 'A callback is required to get a store menu'
          });
      return;
  }

  if(!lang)
      lang = 'en';

  var url = urls.store.menu.replace('${storeID}', this.ID)
      .replace('${lang}', lang);

  httpJson.get(url, function(result) {
    var itemMapping = [];
    var keys = Object.keys(result.result.Variants);
    keys.forEach(function(key) {
      var json = {};
      json[result.result.Variants[key].Name] = key
      itemMapping.push(json);
    });

    callback({ success: true, result: itemMapping });
  });
}

module.exports = Store;
