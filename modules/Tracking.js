import Is from "strong-type";
import { get } from "../utils/api-json";
import urls from "../utils/urls";

is=new Is;

class Tracking{
    constructor(){

    }
    
    dominosAPIResult={}

    byPhone(phone, callback) {
        is.string(phone);
    
        this.byUrl(urls.track + 'Phone=' + phone, callback);
    }

    byId(storeID, orderKey, callback) {
    
        this.byUrl(urls.track + 'StoreID=' + storeID + '&OrderKey=' + orderKey, callback);
    }

    byUrl(url, callback){
        is.string(url);
        
        this.dominosAPIResult=await get(url);

        is.object(tracking['soap:Envelope']);
        is.object(tracking['soap:Envelope']['soap:Body']);
        is.object(tracking['soap:Envelope']['soap:Body'].GetTrackerDataResponse);

        return {
            orders: tracking['soap:Envelope']['soap:Body'].GetTrackerDataResponse.OrderStatuses,
            query: tracking['soap:Envelope']['soap:Body'].GetTrackerDataResponse.Query
        }
    }
}

export {
    Tracking as default,
    Tracking
}