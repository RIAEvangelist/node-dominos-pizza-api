# Using Dominos in CommonJS

CommonJS normally uses `require` to include modules, but because `dominos` is an ES6 `ESM` module, you will need to load it async with the dynamic `import` function. This is essentially an async version of require.

# Basic CommonJS Dominos Example

```js

(async () => {
    const dominos=await import('dominos');

    //importing variables into the global like this just allows us to use the same code
    //from the ESM implementation for the commonJS implementation
    //This is the same as an ESM import of
//import {Address,NearbyStores,Store,Menu,Customer,Item,Image,Order,Payment,Tracking,urls,IsDominos} from 'dominos'

    Object.assign(global,dominos);

    //need to await dominos promise completion
    //because ES6 is async by nature
    start();
})()

function start(){
    //any of the ESM examples from the other docs will work as is here
    //because we mimiced an ESM import above.
     
    const n='\n';
    console.log(
        n,
        Address,n,
        NearbyStores,n,
        Store,n,
        Menu,n,
        Customer,n,
        Item,n,
        Image,n,
        Order,n,
        Payment,n,
        Tracking,n,
        urls,n,
        IsDominos,n
    );
}


```


# Complete CommonJS Dominos Order Example

```js


(async () => {
    const dominos=await import('dominos');

    //importing variables into the global like this just allows us to use the same code
    //from the ESM implementation for the commonJS implementation
    //This is the same as an ESM import of
//import {Address,NearbyStores,Store,Menu,Customer,Item,Image,Order,Payment,Tracking,urls,IsDominos} from 'dominos'

    Object.assign(global,dominos);

    //need to await dominos promise completion
    //because ES6 is async by nature
    orderPizza();
})()


//start app from a function instead of
//in the global scope
function orderPizza(){


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //Everything in here is the same 
    //as the ESM code in the main readme 
    //TLDR; section
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


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
}


```