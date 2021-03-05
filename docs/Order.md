Order
====
This is the primary Order Class used for ordering Domnio's food!

If you have cloned this repo, you can run the example with this command:
`node ./example/order.js`

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/DominosFormat.md)


## Complete Order Example

Here is an example of a complete order process.


```js

import {Order,Customer,Item,Payment} from 'dominos';

//extra cheese thin crust pizza
const pizza=new Item(
    {
        code:'14THIN',
        options:{
            //sauce, whole pizza : normal
            X: {'1/1' : '1'}, 
            //cheese, whole pizza  : double 
            C: {'1/1' : '2'}
        }
    }
);

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '110 S Fairfax Ave, 90036',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

//create
const order=new Order(customer);
order.storeID=8244;
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
        postalCode:'93940'
    }
);

order.payments.push(myCard);

//place order
await order.place();

//inspect Order
console.dir(order,{depth:5});

//you probably want to add some tracking too...


```


Constructor
====

`new Order()`

|argument|type      |required|description|
|--------|------    |--------|-------|
|customer|[`Customer`](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/Customer.md)|yes|This is a dominos customer instance|

Instance
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/DominosFormat.md) as this class extends it.

|member/method  |type  |default|description|
|-------------  |------|-------|-----------|
|.address       |[Address](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/DominosFormat.md)||Address for customer|
|.amounts       |Object|   
|.amountsBreakdown|[AmountsBreakdown]()||populated by `order.price`, this is the break down of costs and taxes|
|.businessDate  |String||This is the date the order was created at the business.| 
|.coupons       |Array||This is an array of coupon codes.|
|.currency      |String||This is the currency for the order, lik `USD` it will be populated by dominos|
|.customerID    |String||If the customer has an ID set it here. Not tested, may work.|
|.estimatedWaitMinutes|String||Estimated wait time from when the order is placed and paid for.|
|.email         |String||Customer's email, pupulated when instantiated by the passed Customer Object|
|.extension 
|.firstName     |String||Customer's first name, pupulated when instantiated by the passed Customer Object|
|.hotspotsLite  
|.iP    
|.lastName      |String||Customer's last name, pupulated when instantiated by the passed Customer Object|
|.languageCode  
|.market    
|.metaData  
|.newUser  
|.noCombine 
|.orderChannel              'OLO'
|.orderID   
|.orderInfoCollection   
|.orderMethod               'Web'
|.orderTaker                'node-dominos-pizza-api'
|.partners  
|.payments  
|.phone         |String||Customer's phonenumber, pupulated when instantiated by the passed Customer Object|
|.priceOrderMs  
|.priceOrderTime    
|.products  
|.promotions    
|.pulseOrderGuid    
|.serviceMethod             'Delivery',
|.sourceOrganizationURI     'order.dominos.com'
|.storeID   
|.tags  
|.userAgent 
|.version                   '1.0'


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

import {Order,Customer,Item} from '../index.js';

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

import {Order,Customer,Item,Payment} from 'dominos';

//extra cheese thin crust pizza
const pizza=new Item(
    {
        code:'14THIN',
        options:{
            //sauce, whole pizza : normal
            X: {'1/1' : '1'}, 
            //cheese, whole pizza  : double 
            C: {'1/1' : '2'}
        }
    }
);

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

//create
const order=new Order(customer);
order.storeID=7981;
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
        postalCode:'93940'
    }
);

order.payments.push(myCard);

//place order
await order.place();

//inspect Order
console.dir(order,{depth:5});

//you probably want to add some tracking too...




// expected output


// will buy a pizza tomorrow and get the real info


```



