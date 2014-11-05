var request = require('request');
var parser = require('xml2json');
var api={};
api.track="https://trkweb.dominos.com/orderstorage/GetTrackerData?"

api.store={};
api.store.find='https://order.dominos.com/power/store-locator?s=${address}&type=${type}';
api.store.info='https://order.dominos.com/power/store/${storeID}/profile';
api.store.menu='https://order.dominos.com/power/store/${storeID}/menu?lang=${lang}&structured=true';

api.order={};
api.order.validate='https://order.dominos.com/power/validate-order';
api.order.price='https://order.dominos.com/power/price-order';
api.order.place='https://order.dominos.com/power/place-order';

function validateOrder(order, callback) {
    if( !order || !callback){
        if(callback)
            callback(
                APIError("An order object,  and callback are required to validate the order")
            );
        return;
    }
    
    postJSONAPI(
        api.order.validate,
        order,
        callback
    );
}

function priceOrder(order, callback) {
    if( !order || !callback){
        if(callback)
            callback(
                APIError("An order object,  and callback are required to price an order")
            );
        return;
    }
    
    postJSONAPI(
        api.order.price,
        order,
        callback
    );
}

function placeOrder(order, callback) {
    if( !order || !callback){
        if(callback)
            callback(
                APIError("An order object,  and callback are required to place an order")
            );
        return;
    }
    
    postJSONAPI(
        api.order.place,
        order,
        callback
    );
}

function findStores(address, callback, type) {
    if( !address || !callback){
        if(callback)
            callback(
                APIError("At least a partial address ( minimum accepted is zipcode ),  and callback are required to find stores")
            );
        return;
    }
    
    if(!type)
        type='all';
    
    requestJSONAPI(
        api.store.find.replace(
            '${address}',
            encodeURI(address)
        ).replace(
            '${type}',
            type
        ),
        callback
    );
}

function getStoreInfo(storeID, callback) {
    if( !storeID || !callback){
        if(callback)
            callback(
                APIError("A storeID, and callback are required to get store info")
            );
        return;
    }
    
    requestJSONAPI(
        api.store.info.replace(
            '${storeID}',
            storeID
        ),
        callback
    );
}

function getStoreMenu(storeID, callback, lang) {
    if( !storeID || !callback){
        console.log(storeID,123)
        if(callback)
            callback(
                APIError("A storeID, and callback are required to get a store menu")
            );
        return;
    }
    
    if(!lang)
        lang='en';
    
    requestJSONAPI(
        api.store.menu.replace(
            '${storeID}',
            storeID
        ).replace(
            '${lang}',
            lang
        ),
        callback
    );
}

function trackPizzaByPhone(phone, callback) {
    if(!phone || !callback){
        if(callback)
            callback(
                APIError("A phone number, and callback are required to get pizza info using a phone number")
            );
        return;
    }
    
    trackPizza(
        api.track+"Phone=" + phone,
        callback
    );
}

function trackPizzaByID(storeID, orderKey, callback) {
    if(!storeID || !orderKey || !callback){
        if(callback)
            callback(
                APIError("storeID, orderKey, and callback are all required to get pizza info using the orderKey")
            );
        return;
    }
    
    trackPizza(
        api.track+"StoreID="+storeID+"&OrderKey="+orderKey,
        callback
    );
}

function postJSONAPI(url,order,callback){
    if(typeof order!= "string")
        order=JSON.stringify(order);
    
    request.post(
        {
            uri:url,
            headers:{
                Referer:'https://order.dominos.com/en/pages/order/',
                "Content-Type": 'application/json'
            },
            body:order
        },
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
            
            try{
                data.result=JSON.parse(body);
            }catch(err){
                data.success=false;
                data.error={
                    message:'Could not parse API return',
                    err:err
                };
            }
            
            callback(data);
        }
    );
}

function requestJSONAPI(url,callback){
    request.get(
        {
            uri:url,
            headers:{
                'Referer':'https://order.dominos.com/en/pages/order/'
            }
        },
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
            
            try{
                data.result=JSON.parse(body);
            }catch(err){
                data.success=false;
                data.error={
                    message:'Could not parse API return',
                    err:err
                };
            }
            
            callback(data);
        }
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

function Order(){
    return {
        "Order": {
            "Address": {
                "Street": "",
                "City": "",
                "Region": "",
                "PostalCode": "",
                "Type": "House" //House or Business
            },
            "Coupons": [],
            "CustomerID": "",
            "Email": "",
            "Extension": "",
            "FirstName": "",
            "LastName": "",
            "LanguageCode": "en",
            "OrderChannel": "OLO",
            "OrderID": "",
            "OrderMethod": "Web",
            "OrderTaker": null,
            "Payments": [],
            "Phone": "",
            "Products": [],
            "ServiceMethod": "Delivery",
            "SourceOrganizationURI": "order.dominos.com",
            "StoreID": "",
            "Tags": {},
            "Version": "1.0",
            "NoCombine": true,
            "Partners": {},
            "NewUser": true,
            "metaData": {}
        }
    }
}

function Product(){
    return {
        "Code": "", //get from store menu
        "Qty": 1, //default value
        "ID": false, //will be populated during validate
        "isNew": true,
        "Options": {}
    }
}

function Payment(){
    return {
        "Type": "CreditCard",
        "Amount": 0,
        "Number": "",
        "CardType": "",//uppercase
        "Expiration": "",//digits only
        "SecurityCode": "",
        "PostalCode": ""
    }        
}

function APIError(message){
    return {
        success:false,
        error:{
            message:message
        }
    }
}

module.exports={
    class:{
        Order:Order,
        Product:Product,
        Payment:Payment
    },
    track:{
        phone:trackPizzaByPhone,
        orderKey:trackPizzaByID
    },
    store:{
        find:findStores,
        info:getStoreInfo,
        menu:getStoreMenu
    },
    order:{
        validate:validateOrder,
        price:priceOrder,
        place:placeOrder
    }
};