import IsDominos from '../utils/DominosTypes.js';
import DominosFormat from './DominosFormat.js';
import {urls} from '../utils/urls.js';
import Address from '../modules/Address.js';
import {post} from '../utils/api-json.js';
import { toCamel } from '../utils/toCase.js';

const isDominos=new IsDominos;

class Order extends DominosFormat{
    constructor(customer) {
        super();

        return this.addCustomer(customer);
    }

    address = new Address
    amounts = {}
    amountsBreakdown=[]
    businessDate = ''
    coupons = []
    currency = ''
    customerID = ''
    
    estimatedWaitMinutes = ''
    email = ''
    extension = ''
    firstName = ''
    hotspotsLite= false
    iP=''
    lastName = ''
    languageCode = 'en'
    market = ''
    metaData = {}
    newUser = true
    noCombine = true
    orderChannel = 'OLO'
    orderID = ''
    orderMethod = 'Web'
    orderTaker = null
    partners = {}
    payments = []
    phone = ''
    priceOrderTime = ''
    products = []
    promotions={}
    serviceMethod = 'Delivery'
    sourceOrganizationURI = urls.sourceUri
    storeID = ''
    tags = {}
    userAgent=''
    version = '1.0'
    
    get payload(){
        const formatted=this.formatted;
        formatted.Address=this.address.formatted;
        
        for(const [i,item] of Object.entries(this.products)){
            //this will also effect the instance products
            formatted.Products[i]=item.formatted;
            //reset the instance products back to what they were
            this.products[i]=item;
        }

        //console.log(formatted);

        return JSON.stringify(
            {
                Order:formatted
            },
            // null,
            // 4
        )   
    }

    addCustomer(customer) { 
        isDominos.customer(customer);
        
        Object.assign(this,customer);
        
        return this;
    }

    addCoupon(couponCode) { 
        isDominos.string(couponCode);
        
        this.coupons.push(couponCode);
        
        return this;
    }

    removeCoupon(couponCode) { 
        isDominos.string(couponCode);
        
        return this.#remove(couponCode,this.coupons);;
    }

    addItem(item) { 
        isDominos.item(item);

        this.products.push(item);
        
        return this;
    }

    removeItem(item) {
        isDominos.item(item);

        return this.#remove(item,this.products);
    }

    get validationResponse(){
        return this.#validationResponse; 
    }

    set validationResponse(value){
        isDominos.object(value);

        return this.#validationResponse=value;
    }

    get priceResponse(){
        return this.#priceResponse; 
    }

    set priceResponse(value){
        isDominos.object(value);

        return this.#priceResponse=value;
    }

    #priceResponse={}

    #validationResponse={}
    
    #remove(child,parent){

        const index = parent.indexOf(child);
        if(index != -1) {
          parent.splice(index, 1);
        }

        return this;
    }

    async validate() {  

        //switch this to an await

        this.validationResponse=await post(
            urls.order.validate,
            this.payload
        );

        const validation=this.validationResponse.Order;
        
        //console.log(this.validationResponse)

        if(validation.Status!==1 || this.validationResponse.Status !== 1){
            throw new DominosValidationError(this.validationResponse);
        }

        this.#merge(validation);

        return this;
    }

    async price() {
        
        
        //update this
        
        httpJson.post(urls.order.price, this.payload);
    }

    async place() {
        
        //update this
        
        httpJson.post(urls.order.place, this.payload, callback);
    };

    #merge(order){
        this.address.formatted=order.Address;
        this.currency=order.Currency;
        this.estimatedWaitMinutes=order.EstimatedWaitMinutes;
        this.market=order.Market;
        this.orderID=order.OrderID;
        this.iP=order.IP;
        this.userAgent=order.UserAgent;
        
        for(const [key,promo] of Object.entries(order.Promotions)){
            this.promotions[toCamel(key)]=promo;
        }

        for(const [i,product] of Object.entries(order.Products)){
            this.products[i].formatted=product;
        }
    }

}


export {
    Order as default,
    Order
}
