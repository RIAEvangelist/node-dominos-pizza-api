Domino's Pizza API
====
This is a node.js API for integrating with the Domino's pizza APIs.
[See the pretty Domino's Pizza API documentation](http://riaevangelist.github.io/node-dominos-pizza-api/)

npm dominos info :  [See npm trends and stats for dominos](http://npm-stat.com/charts.html?package=dominos&author=&from=&to=)  
[![Package Quality](http://npm.packagequality.com/badge/dominos.png)](http://packagequality.com/#?package=dominos)  
![dominos npm version](https://img.shields.io/npm/v/dominos.svg) ![supported node version for dominos api](https://img.shields.io/node/v/dominos.svg) ![total npm downloads for dominos](https://img.shields.io/npm/dt/dominos.svg) ![monthly npm downloads for dominos](https://img.shields.io/npm/dm/dominos.svg) ![npm licence for dominos](https://img.shields.io/npm/l/dominos.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub info :
[![node-dominos-pizza-api GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-dominos-pizza-api.svg) ![GitHub license node-dominos-pizza-api license](https://img.shields.io/github/license/RIAEvangelist/node-dominos-pizza-api.svg) ![open issues for node-dominos-pizza-api on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-dominos-pizza-api.svg)](http://riaevangelist.github.io/node-dominos-pizza-api/)

---

This work is licenced via the [MIT Licence](http://www.dbad-license.org/). It is a derivative work from Dominos API.

Install the [Dominos](https://www.npmjs.com/package/dominos) pizza api
====

` npm i dominos `

Contributing
====

1. Pull or Fork code.
2. From the cloned directory run ` npm i ` (this will install required dependancies, depending on your system may require)
3. Be awesome!


Examples
====

You can run the domino's pizza command line interface from your terminal just by running ` npm start `! See the example in the examples directory.

See the examples directory for simple apps and demonstrations on using the basic functionality.


Testing
====
For testing we have started using the extremely light `vanilla-test` testing suite. It is a pretty bare bones testing framework, but it works really well and simply with native ES6 and ESM.

Simply run ` npm test `

This will setup everything that is needed to run the tests, install the modules required and run the tests for you.

---

International Support
====

Provided a country uses the same api as the US, you can just update the URL endpoints from the url ESM.

See the various [International Dominos Endpoints and how to use them](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/InternationalSupport.md)



Address
====
Address is constructed `async`, so when you instantiate it, you should await it, like this : ` const address = await new Address(String)` this will work in your main node code without wrapping it in an anonymous async function.

You can see the full `Address` documentation [in the dominos pizza Address.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md). 

|argument|type                  |required|default|
|--------|------                |--------|-------|
|address |AddressObject / String|true    |       |

|member/method|type  |writeable|default|description|
|-------------|------|---    |---      |-------    |
|.dominos     |Object|No     |         |Address formatted the dominos API likes it|
|.type        |String|Yes    |'Home'   |dominos address type, defaults to Home|
|.street      |String|Yes    |         |street address|
|.city        |String|Yes    |         |address city|
|.region      |String|Yes    |         |in the US this would be the state. In other countries it may be the province or prefecture|
|.postalCode  |String|Yes    |         |address postal or zip code|
|.addressLines|Object|No     |         |{line1,line2} formatted address lines as best as possible with the information provided for the address.|

#### AddressObject

Instead of passing an address string when initing the Address class (which needs to be parsed and can be comlicated), you can instead collect the address information and format it into an AddressObject. Dominos will try to figure the address out from any combination of address parts. None of these fields are required, but you should atleast provide enough information for Dominos to figure out the general location.

```js

  const addressObject={
      street:'900 Clark Ave',
      city:'St. Louis',
      region:'MO',
      postalCode:'63102'
  }

```

#### Full and Partial Address Instantiation

The Address class will do its best to parse an AddressString into an AddressObject, and/or massage the AddressObject into a dominos api formatted Address. 

```js

  import {Address} from 'dominos';

  //full address examples
  const address = new Address(
      {
          street:'900 Clark Ave',
          city:'St. Louis',
          region:'MO',
          postalCode:'63102'
      }
  );

  const address=new Address('900 Clark Ave, St. Louis, MO, 63102');  



  //zip only examples
  const fullAddressObject = new Address(
      {
          postalCode:'63102'
      }
  );

  const onlyZip = new Address('63102');

```

#### `address.dominos` Dominos API Formatted Address

Dominos API uses pascal case for the Address object, we convert the values set to the other members of the address object to conform to the Dominos spec here. 

```js

dominos={
        Type:'House',
        Street:'',
        City:'',
        Region:'',
        PostalCode:''
    }

```

---

NearbyStores for Finding Stores
====

|argument |type                         |default|description|
|-------- |----                         |-------|--------|
|address  |AddressObject / AddressString|       |anything that could be passed to the `Address` class|
|type     |String                       |all    |`Delivery`, `Carryout`, `all`|

You can see the full NearbyStores documentation [in the dominos pizza NearbyStores.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/NearbyStores.md). 

### By PostalCode
***this yields a wide variety of stores*** because it is not a very specific address. To find stores closer to you (or your user), use a more specific address.

You can see the all the ways to pass an address [in the dominos pizza Address.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md).

```javascript

  import {NearbyStores} from 'dominos';

  const nearbyStores=await new NearbyStores(
    '63102',
    'Delivery'
  );

  console.log(nearbyStores.stores);

```

`nearbyStores.stores` is automatically populated from the dominos API when the class is instantiated. It is an `Array` of basic Store information. This info can be used as is, or you can create a `new Store(StoreID)` to get even more detailed information on the Store and its Menu as well.

```js

  [
      {
        StoreID: '1605',
        IsDeliveryStore: false,
        Phone: '314-421-3030',
        AddressDescription: '1430 N. 13th\n' +
          'St. Louis, MO 63106\n' +
          'On the  corner of Cass Ave and N 13th Street.',
        HolidaysDescription: '',
        HoursDescription: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
        ServiceHoursDescription: {
          Carryout: 'Su-Sa 10:30am-10:00pm',
          Delivery: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
          DriveUpCarryout: 'Su-Sa 10:30am-9:00pm'
        },
        IsOnlineCapable: true,
        IsOnlineNow: true,
        IsNEONow: true,
        IsSpanish: true,
        LocationInfo: 'On the  corner of Cass Ave and N 13th Street.',
        LanguageLocationInfo: {
          en: 'On the  corner of Cass Ave and N 13th Street.',
          es: 'On the  corner of Cass Ave and N 13th Street.'
        },
        AllowDeliveryOrders: true,
        AllowCarryoutOrders: true,
        AllowDuc: true,
        ServiceMethodEstimatedWaitMinutes: { Delivery: [Object], Carryout: [Object] },
        StoreCoordinates: { StoreLatitude: '38.6405', StoreLongitude: '-90.1942' },
        AllowPickupWindowOrders: false,
        ContactlessDelivery: 'REQUIRED',
        ContactlessCarryout: 'INSTRUCTION',
        IsOpen: false,
        ServiceIsOpen: { Carryout: false, Delivery: false, DriveUpCarryout: false }
      },
      {
        StoreID: '1524',
        ...
  ]

```

---

Store
====

Store is constructed `async`, so when you instantiate it, you should await it, like this : ` const store = await new Store(Number)` this will work in your main node code without wrapping it in an anonymous async function.

You can see the full `Store` documentation [in the dominos pizza Store.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Store.md). 

|argument|type  |required|default|
|--------|------|--------|-------|
|id      |Number|true    |       |
|lang    |String|false   |'en'   |

|member/method|type  |description|
|-------------|------|-----------|
|.info        |Object|Detailed Store Information|
|.menu        |Object|Store Menu |

```js

  import {Store} from '../../index.js';
  
  //Get Store Info for Store #4332
  const store=await new Store(4332);

```

#### `store.info` Detailed Information About the Store

`store.info` gives us a wealth of information about the store we can use. This information is populated from the dominos api when the instance is instantiated.

You can see the full `.info` object and documentation [in the dominos pizza Store.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Store.md)

```js

  import {Store} from 'dominos';
  
  //Get Store Info for Store #4332
  const store=await new Store(4332);

  //depth 0 makes it so we only show the base level of the object
  //its really big
  console.dir(store.info,{depth:0});

```

```js

{
  StoreID: '4332',
  BusinessDate: '2021-01-11',
  PulseVersion: '6.89.477',
  PulseVersionName: '3.89',
  PreferredLanguage: 'en-US',
  PreferredCurrency: 'USD',
  Phone: '703-799-3030',
  StreetName: '7732c Richmond Hwy',
  City: 'Alexandria',
  Region: 'VA',
  PostalCode: '22306',
  AddressDescription: '7732c Richmond Hwy\n' +
    'Alexandria, VA 22306\n' +
    "Please don't forget to tip your driver for being awesome!",
  TimeZoneCode: 'GMT-05:00',
  TimeZoneMinutes: -300,
  IsAffectedByDaylightSavingsTime: false,
  Holidays: {},
  HolidaysDescription: '',
  Hours: [Object],
  HoursDescription: 'Su-Th 10:00am-12:00am\nFr-Sa 10:00am-1:00am',
  ServiceHours: [Object],
  ServiceHoursDescription: [Object],
  CustomerCloseWarningMinutes: 30,
  AcceptablePaymentTypes: [Array],
  AcceptableCreditCards: [Array],
  IsOnlineCapable: true,
  LocationInfo: "Please don't forget to tip your driver for being awesome!",
  LanguageLocationInfo: [Object],
  MinimumDeliveryOrderAmount: 13.98,
  CashLimit: 50,
  IsForceOffline: false,
  IsOnlineNow: true,
  IsForceClose: false,
  IsOpen: false,
  OnlineStatusCode: 'Ok',
  StoreAsOfTime: '2021-01-11 01:21:21',
  AsOfTime: '2021-01-11 01:22:33',
  IsNEONow: false,
  IsSpanish: true,
  AllowCarryoutOrders: true,
  AllowDeliveryOrders: true,
  Status: 0,
  AcceptableWalletTypes: [Array],
  SocialReviewLinks: [Object],
  IsAVSEnabled: true,
  Pop: true,
  LanguageTranslations: [Object],
  StoreLocation: [Object],
  DriverTrackingSupported: 'true',
  IsCookingInstructionsEnabled: false,
  IsSaltWarningEnabled: false,
  DriverTrackingSupportMode: 'NOLO_VISIBLE',
  StoreName: '',
  AllowDineInOrders: false,
  EstimatedWaitMinutes: '15-25',
  StoreCoordinates: [Object],
  Upsell: {},
  AcceptableTipPaymentTypes: [Array],
  FutureOrderDelayInHours: 1,
  FutureOrderBlackoutBusinessDate: '2021-01-11',
  StoreEndTimeEvenSpansToNextBusinessDay: '2021-01-11 23:59:00',
  ecomActive: true,
  AllowSmsNotification: true,
  HasKiosk: false,
  IsTippingAllowedAtCheckout: true,
  AlternatePaymentProcess: false,
  AcceptAnonymousCreditCards: true,
  Tokenization: true,
  AcceptGiftCards: true,
  AcceptSavedCreditCard: true,
  AllowCardSaving: true,
  AllowPickupWindowOrders: false,
  IsAllergenWarningEnabled: false,
  AllowAutonomousDelivery: false,
  AllowDriverPooling: false,
  AdvDelDash: false,
  SaltWarningInfo: null,
  MarketPaymentTypes: [],
  CarryoutWaitTimeReason: null,
  DeliveryWaitTimeReason: null,
  RawPaymentGateway: '1',
  AllowDuc: true,
  AllowRemoteDispatch: false,
  AllowPiePass: true,
  IsDriverSafetyEnabled: false,
  StoreVariance: null,
  ContactlessDelivery: 'REQUIRED',
  ContactlessCarryout: 'INSTRUCTION',
  AllowDynamicDeliveryFees: false,
  SmartRunEnabled: false,
  RequireMaskInStore: false,
  AllowHotspotLiteOrders: false,
  TargetedOffers: [Object],
  NoCarryoutOrdersUntil: '2000-01-01 00:00:00',
  NoDeliveryOrdersUntil: '2000-01-01 00:00:00',
  NoHotspotLiteOrdersUntil: '2100-01-01 00:00:00',
  GeofenceRadiusMeters: 100,
  CarsideTippingEnabled: false,
  ServiceMethodEstimatedWaitMinutes: [Object]
}

```

### store.menu

`store.menu` provides ***HUGE*** amounts of menu data and has information for ***everything*** on the store's menu. This information is populated from the dominos api when the instance is instantiated.

You can see the full menu object  and documentation [in the dominos pizza Menu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Menu.md). 

```js

  import {Store} from 'dominos';
  
  //Get Store Info for Store #4332
  const store=await new Store(4332);

  //depth 0 makes it so we only show the base level of the object
  //its really big
  console.dir(store.info,{depth:0});

```

```js

{
  Misc: [Object],
  Categorization: [Object],
  Coupons: [Object],
  Flavors: [Object],
  Products: [Object],
  Sides: [Object],
  Sizes: [Object],
  Toppings: [Object],
  Variants: [Object],
  PreconfiguredProducts: [Object],
  ShortProductDescriptions: [Object],
  ShortCouponDescriptions: [Object],
  CouponTiers: [Object],
  UnsupportedProducts: [Object],
  UnsupportedOptions: [Object],
  CookingInstructions: [Object],
  CookingInstructionGroups: [Object]
}

```

---

Customer
===

|argument|type|default|
|--------|----|-------|
|address|Address|null|
|firstName|String|''|
|lastName|String|''|
|email|String|''|
|phone|String|''|

---

```javascript

  var customer = new Customer(
      {
          address: someAddressObj,
          firstName: 'Barack',
          lastName: 'Obama',
          phone: '1-800-The-White-House',
          email: 'br'
      }
  )

```
---

Item
====
You can get the codes from one of the menu requests.

|argument|type|default|
|--------|----|-------|
|code|String|null|
|quantity|Integer|1|
|options|Array|[]|

```javascript

  var newItem = new Item(
    {
        code: '14SCREEN'
    }
  );
  //and so on...

```
---

Order
====

This is the class that every other class feeds into.

|argument|type|default|
|--------|----|-------|
|code|String|null|
|quantity|Integer|1|
|options|Array|[]|

### creating an order

```javascript

  var pizza = require('dominos');

  var thePresident = new pizza.Customer(
      {
          firstName: 'Barack',
          lastName: 'Obama',
          address: '1600 Pennsylvania Avenue, Washington, DC',
          email: 'barack@whitehouse.gov'
      }
  );

  var order = new pizza.Order(
      {
          customer: thePresident,

          //optional set the store ID right away
          storeID: myStore.ID,

          deliveryMethod: 'Delivery' //(or 'Carryout')
      }
  );

  //or

  var order = new pizza.Order();

  order.FirstName = data;
  order.LastName = data;
  order.Email = data;
  order.Phone = data;

  //and if you want to update the store id just :

  order.StoreID = myStore.ID;

```

### duplicating an order

```javascript

  var anotherIdenticalOrder = new pizza.Order(
      {
          order:order
          //or
          //Order:order
          //because domino's pizza web API returns pascal case...
      }
  );

  //or create a duplicate order WITH different customer params

  var order = new pizza.Order(
      {
          customer: thePresident,
          deliveryMethod: 'Delivery' //(or 'Carryout')
      }
  );

```

### Adding a product to the order :

```javascript

  order.addItem(
      new pizza.Item(
          {
              code: '14SCREEN',
              options: [],
              quantity: 1
          }
      )
  );

```

### Validating an Order
This step is **Strongly** recommended

```javascript

  order.validate(
      function(result) {
          console.log("We did it!");
      }
  );

```

### Price an Order

```javascript

  order.price(
      function(result) {
          console.log("Price!")
      }
  );

```

### Place an Order
At least one item must've been added to place an order.

#### with payment allowed
You don't have to do anything for the payment, Domino's Pizza will handle all transactions.

```javascript

  var pizza = require('dominos');

  var cardNumber = '4100123422343234';

  var cardInfo = new order.PaymentObject();
  cardInfo.Amount = order.Amounts.Customer;
  cardInfo.Number = cardNumber;
  cardInfo.CardType = order.validateCC(cardNumber);
  cardInfo.Expiration = '0115';//  01/15 just the numbers "01/15".replace(/\D/g,'');
  cardInfo.SecurityCode = '777';
  cardInfo.PostalCode = '90210'; // Billing Zipcode

  order.Payments.push(cardInfo);

  order.place(
      function(result) {
          console.log("Order placed!");
      }
  );

```

---

Tracking
====

### By Phone

|argument|type|default|required|
|--------|----|-------|--------|
|phone|Phone number string or int|null|true|
|callback|function to pass the api result to|null|true|

```javascript

  var pizza = require('dominos'); 

  pizza.Track.byPhone(
      2024561111,
      function(pizzaData){
          console.log(pizzaData);
      }
  );

```

### By orderKey

|argument|type|default|required|
|--------|----|-------|--------|
|orderKey|string or int|null|true|
|storeID|sting or int|null|true|
|callback|function to pass the api result to|null|true|

```javascript

  var pizza = require('dominos'); 

  pizza.Track.byId(
      123456,
      12345,
      function(pizzaData){
          console.log(pizzaData)
      }
  );

```

Code, Order, Eat, Be Happy!
