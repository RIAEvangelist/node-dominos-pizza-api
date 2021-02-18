import Address from './modules/Address.js';
import NearbyStores from './modules/NearbyStores.js';
import Store from './modules/Store.js';
import Menu from './modules/Menu.js';

import Customer from './modules/Customer.js';
import Item from './modules/Item.js';

// import Order from './src/Order.js';
// import Track from './src/Track.js';
 
import urls from './utils/urls.js';

const old={
    Address,
    NearbyStores,
    Store,
    Menu,
    
    Coupon,
    Customer,
    Item,
    
    // Order,
    // Track,
    
    urls
};

export {
    old as default,
    Address,
    NearbyStores,
    Store,
    Menu,
    
    Coupon,
    Customer,
    Item,
    
    // Order,
    // Track,
    
    urls
};
