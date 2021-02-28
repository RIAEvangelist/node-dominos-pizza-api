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

        const expectsJSON='{"Order":{"Address":{"Street":"900 Clark Ave","StreetNumber":"","StreetName":"","UnitType":"","UnitNumber":"","City":"","Region":"","PostalCode":"63102","DeliveryInstructions":""},"Amounts":{},"AmountsBreakdown":[],"BusinessDate":"","Coupons":[],"Currency":"","CustomerID":"","EstimatedWaitMinutes":"","Email":"chief@us.gov","Extension":"","FirstName":"Barack","HotspotsLite":false,"IP":"","LastName":"Obama","LanguageCode":"en","Market":"","MetaData":{"calculateNutrition":"true"},"NewUser":true,"NoCombine":true,"OrderChannel":"OLO","OrderID":"","OrderInfoCollection":[],"OrderMethod":"Web","OrderTaker":"node-dominos-pizza-api","Partners":{},"Payments":[],"Phone":"1-800-555-2368","PriceOrderTime":"","Products":[],"Promotions":{},"ServiceMethod":"Delivery","SourceOrganizationURI":"order.dominos.com","StoreID":"","Tags":{},"UserAgent":"","Version":"1.0"}}';
        
        //console.log(order.payload);

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

const failValidateCheesePizza=async function(test){
    try{
        test.expects(`Order to fail validating an order that does not specify a store`);    
        
        const cheesePizza=new Item(
            {
                code:'14SCREEN',
                options:{
                    X: {'1/1' : '1'}, 
                    C: {'1/1' : '2'}
                }
            }
        )
        
        const order=new Order(customer);
        order.serviceMethod='Carryout';
        
        order.addItem(cheesePizza);
        
        //console.dir(order,{depth:5});

        //should throw because this would be a terrible pizza
        await order.validate();
        
        //console.dir(order,{depth:5});
        test.fail();
    }catch(err){
        try{
            isDominos.validationError(err);
        }catch(err){
            console.trace(err);
            test.fail();
        }
    }
    test.pass();
    test.done();
}

const validateCheesePizza=async function(test){
    try{
        test.expects(`Order to validate as a Cheese Pizza with Extra Cheese`);    
        
        const expectsJSON="{\"Order\":{\"Address\":{\"Street\":\"900 Clark Ave\",\"StreetNumber\":\"\",\"StreetName\":\"\",\"UnitType\":\"\",\"UnitNumber\":\"\",\"City\":\"\",\"Region\":\"\",\"PostalCode\":\"63102\",\"DeliveryInstructions\":\"\"},\"AmountsBreakdown\":[],\"BusinessDate\":\"\",\"Coupons\":[],\"Currency\":\"USD\",\"CustomerID\":\"\",\"EstimatedWaitMinutes\":\"0\",\"Email\":\"chief@us.gov\",\"Extension\":\"\",\"FirstName\":\"Barack\",\"HotspotsLite\":false,\"IP\":null,\"LastName\":\"Obama\",\"LanguageCode\":\"en\",\"Market\":\"UNITED_STATES\",\"MetaData\":{\"calculateNutrition\":\"true\"},\"NewUser\":true,\"NoCombine\":true,\"OrderChannel\":\"OLO\",\"OrderID\":null,\"OrderInfoCollection\":[],\"OrderMethod\":\"Web\",\"OrderTaker\":\"node-dominos-pizza-api\",\"Partners\":{},\"Payments\":[],\"Phone\":\"1-800-555-2368\",\"PriceOrderTime\":\"\",\"Promotions\":{\"Redeemable\":[],\"Valid\":[]},\"ServiceMethod\":\"Carryout\",\"SourceOrganizationURI\":\"order.dominos.com\",\"StoreID\":7981,\"Tags\":{},\"UserAgent\":\"node-fetch/1.0 (+https://github.com/bitinn/node-fetch)\",\"Version\":\"1.0\",\"Status\":1,\"StatusItems\":null,\"metaData\":{\"prop65Warning\":true},\"Products\":[{\"ID\":4,\"Code\":\"14SCREEN\",\"Qty\":1,\"CategoryCode\":\"Pizza\",\"FlavorCode\":\"HANDTOSS\",\"Status\":0,\"LikeProductID\":0,\"Name\":\"Large (14\\\") Hand Tossed Pizza\",\"IsNew\":true,\"NeedsCustomization\":false,\"AutoRemove\":false,\"Fulfilled\":false,\"Tags\":{},\"Options\":{\"C\":{\"1/1\":\"2\"}},\"descriptions\":[{\"portionCode\":\"1/1\",\"value\":\"Double Cheese, Robust Inspired Tomato Sauce\"}]}]},\"Status\":1,\"Offer\":{\"CouponList\":[],\"ProductOffer\":\"\"},\"EmailHash\":null,\"StatusItems\":[{\"Code\":\"Warning\"}]}";

        const cheesePizza=new Item(
            {
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
        
        //sanitize this because if the tests are done when the store is closed payloads will not match
        order.validationResponse.Order.StatusItems=null;
        
        //if you need to compare the objects because something is wonky
        // console.log(order.validationResponse)
        // console.log(JSON.parse(expectsJSON))

        const sanitizedResponse=JSON.stringify(order.validationResponse);
        
        //get sanitized JSON
        //console.log(JSON.stringify(sanitizedResponse));
        
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

    await failValidateCheesePizza(test);
    await validateCheesePizza(test);
}

export {
    runTest as default,
    runTest
}