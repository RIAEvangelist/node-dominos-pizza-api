Customer
====
The customer class is used to create a customer instance for a Domino's Pizza Order.

If you have cloned this repo, you can run the example with this command:
`node ./example/customer.js`

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)

Constructor
====

`new Customer({...})`

|params.argument|type  |required|description|
|--------|------|--------|-------|
|address      |[Address](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md), AddressObject, AddressString|yes|customers Address. See more info on what is an acceptable Address/AddressObject or AddressString in the [Address.md doc](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md)|
|firstName  |String|yes||
|lastName   |String|yes||
|email      |String|yes||
|phone      |String|yes||

Instance
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md) as this class extends it.

|member/method|type  |description|
|-------------|------|-------    |
|.address      |[Address](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md)|customers Address|
|.firstName  |String| |
|.lastName   |String||
|.email      |String||
|.phone      |String||




```js

import {Customer} from 'dominos';

const customer = new Customer(
    {
        address: '900 Clark Ave, 63102',
        firstName: 'Barack',
        lastName: 'Obama',
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

console.dir(customer);

//logs out
Customer {
  firstName: 'Barack',
  lastName: 'Obama',
  email: 'chief@us.gov',
  address: Address {
    street: '900 Clark Ave',
    streetNumber: '',
    streetName: '',
    unitType: '',
    unitNumber: '',
    city: '',
    region: '',
    postalCode: '63102',
    deliveryInstructions: ''
  },
  phone: '1-800-555-2368'
}


```