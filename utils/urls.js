import Is from 'strong-type';

const is=new Is;

const usa={
  sourceUri : "order.dominos.com",
  location:{
    find:"https://api.dominos.com/store-locator-international-service/findAddress?latitude=${lat}&longitude=${lon}"
  },
  store : {
    find : "https://order.dominos.com/power/store-locator?s=${line1}&c=${line2}&type=${pickUpType}",
    info : "https://order.dominos.com/power/store/${storeID}/profile",
    menu : "https://order.dominos.com/power/store/${storeID}/menu?lang=${lang}&structured=true"
  },
  order: {
    validate: "https://order.dominos.com/power/validate-order",
    price: "https://order.dominos.com/power/price-order",
    place: "https://order.dominos.com/power/place-order"
  },
  images:"https://cache.dominos.com/olo/6_47_2/assets/build/market/US/_en/images/img/products/larges/${productCode}.jpg",
  
  trackRoot:'https://tracker.dominos.com/tracker-presentation-service/',
  track: "v2/orders",

  //POST {storeId: "8278"}
  token:"https://order.dominos.com/power/paymentGatewayService/braintree/token",
  
  //POST general upsell see below
  upsell:"https://api.dominos.com/upsell-service/stores/upsellForOrder/",

  //POST specific types of upsell see below
  stepUpsell:"https://api.dominos.com/upsell-service/stores/stepUpsellForOrder"

};

//UPSELL Payload
//{"maxUpsellCount":3,"order":{"Order":{"Address":{"Street":"251 CLAY ST","City":"MONTEREY","Region":"CA","PostalCode":"93940-2225","Type":"House","StreetName":"CLAY ST","StreetNumber":"251"},"Coupons":[],"CustomerID":"","Email":"","Extension":"","FirstName":"","LastName":"","LanguageCode":"en","OrderChannel":"OLO","OrderID":"QhXExb3uMDO0ieSeb6vi","OrderMethod":"Web","OrderTaker":null,"Payments":[],"Phone":"","PhonePrefix":"","Products":[{"Code":"14SCREEN","Qty":1,"ID":1,"isNew":true,"Options":{"X":{"1/1":"1"},"C":{"1/1":"1"}}},{"Code":"14SCMEATZA","Qty":1,"ID":2,"isNew":true,"Options":{"X":{"1/1":"1"},"C":{"1/1":"1.5"},"H":{"1/1":"1"},"B":{"1/1":"1"},"P":{"1/1":"1"},"S":{"1/1":"1"}}}],"ServiceMethod":"Delivery","SourceOrganizationURI":"order.dominos.com","StoreID":"8278","Tags":{},"Version":"1.0","NoCombine":true,"Partners":{},"HotspotsLite":false,"OrderInfoCollection":[]}},"sortBy":"PRIORITY","upsellType":"BEST"}

//STEP UPSELL interesting field is : stepTypes 
//{"order":{"Address":{"Street":"251 CLAY ST","City":"MONTEREY","Region":"CA","PostalCode":"93940-2225","Type":"House","StreetName":"CLAY ST","StreetNumber":"251"},"Coupons":[],"CustomerID":"","Email":"","Extension":"","FirstName":"","LastName":"","LanguageCode":"en","OrderChannel":"OLO","OrderID":"QhXExb3uMDO0ieSeb6vi","OrderMethod":"Web","Payments":[],"Phone":"","PhonePrefix":"","ServiceMethod":"Delivery","SourceOrganizationURI":"order.dominos.com","StoreID":"8278","Tags":{},"Version":"1.0","NoCombine":true,"Partners":{},"HotspotsLite":false,"OrderInfoCollection":[],"metaData":{"calculateNutrition":"true","prop65Warning":true},"IP":"99.43.15.137","DpzSourceHeader":"DSSPriceOrder","UserAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36","Market":"UNITED_STATES","Currency":"USD","Promotions":{"Redeemable":[],"Valid":[]},"Status":0,"Amounts":{"Menu":37.97,"Discount":0,"Surcharge":4.99,"Adjustment":0,"Net":37.97,"Tax":3.32,"Tax1":3.32,"Tax2":0,"Bottle":0,"Customer":41.29,"Payment":41.29},"BusinessDate":"2021-02-18","EstimatedWaitMinutes":"20-30","PulseOrderGuid":"0013a1d2-ed7f-443f-bd06-014fa6f4d20b","PriceOrderTime":"2021-02-18 13:32:27","PriceOrderMs":1111,"AmountsBreakdown":{"FoodAndBeverage":"32.98","Adjustment":"0.00","Surcharge":"0.00","DeliveryFee":"4.99","Tax":3.32,"Tax1":3.32,"Tax2":0,"Tax3":0,"Tax4":0,"Tax5":0,"Bottle":0,"Customer":41.29,"RoundingAdjustment":0,"Cash":0,"Savings":"0.00"},"Products":[{"ID":1,"Code":"14SCREEN","Qty":1,"CategoryCode":"Pizza","FlavorCode":"HANDTOSS","Price":13.99,"Amount":13.99,"Status":0,"LikeProductID":0,"Name":"Large (14\") Hand Tossed Pizza","IsNew":true,"NeedsCustomization":false,"AutoRemove":false,"Fulfilled":false,"Tags":{},"descriptions":[{"portionCode":"1/1","value":"Robust Inspired Tomato Sauce, Cheese"}]},{"ID":2,"Code":"14SCMEATZA","Qty":1,"CategoryCode":"Pizza","FlavorCode":"HANDTOSS","Price":18.99,"Amount":18.99,"Status":0,"LikeProductID":0,"Name":"Large (14\") Hand Tossed MeatZZa","IsNew":true,"NeedsCustomization":false,"AutoRemove":false,"Fulfilled":false,"Tags":{},"descriptions":[{"portionCode":"1/1","value":"Robust Inspired Tomato Sauce, Extra Cheese, Pepperoni, Beef, Italian Sausage, Ham"}]}]},"stepTypes":["SIDE","DRINKS","DESSERT","FLAVOR"]}




const canada={
  sourceUri :"order.dominos.ca",
  location:{
    find:"https://api.dominos.com/store-locator-international-service/findAddress?latitude=${lat}&longitude=${lon}"
  },
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
  images  : "https://cache.dominos.com/nolo/ca/en/6_44_3/assets/build/market/CA/_en/images/img/products/larges/${itemCode}.jpg",
  
  //canada still uses the old method
  track   : "https://order.dominos.ca/orderstorage/GetTrackerData?",


  //Need someone to update these or confirm for canada

  //POST {storeId: "8278"}
  token:"https://order.dominos.com/power/paymentGatewayService/braintree/token",
  
  //POST general upsell see below
  upsell:"https://api.dominos.com/upsell-service/stores/upsellForOrder/",

  //POST specific types of upsell see below
  stepUpsell:"https://api.dominos.com/upsell-service/stores/stepUpsellForOrder"
}


let urls=usa;

//to use other countries just set urls to that countries urls

// import {urls} from '../index.js';
// import {useInternational,canada} from '../utils/urls.js';
// useInternational(canada);

// console.dir(urls);

function useInternational(internationalURLs=usa){
  is.object(internationalURLs);
  urls=internationalURLs;
}

export {
    urls as default,
    urls,
    canada,
    usa,
    useInternational
}
