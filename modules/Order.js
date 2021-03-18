import IsDominos from '../utils/DominosTypes.js';
import DominosFormat from './DominosFormat.js';
import {urls} from '../utils/urls.js';
import Address from '../modules/Address.js';
import {post} from '../utils/api-json.js';
import { toCamel } from '../utils/toCase.js';
import AmountsBreakdown from './AmountsBreakdown.js';

const isDominos=new IsDominos;
const testDominos=new IsDominos(false);

class Order extends DominosFormat{
    constructor(customer) {
        super();

        return this.addCustomer(customer);
    }

    address = new Address
    amounts = {}
    amountsBreakdown=new AmountsBreakdown
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
    metaData = {calculateNutrition: true, contactless:true}
    newUser = true
    noCombine = true
    orderChannel = 'OLO'
    orderID = ''
    orderInfoCollection=[]
    orderMethod = 'Web'
    orderTaker = 'node-dominos-pizza-api'
    partners = {}
    payments = []
    phone = ''
    phonePrefix = ''
    priceOrderMs=0
    priceOrderTime = ''
    products = []
    promotions={}
    pulseOrderGuid=''
    serviceMethod = 'Delivery'
    sourceOrganizationURI = urls.sourceUri
    storeID = ''
    tags = {}
    userAgent=''
    version = '1.0'
    
    orderInFuture(date){
        isDominos.date(date);
        const now=Date.now();
        if(date<now){
            throw new DominosDateError('Order dates must be in the future.');
        }
        const dateString=date.toISOString().replace('T',' ').replace('.000Z','');
        
        this.futureOrderTime=dateString;
    }

    orderNow(){
        delete this.futureOrderTime;
    }

    addCustomer(customer) { 
        isDominos.customer(customer);
        
        Object.assign(this,customer);
        
        return this;
    }

    addCoupon(couponCode) { 
        isDominos.object(couponCode);
        
        this.coupons.push(couponCode);
        
        return this;
    }

    removeCoupon(couponCode) { 
        isDominos.object(couponCode);
        
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

    get payload(){
        const formatted=this.formatted;
        formatted.Address=this.address.formatted;
        
        for(const [i,item] of Object.entries(this.products)){
            formatted.Products[i]=item.formatted;
        }

        for(const [i,payment] of Object.entries(this.payments)){
            formatted.Payments[i]=payment.formatted;
        }

        //console.log(formatted);

        Object.assign(formatted.metaData={},formatted.MetaData);

        delete formatted.MetaData

        return JSON.stringify(
            {
                Order:formatted
            },
            // null,
            // 4
        )   
    }

    // the setter is very large, so it is near the bottom of the class
    get formatted(){
        return super.formatted;
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

    get placeResponse(){
        return this.#placeResponse; 
    }

    set placeResponse(value){
        isDominos.object(value);

        return this.#placeResponse=value;
    }

    #priceResponse={}

    #validationResponse={}

    #placeResponse={}
    
    #remove(child,parent){

        const index = parent.indexOf(child);
        if(index != -1) {
          parent.splice(index, 1);
        }

        return this;
    }

    async validate() {  
        if(!this.storeID){
            throw new DominosStoreError('Store ID must be set before validating order');
        }

        this.validationResponse=await post(
            urls.order.validate,
            this.payload
        );

        const validation=this.validationResponse.Order;
        
        //console.log(this.validationResponse)

        if(validation.Status==-1 || this.validationResponse.Status==-1){
            throw new DominosValidationError(this.validationResponse);
        }

        this.formatted=validation;

        return this;
    }

    async price() {
        if(!this.storeID){
            throw new DominosStoreError('Store ID must be set before pricing an order. `order.storeID=...`');
        }

        if(!this.products.length>0){
            throw new DominosProductsError('Order must contain product items before pricing. `order.addItem(...)`');
        }

        this.priceResponse=await post(
            urls.order.price,
            this.payload
        );

        //console.dir(JSON.parse(this.payload),{depth:5})

        const price=this.priceResponse.Order;
        
        //console.dir(this.priceResponse,{depth:5})

        if(price.Status==-1 || this.priceResponse.Status==-1){
            throw new DominosPriceError(this.priceResponse);
        }

        this.formatted=price;

        return this;
    }

    async place() {
        if(!this.storeID){
            throw new DominosStoreError('Store ID must be set before placing an order. `order.storeID=...`');
        }

        if(!this.products.length>0){
            throw new DominosProductsError('Order must contain product items before placing. `order.addItem(...)`');
        }
        
        if(!this.address.region){
            console.log(this.address)
            throw new DominosAddressError('before you place an order, you must insure `order.address.region` is set');
        }

        this.placeResponse=await post(
            urls.order.place,
            this.payload
        );

        // console.dir(JSON.parse(this.payload),{depth:5})

        const placeOrder=this.placeResponse.Order;
        
        // console.dir(this.placeResponse,{depth:5})

        if(placeOrder.Status==-1 || this.priceResponse.Status==-1){
            throw new DominosPlaceOrderError(this.placeResponse);
        }

        this.formatted=placeOrder;

        return this;
    };

    set formatted(orderResponse){
        // instance members
        this.address.formatted=orderResponse.Address;
        this.amountsBreakdown.formatted=orderResponse.AmountsBreakdown;
        
        //refreneces arrays/objects 
        for(const [key,promo] of Object.entries(orderResponse.Promotions)){
            this.promotions[toCamel(key)]=promo;
        }

        for(const [i,product] of Object.entries(orderResponse.Products)){
            this.products[i].formatted=product;
        }

        //primitives
        for(const [key,value] of Object.entries(orderResponse)){
            if(
                !testDominos.address(value)
                && !testDominos.address(value)
                && !testDominos.amountsBreakdown(value)
                && !testDominos.object(value)
                && !testDominos.array(value)
            ){
                this[toCamel(key)]=value;
                continue;
            }
            //console.log(key,value);
        }

        return this;
    }

}


export {
    Order as default,
    Order
}
