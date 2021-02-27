import IsDominos from '../../utils/DominosTypes.js';
import Order from '../../modules/Order.js';
import Customer from '../../modules/Customer.js';
import Item from '../../modules/Item.js';

const isDominos=new IsDominos;

const customer=new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '900 Clark Ave, 63102',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
)

const defaultRequired=function(test){
    try{
        test.expects(`Order to fail initialization without an inital customer being passed.`);
        
        const order=new Order();
        
        test.fail();
    }catch(err){
        try{
            isDominos.typeError(err);

            console.trace(err);
            test.pass();
        }catch(err){
            console.trace(err);
            test.fail();
        }
    }
    test.pass();
    test.done();
}

const initWithCustomer=function(test){
    try{
        test.expects(`Order to initialize when passed a customer.`);
        
        const order=new Order(customer);

        //get sanitized JSON
        //console.log(order.payload)

        const expectsJSON='{"Order":{"Address":{"Street":"900 Clark Ave","StreetNumber":"","StreetName":"","UnitType":"","UnitNumber":"","City":"","Region":"","PostalCode":"63102","DeliveryInstructions":""},"Amounts":{},"AmountsBreakdown":[],"BusinessDate":"","Coupons":[],"Currency":"","CustomerID":"","EstimatedWaitMinutes":"","Email":"chief@us.gov","Extension":"","FirstName":"Barack","HotspotsLite":false,"LastName":"Obama","LanguageCode":"en","Market":"","MetaData":{},"NewUser":true,"NoCombine":true,"OrderChannel":"OLO","OrderID":"","OrderMethod":"Web","OrderTaker":null,"Partners":{},"Payments":[],"Phone":"1-800-555-2368","PriceOrderTime":"","Products":[],"ServiceMethod":"Delivery","SourceOrganizationURI":"order.dominos.com","StoreID":"","Tags":{},"Version":"1.0"}}';
        
        if(order.payload!==expectsJSON){
            test.fail();
        }

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const addAndRemoveCoupons=function(test){
    try{
        test.expects(`Order to add and then remove coupons.`);    
        
        const order=new Order(customer);
        const coupon='FREE_PIZZA';


        order.addCoupon(coupon);
        
        if(!order.coupons.includes(coupon)){
            test.fail();
        }

        order.removeCoupon(coupon);
        
        if(order.coupons.includes(coupon)){
            test.fail();
        }

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const addAndRemoveItems=function(test){
    try{
        test.expects(`Order to add and then remove a cheese pizza.`);    
        
        const order=new Order(customer);
        const cheesePizza=new Item(
            {
                code:'14SCREEN'
            }
        )

        order.addItem(cheesePizza);
        
        if(!order.products.includes(cheesePizza)){
            test.fail();
        }

        order.removeItem(cheesePizza);
        
        if(order.products.includes(cheesePizza)){
            test.fail();
        }

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}


const validateCheesePizza=async function(test){
    try{
        test.expects(`Order to validate as a Cheese Pizza with Extra Cheese`);    
        
        const expectsJSON="{\"Order\":{\"Address\":{\"Street\":\"900 Clark Ave\",\"StreetNumber\":\"\",\"StreetName\":\"\",\"UnitType\":\"\",\"UnitNumber\":\"\",\"City\":\"\",\"Region\":\"\",\"PostalCode\":\"63102\",\"DeliveryInstructions\":\"\"},\"AmountsBreakdown\":[],\"BusinessDate\":\"\",\"Coupons\":[],\"Currency\":\"USD\",\"CustomerID\":\"\",\"EstimatedWaitMinutes\":\"0\",\"Email\":\"chief@us.gov\",\"Extension\":\"\",\"FirstName\":\"Barack\",\"HotspotsLite\":false,\"LastName\":\"Obama\",\"LanguageCode\":\"en\",\"Market\":\"UNITED_STATES\",\"MetaData\":{},\"NewUser\":true,\"NoCombine\":true,\"OrderChannel\":\"OLO\",\"OrderID\":null,\"OrderMethod\":\"Web\",\"Partners\":{},\"Payments\":[],\"Phone\":\"1-800-555-2368\",\"PriceOrderTime\":\"\",\"ServiceMethod\":\"Carryout\",\"SourceOrganizationURI\":\"order.dominos.com\",\"StoreID\":7981,\"Tags\":{},\"Version\":\"1.0\",\"IP\":null,\"UserAgent\":\"node-fetch/1.0 (+https://github.com/bitinn/node-fetch)\",\"Promotions\":{\"Redeemable\":[],\"Valid\":[]},\"Status\":1,\"StatusItems\":[{\"Code\":\"AutoAddedOrderId\"},{\"Code\":\"PriceInformationRemoved\"},{\"Code\":\"StoreInWarningTimeForCarryout\"}],\"metaData\":{\"prop65Warning\":true},\"Products\":[{\"ID\":1,\"Code\":\"14SCREEN\",\"Qty\":1,\"CategoryCode\":\"Pizza\",\"FlavorCode\":\"HANDTOSS\",\"Status\":0,\"LikeProductID\":0,\"Name\":\"Large (14\\\") Hand Tossed Pizza\",\"IsNew\":false,\"NeedsCustomization\":false,\"AutoRemove\":false,\"Fulfilled\":false,\"Tags\":{},\"Options\":{\"C\":{\"1/1\":\"2\"}},\"descriptions\":[{\"portionCode\":\"1/1\",\"value\":\"Double Cheese, Robust Inspired Tomato Sauce\"}]}]},\"Status\":1,\"Offer\":{\"CouponList\":[],\"ProductOffer\":\"\"},\"EmailHash\":null,\"StatusItems\":[{\"Code\":\"Warning\"}]}";

        const cheesePizza=new Item(
            {
                ID:1,
                code:'14SCREEN',
                options:{
                    X: {'1/1' : '1'}, 
                    C: {'1/1' : '2'}
                }
            }
        )
        
        const order=new Order(customer);
        order.storeID=7981;
        order.serviceMethod='Carryout';
        
        order.addItem(cheesePizza);
        
        await order.validate();
        
        //clear randomized or machine specific information
        order.validationResponse.Order.OrderID=null;
        order.validationResponse.Order.IP=null;

        const sanitizedResponse=JSON.stringify(order.validationResponse);
        
        //get sanitized JSON
        // console.log(JSON.stringify(sanitizedResponse));
        
        if(sanitizedResponse!==expectsJSON){
            test.fail();
        }

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const name=function(test){
    try{
        test.expects(``);    
        

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}


const runTest=async function(test){
    defaultRequired(test);
    initWithCustomer(test);
    addAndRemoveCoupons(test);
    addAndRemoveItems(test);

    //await validateCheesePizza(test);
}

export {
    runTest as default,
    runTest
}