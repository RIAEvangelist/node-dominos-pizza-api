Order
====
This is the primary Order Class used for ordering Domino's food!

If you have cloned this repo, you can run the example with this command:
`node ./example/order.js`

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)


## Complete Order Example

Here is an example of a complete order process, including a single tracking check.


```js

import {Order,Customer,Item,Payment,NearbyStores} from 'dominos';

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


```


Constructor
====

`new Order()`

|argument|type      |required|description|
|--------|------    |--------|-------|
|customer|[`Customer`](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Customer.md)|yes|This is a dominos customer instance|


Instance Hidden Methods & Hidden Fields
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md) as this class extends it.


|Hidden Method Name |Params |Description|
|-----------------  |------ |-----------|
|.addCustomer       |[Customer Instance](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Customer.md)|This will populate all `Customer` fields on the `Order` Instance|
|.addCoupon         |String |This will add a coupon string to the coupons array|
|.removeCoupon      |String |This will find and remove a coupon string from the coupons array|
|.addItem           |[Item Instance](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Item.md)|This will sanitize and add a product `Item` to the `.products` array|
|.removeItem        |[Item Instance](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Item.md)|This will find and remove a product `Item` from the `.products` array|
|.orderInFuture     |Date   |Will set the order time to be in the future. Very useful when testing but stores are closed, or when you want to order things in the future.|
|.orderNow          |       |This will ensure an order is made now and not in the future. If you had previously used `.orderInFuture`, its date will be removed.|
|`async` .validate  |       |This will request dominos.com validate the current `Order` Instance.|
|`async` .price     |       |This will request dominos.com price the current `Order` Instance.|
|`async` .place     |       |This will place the order with dominos.com using the current `Order` Instance.|



|Hidden Field Name  |Type   |Description|
|-----------------  |----   |-----------|
|.payload           |JSON   |n/a   |
|.formatted         |Object |this comes from [DominosFormat Class](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md) but the setter is overloaded for special Dominos Order format|
|.validationResponse|Object|Validation Response Object from Dominos|
|.priceResponse     |Object|Price Response Object from Dominos|
|.placeResponse     |Object|Place Order Response Object from Dominos|

---

Instance Public Fields
====

|member/method  |type  |default|description|
|-------------  |------|-------|-----------|
|.address       |[Address](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md)||Address for customer|
|.amounts       |Object||? Not sure, if you figure it out, please contribute to this doc. We are just using what the website uses here. It may be legacy and could be removed.|   
|.amountsBreakdown|[AmountsBreakdown](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/AmountsBreakdown.md)||populated by `order.price`, this is the break down of costs and taxes|
|.businessDate  |String||This is the date the order was created at the business.| 
|.coupons       |Array||This is an array of coupon codes.|
|.currency      |String||This is the currency for the order, lik `USD` it will be populated by dominos|
|.customerID    |String||If the customer has an ID set it here. Not tested, may work.|
|.estimatedWaitMinutes|String||Estimated wait time from when the order is placed and paid for.|
|.email         |String||Customer's email, pupulated when instantiated by the passed Customer Object|
|.extension     |String||Phone extension|
|.firstName     |String||Customer's first name, pupulated when instantiated by the passed Customer Object|
|.hotspotsLite  |Boolean|false|? Not sure, if you figure it out, please contribute to this doc. We are just using what the website uses here. We are just using what the web uses here.|  
|.iP            |String||The IP where you are making requests from, dominos servers will auto populate this|
|.lastName      |String||Customer's last name, pupulated when instantiated by the passed Customer Object|
|.languageCode  |String|'en'|appears to be a 2 letter language code|  
|.market        |String||Dominos populates this based on where the order is happening.|
|.metaData      |Object||Dominos passes various important meta data objects here, like `prop65 warning` to let you know that pizza causes cancer in California... If you figure out more information on the list of things that can be passed back here, please contribute the information.|
|.newUser       |Boolean||? Not sure, if you figure it out, please contribute to this doc. We are just using what the website uses here.|
|.noCombine     |Boolean||? Not sure, if you figure it out, please contribute to this doc. We are just using what the website uses here.|
|.orderChannel  |String|'OLO'|This is what the dominos.com site passes... ? Not sure, if you figure it out, please contribute to this doc.|            
|.orderID       |String||The ID of the order, this seems to change even if passed to dominos. It gets auto populated apparently... ? Not sure, if you figure it out, please contribute to this doc.|
|.orderInfoCollection|Array||? Not sure, if you figure it out, please contribute to this doc.|   
|.orderMethod   |String|'Web'|This is how the dominos.com site passes this information, there could be other options, but we do not know them. ?If you figure it out, please contribute to this doc.|            
|.orderTaker    |String|'node-dominos-pizza-api'|? Perhaps the name of the person that took your order? Not sure, if you figure it out, please contribute to this doc.|            
|.partners      |Object||? Not sure, if you figure it out, please contribute to this doc.|
|.payments      |Array of [Payment Instances](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Payment.md)||This is how you pay for the order when you use the `.place` method.|
|.phone         |String||Customer's phonenumber, pupulated when instantiated by the passed Customer Object|
|.priceOrderMs  |Number||?Perhaps how long it took to complete the pricing? Not sure, if you figure it out, please contribute to this doc.|
|.priceOrderTime|String||The time when the order was priced by the `.price` method. This is provided by the dominos servers|
|.products      |Array of [Item Instances](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Item.md)||Your product items are sanitized and added here by the `.addProduct` method|
|.promotions    |Array||? Not sure, perhaps some special promotions, if you figure it out, please contribute to this doc.|
|.pulseOrderGuid|String||? populated by dominos.com and used by dominos|    
|.serviceMethod |String|'Delivery'|How you plan to get your pizza, `'Delivery'`/`'Carryout'`/`'DriveUpCarryout'`|
|.sourceOrganizationURI |String|'order.dominos.com'||    
|.storeID       |String/Number||Id for the store you wish to order from. get this through the [NearbyStores class](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)|
|.tags          |Object||? Not sure, if you figure it out, please contribute to this doc.|
|.userAgent     |String||Auto populated when requests are made. We use `node-fetch`|
|.version       |String|'1.0'|Dominos.com api version|        


