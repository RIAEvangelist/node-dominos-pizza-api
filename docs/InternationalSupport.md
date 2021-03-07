# International Support

Provided a country uses the same api as the US, you can just update the URL endpoints from the url ESM.

If you have cloned this repo, you can run the example with this command:
`node ./example/international.js`

Canada
====

```js

  import {urls} from 'dominos';
  import {useInternational,canada} from 'dominos/utils/urls.js';
  useInternational(canada);

  console.dir(urls);

```

Custom
====

If you getthings working for your country this way, ***PLEASE SHARE*** your custom url object so we can make it a part of the core URLS module. ***Thank you :)***

```js

  import {urls} from 'dominos';
  import {useInternational,canada} from 'dominos/utils/urls.js';
  
  const myCountriesURLs={
      referer   :"https://order.dominos.nz/en/pages/order/",
      sourceUri :"order.dominos.nz",
          location:{
          find:urls.location.find
      },
      store     : {
          find    : "https://order.dominos.nz/power/store-locator?s=${line1}&c=${line2}&type=${type}",
          info    : "https://order.dominos.nz/power/store/${storeID}/profile",
          menu    : "https://order.dominos.nz/power/store/${storeID}/menu?lang=${lang}&structured=true"
      },
      order     : {
          validate: "https://order.dominos.nz/power/validate-order",
          price   : "https://order.dominos.nz/power/price-order",
          place   : "https://order.dominos.nz/power/place-order"
      },
      track   : "https://order.dominos.nz/orderstorage/GetTrackerData?"
  }


  useInternational(myCountriesURLs);

  console.log('MY COUSTOM FAKE NZ ENDPOINTS');
  console.dir(urls);

```