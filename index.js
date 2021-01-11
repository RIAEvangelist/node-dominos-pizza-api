import Address from './modules/Address.js';
import Coupon from './modules/Coupon.js';
import Customer from './modules/Customer.js';
import Item from './modules/Item.js';
// import Order from './src/Order.js';
import Store from './modules/Store.js';
// import Track from './src/Track.js';
import NearbyStores from './modules/NearbyStores.js'; 
import urls from './utils/urls.js';

const old={
    Address,
    Coupon,
    Customer,
    Item,
    // Order,
    Store,
    // Track,
    NearbyStores,
    urls
};

export {
    old as default,
    Address,
    Coupon,
    Customer,
    Item,
    // Order,
    Store,
    // Track,
    NearbyStores,
    urls
};
