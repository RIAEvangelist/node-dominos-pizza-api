Tracking
====
This is how to track an order / orders progress. There are a couple ways to do it, but the most common way is `.byPhone`.

Rely on the `order.place` response as well. If the order fails, it will throw a `DominosPlaceOrderError`. Otherwise, your pizza is on the way. 

You can track its progress, who is working on it, who your delivery person is, and how many stops they have before you using this Class.

If there are no orders for a given phone number, it will throw a `DominosTrackingError`.

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)

---
Constructor
====

`new Tracking()`

Instance Methods
====

|member/method  |params         |description|
|-------------  |------         |-------    |
|.byPhone       |phone/string   | fetches all trackable orders for a given phone number |
|.byPhoneClassic|phone/string   | classic implementation which fetches a soap response. This is still used in places like canada. *Not stable, may need contribution |
|.byID          |storeID, orderKey| fetches a specific orders tracking info from a specific store |
|.byURL         |url/string     | fetches all orders for a specific url query |

---
Hidden Instance Methods
====

|member/method  |params         |description|
|-------------  |------         |-------    |
|.dominosPhoneAPIResponse|phone/string   | Raw dominos response with phone related data and path to tracking|
|.dominosAPIResponse| Raw dominos tracking data |

---
Public Instance Members
====

needs to be fleshed out, for now see the response below in the example.

|member/method  |description|
|-------------  |-------    |
|.version||
|.asOfTime||
|.storeAsOfTime||
|.storeID||
|.orderID||
|.pulseOrderGuid||
|.phone||
|.serviceMethod||
|.advancedOrderTime||
|.orderDescription||
|.orderTakeCompleteTime||
|.takeTimeSecs||
|.csrID||
|.csrName||
|.orderSourceCode||
|.orderStatus||
|.startTime||
|.makeTimeSecs||
|.ovenTime||
|.ovenTimeSecs||
|.rackTime||
|.rackTimeSecs||
|.routeTime||
|.driverID||
|.driverName||
|.orderDeliveryTimeSecs||
|.deliveryTime||
|.orderKey||
|.managerID||
|.managerName||
|.stopNumber||
|.deliveryStatus||
|.previousLocation||
|.currentLocation||
|.deliveryLocation|{ Latitude: null, Longitude: null }|
|.precedingStops||
|.deliveryHotspot|{ Id: null, Description: null, Name: null }|
|.estimatedWaitMinutes||
|.mapServiceProviders||
|.customerEtaInSeconds||
|.locationUpdatedAt||
|.metaData|{ epixPromo: { isEnabled: true, isReturning: true }|


```js

import {Tracking} from 'dominos';

const tracking=new Tracking();

const trackingResult=await tracking.byPhone('3108675309');

console.dir(trackingResult,{depth:1});


// expected output

Tracking {
    version: null,
    asOfTime: null,
    storeAsOfTime: '2021-03-11T20:08:02-05:00',
    storeID: '8244',
    orderID: '2021-03-11#1887',
    pulseOrderGuid: '850bfa59-12ae-4674-9159-a0b592f8dd0a',
    phone: '3108675309',
    serviceMethod: 'Delivery',
    advancedOrderTime: null,
    orderDescription: '1 Large (14") Hand Tossed Pizza w/ Left: Pepperoni',
    orderTakeCompleteTime: '2021-03-11T20:08:02-08:00',
    takeTimeSecs: 4,
    csrID: 'Power',
    csrName: null,
    orderSourceCode: 'Web',
    orderStatus: 'Complete',
    startTime: '2021-03-11T20:08:02-08:00',
    makeTimeSecs: 82,
    ovenTime: '2021-03-11T20:09:24-08:00',
    ovenTimeSecs: 390,
    rackTime: '2021-03-11T20:15:54-08:00',
    rackTimeSecs: 136,
    routeTime: '2021-03-11T20:18:10-08:00',
    driverID: '7798',
    driverName: 'Luis',
    orderDeliveryTimeSecs: 935,
    deliveryTime: null,
    orderKey: '824440887553',
    managerID: '9221',
    managerName: 'Marina',
    stopNumber: null,
    deliveryStatus: null,
    previousLocation: null,
    currentLocation: null,
    deliveryLocation: { Latitude: null, Longitude: null },
    precedingStops: null,
    deliveryHotspot: { Id: null, Description: null, Name: null },
    estimatedWaitMinutes: '21-31',
    mapServiceProviders: null,
    customerEtaInSeconds: null,
    locationUpdatedAt: null,
    metaData: { epixPromo: { isEnabled: true, isReturning: true } }
}


```

