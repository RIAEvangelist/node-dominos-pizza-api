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


```

