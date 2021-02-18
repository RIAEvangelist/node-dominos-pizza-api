const urls={
  referer : "https://order.dominos.com/en/pages/order/",
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
  images:"https://cache.dominos.com/olo/6_47_2/assets/build/market/US/_en/images/img/products/larges/${itemCode}.jpg",
  track: "https://order.dominos.com/orderstorage/GetTrackerData?"
};

export {
    urls as default,
    urls
}
