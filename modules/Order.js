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
    metaData = {calculateNutrition: "true"}
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
            formatted.Products[i]=item.formatted;
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
        
        //update this
        
        httpJson.post(urls.order.place, this.payload, callback);
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
            console.log(key,value);
        }

        return this;
    }

}


export {
    Order as default,
    Order
}