### Creating An Order

```js

import {Order,Customer,Item} from 'dominos';

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '900 Clark Ave, 63102',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

const cheesePizza=new Item(
    {
        code:'14SCREEN',
        options:{
            //full pizza sauce
            X: {'1/1' : '1'}, 
            //full piza double cheese
            C: {'1/1' : '2'}
        }
    }
)

const order=new Order(customer);
order.addItem(cheesePizza);

await order.validate();

console.dir(order,{depth:1});


//expected output


Order {
  address: {Address},
  amounts: {},
  amountsBreakdown: {AmountsBreakdown},
  businessDate: '',
  coupons: [],
  currency: '',
  customerID: '',
  estimatedWaitMinutes: '',
  email: 'chief@us.gov',
  extension: '',
  firstName: 'Barack',
  hotspotsLite: false,
  iP: '',
  lastName: 'Obama',
  languageCode: 'en',
  market: '',
  metaData: [Object],
  newUser: true,
  noCombine: true,
  orderChannel: 'OLO',
  orderID: '',
  orderInfoCollection: [],
  orderMethod: 'Web',
  orderTaker: 'node-dominos-pizza-api',
  partners: {},
  payments: [],
  phone: '1-800-555-2368',
  priceOrderMs: 0,
  priceOrderTime: '',
  products: [],
  promotions: {},
  pulseOrderGuid: '',
  serviceMethod: 'Delivery',
  sourceOrganizationURI: 'order.dominos.com',
  storeID: '',
  tags: {},
  userAgent: '',
  version: '1.0'
}

```



### Validating Order

