Address
====
Address is constructed `async`, so when you instantiate it, you should await it, like this : ` const address = await new Address(String)` this will work in your main node code without wrapping it in an anonymous async function.

|argument|type                  |required|default|
|--------|------                |--------|-------|
|address |AddressObject / String|true    |       |

|member/method|type  |writeable|default|description|
|-------------|------|---|---|-------|----       |
|.dominos     |Object|No     |       |Address formatted the dominos API likes it|
|.type        |String|Yes    |'Home' |dominos address type, defaults to Home|
|.street      |String|Yes    |       |street address|
|.city        |String|Yes    |       |address city|
|.region      |String|Yes    |       |in the US this would be the state. In other countries it may be the province or prefecture|
|.postalCode  |String|Yes    |       |address postal or zip code|

#### AddressObject

Instead of passing an address string when initing the Address class (which needs to be parsed and can be comlicated), you can instead collect the address information and format it into an AddressObject. Dominos will try to figure the address out from any combination of address parts. None of these fields are required, but you should atleast provide enough information for Dominos to figure out the general location.

```js

  const addressObject={
      street:'900 Clark Ave',
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
          city:'St. Louis',
          region:'MO',
          postalCode:'63102'
      }
  );
  
  const address = new Address('St. Louis, MO, 63102');



  //state and zip only examples
  const fullAddressObject = new Address(
      {
          region:'MO',
          postalCode:'63102'
      }
  );
  
  const stateAndZip = new Address('St. Louis, 63102');



  //city and zip examples
  const fullAddressObject = new Address(
      {
          city:'St. Louis',
          postalCode:'63102'
      }
  );

  const cityAndZip = new Address('St. Louis, 63102');

  

  //zip only examples
  const fullAddressObject = new Address(
      {
          postalCode:'63102'
      }
  );

  const onlyZip = new Address('63102');

```

#### `address.dominos` Dominos API Formatted Address

Dominos API uses pascal case for the Address object, we convert the values set to the other members of the address object to conform to the Dominos spec here. 

```js

  import {Address} from 'dominos';

  const address=new Address('900 Clark Ave, St. Louis, MO, 63102');

  console.log(address.dominos);

```

This outputs the dominos style address object.

```js

    {
        Type:'House',
        Street:'900 Clark Ave',
        City:'St. Louis',
        Region:'MO',
        PostalCode:'63102'
    }

```
