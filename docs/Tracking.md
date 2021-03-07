Tracking
====
This is how to track an order / orders progress. There are a couple ways to do it, but the most common way is `.byPhone`.

### TRACKING CURRENTLY REPORTS ABANDONDONED IN JSON DATA EVEN IF ORDER IS ON THE WAY

Rely on the `order.place` response. If the order fails, it will throw a `DominosPlaceOrderError`. Otherwise, your pizza is on the way. It also seems that orders placed via `dominos` module do not show up on the tracking website right now. These orders appear stealth at the moment.

If you figure out any further information on this when playing around or watching traffic on the dominos website, please contribiute to share with all of the users ;) Thanks for being awesome!

Constructor
====

`new Tracking()`

Instance
====

|member/method  |params         |description|
|-------------  |------         |-------    |
|.byPhone       |phone/string   | fetches all trackable orders for a given phone number |
|.byID          |storeID, orderKey| fetches a specific orders tracking info from a specific store |
|.byURL         |url/string     | fetches all orders for a specific url query |

```js

import {Tracking} from 'dominos';

const tracking=new Tracking();

const trackingResult=await tracking.byPhone('3108675309');

console.dir(trackingResult,{depth:1});

//outputs
Tracking {
  orders: {},
  query: { Phone: '3108675309' },
  dominosAPIResult: { 
    'soap:Envelope': {
      'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/',
      'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'soap:Body': {
        GetTrackerDataResponse: {
          xmlns: 'http://www.dominos.com/message/',
          Version: '1.5',
          Query: { Phone: '3108675309' },
          AsOf: '2021-03-06T16:25:47',
          OrderStatuses: {
            OrderStatus: [
              {
                Version: '1.5',
                AsOfTime: '2021-03-06T10:15:54',
                StoreAsOfTime: '2021-03-06T13:24:50',
                StoreID: '8278',
                OrderID: '2021-03-06#29',
                Phone: '3108675309',
                ServiceMethod: 'Delivery',
                AdvancedOrderTime: {},
                OrderDescription: {},
                OrderTakeCompleteTime: {},
                TakeTimeSecs: '3',
                CsrID: 'Power',
                CsrName: {},
                OrderSourceCode: 'Web',
                OrderStatus: 'Abandoned',
                StartTime: {},
                MakeTimeSecs: '0',
                OvenTime: {},
                OvenTimeSecs: {},
                RackTime: {},
                RackTimeSecs: '0',
                RouteTime: {},
                DriverID: {},
                DriverName: {},
                OrderDeliveryTimeSecs: {},
                DeliveryTime: {},
                OrderKey: '827835029210',
                ManagerID: {},
                ManagerName: {}
              },
              {
                Version: '1.5',
                AsOfTime: '2021-03-06T10:16:59',
                StoreAsOfTime: '2021-03-06T13:24:50',
                ...
              },
              {
                Version: '1.5',
                AsOfTime: '2021-03-06T10:17:21',
                StoreAsOfTime: '2021-03-06T13:24:50',
                ...
              },
              {
                Version: '1.5',
                AsOfTime: '2021-03-06T10:38:22',
                StoreAsOfTime: '2021-03-06T13:24:50',
                ...
              }
            ]
          }
        }
      }
    }     
  }
}

```

