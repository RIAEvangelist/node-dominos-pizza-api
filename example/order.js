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
            C: {'1/1' : '2'},
            //pepperoni, whole pizza : double 
            P: {'1/2' : '2'}
        }
    }
);

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '1 Alvarado st., 93940',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

let storeID=0;
let distance=100;
//find the nearest store
const nearbyStores=await new NearbyStores(customer.address);
//get closest delivery store
for(const store of nearbyStores.stores){
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
        console.log(store)
    }
}


//create
const order=new Order(customer);

// console.log('Instance');
// console.dir(order,{depth:0});

order.storeID=storeID;
// add pizza
order.addItem(pizza);
//validate order
await order.validate();

// console.log('Validate');
console.dir(order,{depth:3});

//price order
await order.price();

console.log('Price');
console.dir(order,{depth:0});

//grab price from order and setup payment
const myCard=new Payment(
    {
        amount:order.amountsBreakdown.customer,
        
        // dashes are not needed, they get filtered out
        number:'4100-1234-2234-3234',
        
        //slashes not needed, they get filtered out
        expiration:'01/35',
        securityCode:'867',
        postalCode:'93940'
    }
);

order.payments.push(myCard);

//place order

try{
    //will throw a dominos error because
    //we used a fake credit card
    await order.place();

    // console.log('Placed Order');
    console.dir(order,{depth:3});
}catch(err){
    console.trace(err);

    //inspect Order Response to see more information about the 
    //failure, unless you added a real card, then you can inspect
    //the order itself
    console.log('Failed Order Probably Bad Card, here is order.priceResponse the raw response from Dominos');
    console.dir(
        order.placeResponse,
        {depth:5}
    );
}