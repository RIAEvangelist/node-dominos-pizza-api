Order
====


Constructor
====

`new Order()`

|argument|type  |required|description|
|--------|------|--------|-------|


Instance
====

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

console.dir(order,{depth:2});


///expected output


Order {
  address: Address {
    street: '900 Clark Ave',
    streetNumber: '',
    streetName: '',
    unitType: '',
    unitNumber: '',
    city: '',
    region: '',
    postalCode: '63102',
    deliveryInstructions: ''
  },
  amounts: {},
  amountsBreakdown: [],
  businessDate: '',
  coupons: [],
  currency: '',
  customerID: '',
  estimatedWaitMinutes: '',
  email: 'chief@us.gov',
  extension: '',
  firstName: 'Barack',
  lastName: 'Obama',
  languageCode: 'en',
  market: '',
  metaData: {},
  newUser: true,
  noCombine: true,
  orderChannel: 'OLO',
  orderID: '',
  orderMethod: 'Web',
  orderTaker: null,
  partners: {},
  payments: [],
  phone: '1-800-555-2368',
  priceOrderTime: '',
  products: [ 
    Item { 
      code: '14SCREEN', 
      qty: 1, 
      options: {
        X: {'1/1' : '1'}, 
        C: {'1/1' : '2'}
      } 
    } 
  ],
  serviceMethod: 'Delivery',
  sourceOrganizationURI: 'order.dominos.com',
  storeID: '',
  tags: {},
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

console.dir(order.validationResponse,{depth:5});



//Expected response


{
  Order: {
    Address: {
      Street: '1 alvarado st',
      StreetNumber: '',
      StreetName: '',
      UnitType: '',
      UnitNumber: '',
      City: '',
      Region: '',
      PostalCode: '93940',
      DeliveryInstructions: ''
    },
    AmountsBreakdown: [],
    BusinessDate: '',
    Coupons: [],
    Currency: 'USD',
    CustomerID: '',
    EstimatedWaitMinutes: '0',
    Email: 'chief@us.gov',
    Extension: '',
    FirstName: 'Barack',
    HotspotsLite: false,
    LastName: 'Obama',
    LanguageCode: 'en',
    Market: 'UNITED_STATES',
    MetaData: {},
    NewUser: true,
    NoCombine: true,
    OrderChannel: 'OLO',
    OrderID: 'lH49m_GKWnsZoLtbUBpo',
    OrderMethod: 'Web',
    Partners: {},
    Payments: [],
    Phone: '1-800-555-2368',
    PriceOrderTime: '',
    ServiceMethod: 'Carryout',
    SourceOrganizationURI: 'order.dominos.com',
    StoreID: 7981,
    Tags: {},
    Version: '1.0',
    IP: '99.43.15.137',
    UserAgent: 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    Promotions: { Redeemable: [], Valid: [] },
    Status: 1,
    StatusItems: [
      { Code: 'AutoAddedOrderId' },
      { Code: 'PriceInformationRemoved' }
    ],
    metaData: { prop65Warning: true },
    Products: [
      {
        ID: 9360365,
        Code: '14SCREEN',
        Qty: 1,
        CategoryCode: 'Pizza',
        FlavorCode: 'HANDTOSS',
        Status: 0,
        LikeProductID: 0,
        Name: 'Large (14") Hand Tossed Pizza',
        IsNew: false,
        NeedsCustomization: false,
        AutoRemove: false,
        Fulfilled: false,
        Tags: {},
        Options: { C: { '1/1': '2' } },
        descriptions: [
          {
            portionCode: '1/1',
            value: 'Double Cheese, Robust Inspired Tomato Sauce'
          }
        ]
      }
    ]
  },
  Status: 1,
  Offer: { CouponList: [], ProductOffer: '' },
  EmailHash: null,
  StatusItems: [ { Code: 'Warning' } ]
}

```