import {Order,Customer,Item,Payment,NearbyStores} from '../index.js';

//extra cheese thin crust pizza
const pizza=new Item(
    {
        //16 inch hand tossed crust
        code:'16SCREEN',
        options:{
            //sauce, whole pizza : normal
            X: {'1/1' : '1'}, 
            //cheese, whole pizza  : double 
            C: {'1/1' : '1.5'},
            //pepperoni, half pizza : double 
            P: {'1/2' : '1.5'}
        }
    }
);

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '2 Portola Plaza, Monterey, Ca, 93940',
        firstName: 'Brandon',
        lastName: 'Miller',
        //where's that 555 number from?
        phone: '941-555-2368',
        email: 'brandon@diginow.it'
    }
);

let storeID=0;
let distance=100;
//find the nearest store
const nearbyStores=await new NearbyStores(customer.address);
//inspect nearby stores
//console.log('\n\nNearby Stores\n\n')
//console.dir(nearbyStores,{depth:5});


//get closest delivery store
for(const store of nearbyStores.stores){
    //inspect each store
    //console.dir(store,{depth:3});
    
    if(
        //we check all of these because the API responses seem to say true for some
        //and false for others, but it is only reliably ok for delivery if ALL are true
        //this may become an additional method on the NearbyStores class.
        store.IsOnlineCapable 
        && store.IsDeliveryStore
        && store.IsOpen
        && store.ServiceIsOpen.Delivery
        && store.MinDistance<distance
    ){
        distance=store.MinDistance;
        storeID=store.StoreID;
        //console.log(store)
    }
}

if(storeID==0){
    throw ReferenceError('No Open Stores');
}

//console.log(storeID,distance);


//create
const order=new Order(customer);

// console.log('\n\nInstance\n\n');
// console.dir(order,{depth:0});

order.storeID=storeID;
// add pizza
order.addItem(pizza);
//validate order
await order.validate();

// console.log('\n\nValidate\n\n');
//console.dir(order,{depth:3});

//price order
await order.price();

// console.log('\n\nPrice\n\n');
// console.dir(order,{depth:0});

//grab price from order and setup payment
const myCard=new Payment(
    {
        amount:order.amountsBreakdown.customer,
        
        // dashes are not needed, they get filtered out
        number:'4100-1234-2234-3234',
        
        //slashes not needed, they get filtered out
        expiration:'01/35',
        securityCode:'867',
        postalCode:'93940',
        tipAmount:4
    }
);

order.payments.push(myCard);

//place order

try{
    //will throw a dominos error because
    //we used a fake credit card
    await order.place();

    console.log('\n\nPlaced Order\n\n');
    console.dir(order,{depth:3});

    const tracking=new Tracking();

    const trackingResult=await tracking.byPhone(customer.phone);

    //inspect the tracking info
    console.log('\n\nOrder Tracking\n\n');
    console.dir(trackingResult,{depth:3});

    console.log('\n\nThis could easily be put in an interval to check for updated status.\n\n');
}catch(err){
    console.trace(err);

    //inspect Order Response to see more information about the 
    //failure, unless you added a real card, then you can inspect
    //the order itself
    console.log('\n\nFailed Order Probably Bad Card, here is order.priceResponse the raw response from Dominos\n\n');
    console.dir(
        order.placeResponse,
        {depth:5}
    );
}