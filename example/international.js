import {urls} from '../index.js';
import {useInternational,canada} from '../utils/urls.js';
useInternational(canada);

console.log('CANADA');
console.dir(urls);

  
//These are not the real NZ endpoints
//if anyone wants to populate these with the real endpoints, that would be super helpful
//and you would get credit when your code is merged into the urls module.
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

console.log('\n\nMY COUSTOM FAKE NZ ENDPOINTS');
console.dir(urls);