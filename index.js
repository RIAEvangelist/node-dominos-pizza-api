import Address from './modules/Address.js';
import NearbyStores from './modules/NearbyStores.js';
import Store from './modules/Store.js';
import Menu from './modules/Menu.js';

import Customer from './modules/Customer.js';
import Item from './modules/Item.js';
import Image from './modules/Image.js';

// import Order from './modules/Order.js';
import Tracking from './modules/Tracking.js';
 
import urls from './utils/urls.js';

const old={
    Address,
    NearbyStores,
    Store,
    Menu,
    
    Customer,
    Item,
    Image,
    
    // Order,
    Tracking,
    
    urls
};

export {
    old as default,
    Address,
    NearbyStores,
    Store,
    Menu,
    
    Customer,
    Item,
    Image,
    
    // Order,
    Tracking,
    
    urls
};
