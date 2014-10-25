var request = require('request');
var parser = require('xml2json');
var apiURL="https://trkweb.dominos.com/orderstorage/GetTrackerData?"

function trackPizzaByPhone(phone, callback) {
    if(!phone || !callback){
        if(callback)
            callback(
            {
               success:false,
               error:{
                   message:"A phone number, and callback are required to get pizza info using a phone number"
               }
            }
        );
        return;
    }
    
    trackPizza(
        apiURL+"Phone=" + phone,
        callback
    );
}

function trackPizzaByID(storeID, orderKey, callback) {
    if(!storeID || !orderKey || !callback){
        if(callback)
            callback(
            {
               success:false,
               error:{
                   message:"storeID, orderKey, and callback are all required to get pizza info using the orderKey"
               }
            }
        );
        return;
    }
    
    trackPizza(
        apiURL+"StoreID="+storeID+"&OrderKey="+orderKey,
        callback
    );
}

function trackPizza(url,callback){
    request.get(
        url,
        function (error, response, body) {
            var data={
                success:true
            };
            
            if (error){
                data.success=false;
                data.error=error;
                callback(data);
                return;
            }
            
            if (response.statusCode !== 200){
                data.success=false;
                data.error={
                    message:'HTML Status Code Error',
                    code:response.statusCode
                };
                callback(data);
                return;
            }
            
            result = parser.toJson(
                body, 
                {
                    coerce: false, 
                    sanitize: false, 
                    object: true, 
                    trim: false
                }
            );
            
            if(!result['soap:Envelope']){
                data.success=false;
                data.error={
                    message:'API soap:Envelope not present',
                    data:result
                };
                callback(data);
                return;
            }
            
            if(!result['soap:Envelope']['soap:Body']){
                data.success=false;
                data.error={
                    message:'API soap:Body not present',
                    data:result
                };
                callback(data);
                return;
            }
            
            
            if(!result['soap:Envelope']['soap:Body'].GetTrackerDataResponse){
                data.success=false;
                data.error={
                    message:'API GetTrackerDataResponse not present',
                    data:result
                };
                callback(data);
                return;
            }
            
            data.orders=result['soap:Envelope']['soap:Body'].GetTrackerDataResponse.OrderStatuses;
            data.query=result['soap:Envelope']['soap:Body'].GetTrackerDataResponse.Query;
            
            callback(data);
            return;
        }
    );
}

module.exports={
    track:{
        phone:trackPizzaByPhone,
        orderKey:trackPizzaByID
    }
};