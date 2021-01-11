# International Support

Provided a country uses the same api as the US, you can just update the URL endpoints from the url ESM.

Canada
====

```js

  import {urls} from 'dominos';

  urls={
    referer   :"https://order.dominos.ca/en/pages/order/",
    sourceUri :"order.dominos.ca",
    store     : {
        find    : "https://order.dominos.ca/power/store-locator?s=${line1}&c=${line2}&type=${type}",
        info    : "https://order.dominos.ca/power/store/${storeID}/profile",
        menu    : "https://order.dominos.ca/power/store/${storeID}/menu?lang=${lang}&structured=true"
    },
    order     : {
        validate: "https://order.dominos.ca/power/validate-order",
        price   : "https://order.dominos.ca/power/price-order",
        place   : "https://order.dominos.ca/power/place-order"
    },
    track   : "https://order.dominos.ca/orderstorage/GetTrackerData?"
  }

```
