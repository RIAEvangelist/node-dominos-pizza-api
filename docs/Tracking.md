Tracking
====
This is how to track an order / orders progress. There are a couple ways to do it, but the most common way is `.byPhone`.

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
  dominosAPIResult: { 'soap:Envelope': [Object] }
}

```

