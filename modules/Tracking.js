import Is from "strong-type";
import { get } from "../utils/api-json.js";
import urls from "../utils/urls.js";

const is=new Is;

class Tracking{
    constructor(){

    }
    
    dominosAPIResult={}

    async byPhone(phone) {
        is.string(phone);
    
        return await this.byUrl(`${urls.track}Phone=${phone}`);
    }

    async byId(storeID, orderKey) {
    
        return await this.byUrl(`${urls.track}StoreID=${storeID}&OrderKey=${orderKey}`);
    }

    async byUrl(url){
        is.string(url);
        
        console.log(url)

        this.dominosAPIResult=await get(url);

        console.log(this.dominosAPIResult);

        is.object(this.dominosAPIResult['soap:Envelope']);
        is.object(this.dominosAPIResult['soap:Envelope']['soap:Body']);
        is.object(this.dominosAPIResult['soap:Envelope']['soap:Body'].GetTrackerDataResponse);

        return {
            orders: this.dominosAPIResult['soap:Envelope']['soap:Body'].GetTrackerDataResponse.OrderStatuses,
            query: this.dominosAPIResult['soap:Envelope']['soap:Body'].GetTrackerDataResponse.Query
        }
    }
}

export {
    Tracking as default,
    Tracking
}