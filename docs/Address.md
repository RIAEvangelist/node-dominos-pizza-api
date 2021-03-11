Address
====
This is the primary Address Class used for all things Domnio's.

If you have cloned this repo, you can run the example with this command:
`node ./example/address.js`

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)

Constructor
====

`new Address({...})`

|argument|type                              |required|description|
|--------|------                            |--------|-------|
|address |`AddressObject`/`AddressString`   |true    |the instance table below shows all the useable `AddressObject` fields |

Instance
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md) as this class extends it.

|member/method|type  |description|
|-------------|------|-------    |
|.street      |String|street address (most commonly used to combine street number, name and apt number)|
|.streetName  |String|street name|
|.streetNumber|String|street number|
|.unitType    |String|unit type, suite, apt etc.|
|.unitNumber  |String|apartment number|
|.city        |String|address city|
|.region      |String|in the US this would be the state. In other countries it may be the province or prefecture|
|.postalCode  |String|address postal or zip code|
|.deliveryInstructions|String|This is for special injstructions, like ring the bell, or please don't give the Pizza to the old lady out front, she is not my Grandma, and always steals my food deliverys.|


#### AddressObject

Instead of passing an address string when initing the Address class (which needs to be parsed and can be comlicated), you can instead collect the address information and format it into an AddressObject. Dominos will try to figure the address out from any combination of address parts. None of these fields are required, but you should atleast provide enough information for Dominos to figure out the general location.

```js

  const addressObject={
      street:'900 Clark Ave Apt. 2B',
      city:'St. Louis',
      region:'MO',
      postalCode:'63102',
      deliveryInstructions:'please dont give the Pizza to the old lady out front, she is not my Grandma.'
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
