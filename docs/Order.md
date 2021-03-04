Order
====


Constructor
====

`new Order()`

|argument|type  |required|description|
|--------|------|--------|-------|


Instance
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/DominosFormat.md) as this class extends it.

|member/method|type  |description|
|-------------|------|-------    |



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
  address: Address {
    street: '1 alvarado st',
    ...
  },
  amounts: {},
  amountsBreakdown: AmountsBreakdown {
    foodAndBeverage: '0.00',
    ...
  },
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
  metaData: { calculateNutrition: 'true' },
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
  priceOrderMs:0,
  priceOrderTime: '',
  products: [ [Item], [Item] ],
  promotions: {},
  pulseOrderGuid: '',
  serviceMethod: 'Carryout',
  sourceOrganizationURI: 'order.dominos.com',
  storeID: 7981,
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
  address: Address {
    street: '1 alvarado st',
    streetNumber: '',
    streetName: '',
    unitType: '',
    unitNumber: '',
    city: '',
    region: '',
    postalCode: '93940',
    deliveryInstructions: ''
  },
  amounts: {},
  amountsBreakdown: AmountsBreakdown {
    foodAndBeverage: '0.00',
   ...
  },
  businessDate: '',
  coupons: [],
  currency: 'USD',
  customerID: '',
  estimatedWaitMinutes: '0',
  email: 'chief@us.gov',
  extension: '',
  firstName: 'Barack',
  hotspotsLite: false,
  iP: '13.68.241.114',
  lastName: 'Obama',
  languageCode: 'en',
  market: 'UNITED_STATES',
  metaData: { calculateNutrition: 'true' },
  newUser: true,
  noCombine: true,
  orderChannel: 'OLO',
  orderID: 'OA6HvkfOCJv3Yk2kNgOx',
  orderInfoCollection: [],
  orderMethod: 'Web',
  orderTaker: 'node-dominos-pizza-api',
  partners: {},
  payments: [],
  phone: '1-800-555-2368',
  priceOrderMs:0,
  priceOrderTime: '',
  products: [ [Item], [Item] ],
  promotions: { redeemable: [], valid: [] },
  pulseOrderGuid: '',
  serviceMethod: 'Carryout',
  sourceOrganizationURI: 'order.dominos.com',
  storeID: 7981,
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
  address: Address {
    street: '1 alvarado st',
    ...
  },
  amounts: {},
  amountsBreakdown: AmountsBreakdown {
    foodAndBeverage: '31.98',
    adjustment: '0.00',
    surcharge: '0.00',
    deliveryFee: '0.00',
    tax: 2.96,
    tax1: 2.96,
    tax2: 0,
    tax3: 0,
    tax4: 0,
    tax5: 0,
    bottle: 0,
    customer: 34.94,
    roundingAdjustment: 0,
    cash: 0,
    savings: '0.00'
  },
  businessDate: '2021-03-01',
  coupons: [],
  currency: 'USD',
  customerID: '',
  estimatedWaitMinutes: '9-19',
  ...
  priceOrderTime: '2021-03-01 20:50:37',
  ...
  pulseOrderGuid: '01961aa7-62eb-4ce5-acd9-408a37bd0001',
  priceOrderMs: 1003
}


```



