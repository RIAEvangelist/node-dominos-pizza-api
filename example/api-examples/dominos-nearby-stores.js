import {NearbyStores} from "../../index.js";

const address='88 Colin P Kelly Jr St, 94107';

//Get stores by postal code, distance is not as accurate this way
const nearbyStores=await new NearbyStores(address);

console.dir(nearbyStores);
