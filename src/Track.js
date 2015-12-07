'use strict';

var urls = require('./urls.json');
var request = require('request');
var parser = require('xml2json');

module.exports.byPhone = function(phone, callback) {
    if( !phone || !callback) {
        if(callback) {
            callback({
                success: false,
                message: 'Phone is required!'
            });
        }
        return;
    }

    this.byUrl(urls.track + 'Phone=' + phone, callback);
};

module.exports.byId = function(storeID, orderKey, callback) {
    if(!storeID || !orderKey || !callback){
        if(callback)
            callback({
                success: false,
                message: 'storeID, orderKey, and callback are all required to get pizza info using the orderKey'
            });
        return;
    }

    this.byUrl(urls.track + 'StoreID=' + storeID + '&OrderKey=' + orderKey, callback);
};

module.exports.byUrl = function(url, callback){
    request.get(
        url,
        function (error, response, body) {
            if (error) {
                callback({
                    success: false,
                    message: error
                });
                return;
            }

            if (response.statusCode !== 200){
                callback({
                    success: false,
                    message:'HTML Status Code Error ' + response.statusCode
                });
                return;
            }

            var result = parser.toJson(
                body,
                {
                    coerce: false,
                    sanitize: false,
                    object: true,
                    trim: false
                }
            );

            if(!result['soap:Envelope']){
                callback({
                    success: false,
                    message: 'API soap:Envelope not present',
                    data: result
                });
                return;
            }

            if(!result['soap:Envelope']['soap:Body']){
                callback({
                    success: false,
                    message: 'API soap:Body not present',
                    data: result
                });
                return;
            }

            if(!result['soap:Envelope']['soap:Body'].GetTrackerDataResponse){
                callback({
                    success: false,
                    message:'API GetTrackerDataResponse not present',
                    data: result
                });
                return;
            }

            callback({
                orders: result['soap:Envelope']['soap:Body'].GetTrackerDataResponse.OrderStatuses,
                query: result['soap:Envelope']['soap:Body'].GetTrackerDataResponse.Query
            });
        }
    );
};
