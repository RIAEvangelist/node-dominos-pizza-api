Customer
====


Constructor
====

`new Customer()`

|argument|type  |required|description|
|--------|------|--------|-------|


Instance
====

|member/method|type  |description|
|-------------|------|-------    |



```js

const customer = new Customer(
    {
        address: '900 Clark Ave, 63102',
        firstName: 'Barack',
        lastName: 'Obama',
        phone: '1-800-The-White-House',
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
  phone: '1-800-The-White-House'
}


```