```js

import {Order,Customer,Item} from 'dominos';

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '900 Clark Ave, 63102',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

const cheesePizza=new Item(
    {
        code:'14SCREEN',
        options:{
            //full pizza sauce
            X: {'1/1' : '1'}, 
            //full piza double cheese
            C: {'1/1' : '2'}
        }
    }
)

const order=new Order(customer);
order.addItem(cheesePizza);

await order.validate();

console.dir(order,{depth:1});



//Expected outpuut


Order {
  address: {
    street: '110 S Fairfax Ave',
    streetNumber: '110',
    streetName: 'S FAIRFAX AVE',
    unitType: '',
    unitNumber: '',
    city: '',
    region: '',
    postalCode: '90036',
    deliveryInstructions: '',
    countyName: 'LOS ANGELES',
    countyNumber: '037'
  },
  amounts: {},
  amountsBreakdown: {AmountsBreakdown},
  businessDate: '',
  coupons: [],
  currency: 'USD',
  customerID: '',
  estimatedWaitMinutes: '0',
  email: 'chief@us.gov',
  extension: '',
  firstName: 'Barack',
  hotspotsLite: false,
  iP: '52.240.57.25',
  lastName: 'Obama',
  languageCode: 'en',
  market: 'UNITED_STATES',
  metaData: [Object],
  newUser: true,
  noCombine: true,
  orderChannel: 'OLO',
  orderID: 'vwfapIKoJ9-24rkVlO29',
  orderInfoCollection: [],
  orderMethod: 'Web',
  orderTaker: 'node-dominos-pizza-api',
  partners: {},
  payments: [],
  phone: '1-800-555-2368',
  priceOrderMs: 0,
  priceOrderTime: '',
  products: [Array],
  promotions: {Object},
  pulseOrderGuid: '',
  serviceMethod: 'Delivery',
  sourceOrganizationURI: 'order.dominos.com',
  storeID: 8244,
  tags: {},
  userAgent: 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
  version: '1.0',
  status: 1
}


```




### Pricing an Order

```js

import {Order,Customer,Item} from 'dominos';

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '1 alvarado st, 93940',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

const cheesePizza=new Item(
    {
        code:'14SCREEN',
        options:{
            X: {'1/1' : '1'}, 
            C: {'1/1' : '1'}
        }
    }
)

const extraCheesePizza=new Item(
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
order.addItem(extraCheesePizza);

await order.validate();
await order.price();

console.dir(order,{depth:1});



// expected output


Order {
  address: {Address},
  amounts: {},
  amountsBreakdown: {
    foodAndBeverage: '15.99',
    adjustment: '0.00',
    surcharge: '0.00',
    deliveryFee: '4.99',
    tax: 1.99,
    tax1: 1.99,
    tax2: 0,
    tax3: 0,
    tax4: 0,
    tax5: 0,
    bottle: 0,
    customer: 22.97,
    roundingAdjustment: 0,
    cash: 0,
    savings: '0.00'
  },
  businessDate: '2021-03-04',
  coupons: [],
  currency: 'USD',
  customerID: '',
  estimatedWaitMinutes: '26-36',
  email: 'chief@us.gov',
  extension: '',
  firstName: 'Barack',
  hotspotsLite: false,
  iP: '52.240.57.25',
  lastName: 'Obama',
  languageCode: 'en',
  market: 'UNITED_STATES',
  metaData: {Object},
  newUser: true,
  noCombine: true,
  orderChannel: 'OLO',
  orderID: 'vwfapIKoJ9-24rkVlO29',
  orderInfoCollection: [],
  orderMethod: 'Web',
  orderTaker: 'node-dominos-pizza-api',
  partners: {},
  payments: [],
  phone: '1-800-555-2368',
  priceOrderMs: 1452,
  priceOrderTime: '2021-03-05 01:43:14',
  products: [Array],
  promotions: {Object},
  pulseOrderGuid: 'b802d070-8aff-4a8e-bd51-835ead079c34',
  serviceMethod: 'Delivery',
  sourceOrganizationURI: 'order.dominos.com',
  storeID: 8244,
  tags: {},
  userAgent: 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
  version: '1.0',
  status: 1
}


```


### Placing an Order

```js

import {Order,Customer,Item,Payment,NearbyStores} from 'dominos';

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

//get closest delivery store
for(const store of nearbyStores.stores){
    if(
        store.IsOnlineCapable 
        && store.IsDeliveryStore
        && store.IsOpen
        && store.ServiceIsOpen.Delivery
        && store.MinDistance<distance
    ){
        distance=store.MinDistance;
        storeID=store.StoreID;
    }
}

if(storeID==0){
    throw ReferenceError('No Open Stores');
}

//create
const order=new Order(customer);

order.storeID=storeID;
// add pizza
order.addItem(pizza);
//validate order
await order.validate();

//price order
await order.price();

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
    await order.place();

    console.log('/n/nPlaced Order/n/n');
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




// expected output


// will buy a pizza tomorrow and get the real info


```



