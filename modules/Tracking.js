import Is from "strong-type";
import { getSoap } from "../utils/api-json.js";
import urls from "../utils/urls.js";

const is=new Is;

class Tracking{
    constructor(){

    }
    
    orders={}
    query={}
    dominosAPIResult={}

    async byPhone(phone) {
        is.string(phone);
    
        return await this.byURL(`${urls.track}Phone=${phone}`);
    }

    async byID(storeID, orderKey) {
    
        return await this.byURL(`${urls.track}StoreID=${storeID}&OrderKey=${orderKey}`);
    }

    async byURL(url){
        is.string(url);
        
        //console.log(url)

        this.dominosAPIResult=await getSoap(url);

        //console.log(this.dominosAPIResult);

        is.object(this.dominosAPIResult['soap:Envelope']);
        is.object(this.dominosAPIResult['soap:Envelope']['soap:Body']);
        is.object(this.dominosAPIResult['soap:Envelope']['soap:Body'].GetTrackerDataResponse);

        this.orders=this.dominosAPIResult['soap:Envelope']['soap:Body'].GetTrackerDataResponse.OrderStatuses;
        this.query=this.dominosAPIResult['soap:Envelope']['soap:Body'].GetTrackerDataResponse.Query;
        
        return this;
    }
}

export {
    Tracking as default,
    Tracking
}