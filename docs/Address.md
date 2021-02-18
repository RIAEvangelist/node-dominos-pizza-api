Address
====
Address is constructed `async`, so when you instantiate it, you should await it, like this : ` const address = await new Address(String)` this will work in your main node code without wrapping it in an anonymous async function.

|argument|type                              |required|default|
|--------|------                            |--------|-------|
|address |`AddressObject`/`AddressString`   |true    |       |


|member/method|type  |writeable|default|description|
|-------------|------|---    |---      |-------    |
|.street      |String|Yes    |         |street address (most commonly used to combine street number, name and apt number)|
|.streetName  |String|Yes    |         |street name|
|.streetNumber|String|Yes    |         |street number|
|.unitType    |String|Yes    |         |unit type, suite, apt etc.|
|.unitNumber  |String|Yes    |         |apartment number|
|.city        |String|Yes    |         |address city|
|.region      |String|Yes    |         |in the US this would be the state. In other countries it may be the province or prefecture|
|.postalCode  |String|Yes    |         |address postal or zip code|
|.formatted   |Object|Yes    |         |Dominos formatted address for use with the API, if you write to this field, it will automatically parse the Dominos style Object and update the Address instance|


#### AddressObject

Instead of passing an address string when initing the Address class (which needs to be parsed and can be comlicated), you can instead collect the address information and format it into an AddressObject. Dominos will try to figure the address out from any combination of address parts. None of these fields are required, but you should atleast provide enough information for Dominos to figure out the general location.

```js

  const addressObject={
      street:'900 Clark Ave Apt. 2B',
      city:'St. Louis',
      region:'MO',
      postalCode:'63102'
  }

```

#### Full and Partial Address Instantiation

The Address class will do its best to parse an AddressString into an AddressObject, and/or massage the AddressObject into a dominos api formatted Address. 

```js

  import {Address} from 'dominos';

  //full address examples
  const address = new Address(
      {
          street:'900 Clark Ave',
          city:'St. Louis',
          region:'MO',
          postalCode:'63102'
      }
  );

  const address=new Address('900 Clark Ave, St. Louis, MO, 63102');
  


  //partial address examples
  const address = new Address(
      {
          street:'900 Clark Ave',
          city:'St. Louis',
          postalCode:'63102'
      }
  );
  
  const address=new Address('900 Clark Ave, St. Louis, 63102');



  //street and zip only examples
  const fullAddressObject = new Address(
      {
          street:'900 Clark Ave',
          postalCode:'63102'
      }
  );
  
  const address=new Address('900 Clark Ave, 63102'); 

  //zip only examples
  const fullAddressObject = new Address(
      {
          postalCode:'63102'
      }
  );

  const onlyZip = new Address('63102');

```

#### `address.formatted` Dominos API Formatted Address

Dominos API uses pascal case for the Address object, we convert the values set to the other members of the address object to conform to the Dominos spec here. 

```js

  import {Address} from 'dominos';

  const address=new Address('900 Clark Ave, St. Louis, MO, 63102');

  console.log(address.formatted);

```

This outputs the dominos style address object.

```js

    {
        Street:'900 Clark Ave',
        City:'St. Louis',
        Region:'MO',
        PostalCode:'63102'
    }

```
