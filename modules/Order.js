import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';
import Address from '../modules/Address.js';
import {urls} from '../utils/urls.js';

const is=new Is;

class Order extends DominosFormat{
    constructor(parameters) {
        super();

        this.init=parameters;
        return this;
    }

    address = new Address
    coupons = []
    customerID = ''
    email = ''
    extension = ''
    firstName = ''
    lastName = ''
    languageCode = 'en'
    orderChannel = 'OLO'
    orderID = ''
    orderMethod = 'Web'
    orderTaker = null
    payments = []
    phone = ''
    products = []
    market = ''
    currency = ''
    serviceMethod = 'Delivery'
    sourceOrganizationURI = urls.sourceUri
    storeID = ''
    tags = {}
    version = '1.0'
    noCombine = true
    partners = {}
    newUser = true
    metaData = {}
    amounts = {}
    businessDate = ''
    estimatedWaitMinutes = ''
    priceOrderTime = ''
    amountsBreakdown=[]

    get payload(){
        return JSON.stringify(
            {
                Object:this.formatted
            }
        )   
    }

    addCoupon(couponCode) { 
        this.coupons.push(couponCode);
        
        return this;
    }

    removeCoupon(couponCode) { 
        var index = this.coupons.indexOf(couponCode);
        if (index == -1) {
            return this;
        }
        this.coupons.splice(index, 1);
        
        return this;
    }

    addItem(item) { 
        this.products.push(item);
        
        return this;
    }

    removeItem(item) {
        var index = this.products.indexOf(item);
        if(index != -1) {
          this.products.splice(index, 1);
        }

        return this;
    }    

    async validate() {  

        order = JSON.stringify(
            {
                'Order' : this
            }
        );


        //switch this to an await

        httpJson.post(urls.order.validate, this.payload);

        return;
    }

    async price() {
        
        
        //update this
        
        httpJson.post(urls.order.price, this.payload);
    }

    async place() {
        
        //update this
        
        httpJson.post(urls.order.place, this.payload, callback);
    };

}


export {
    Order as default,
    Order
}
