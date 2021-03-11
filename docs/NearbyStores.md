
NearbyStores for Finding Stores
====
NearbyStores is constructed `async`, so when you instantiate it, you should await it, like this : ` const nearbyStores = await new NearbyStores(...)` this will work in your main node code without wrapping it in an anonymous async function.

If you have cloned this repo, you can run the example with this command:
`node ./example/nearby.js`

Constructor
====

`await new NearbyStores({...})`

|argument |type  |default   |description|
|-------- |----  |-------   |--------|
|address  |[Address](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md) instance, or AddressObject or AddressString | |either an instance of the Address class or anthing that could be passed to the `Address` class to make an instance|
|type     |String|`Delivery`|`Delivery`, `Carryout`, `all`|


Instance
====

|member/method      |type  |description|
|-------------      |------|-------    |
|address            |[Address](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md)|An Address Instance populated with the Domino's Store information|
|stores             |Array| Array of basic store objects, see below.|
|dominosAPIResponse |[Dominos API Response Object](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosAPIResponse.md)|Raw response from Domino's Each response is a little different, but you can see the core info in the [Domino's API Response Doc](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosAPIResponse.md). |

### By PostalCode
***this yields a wide variety of stores*** because it is not a very specific address. To find stores closer to you (or your user), use a more specific address.

You can see the all the ways to pass an address [in the dominos pizza Address.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md).

```js

    import {NearbyStores} from 'dominos';

    const nearbyStores=await new NearbyStores('63102');

    console.dir(nearbyStores,{depth:1});
    console.dir(nearbyStores.stores[0],{depth:1});

```

`nearbyStores.stores` is automatically populated from the dominos API when the class is instantiated. It is an `Array` of basic Store information. This info can be used as is, or you can create a `new Store(StoreID)` to get even more detailed information on the Store and its Menu as well.

``` js

    import {NearbyStores, Store} from 'dominos';
  
    const nearbyStores=await new NearbyStores('88 Colin P Kelly Jr St, 94107');

    console.dir(nearbyStores,{depth:1});
    console.dir(nearbyStores.stores[0],{depth:1});

    //initialize the frst of the nearbyStores.stores
    const store=await new Store(nearbyStores.stores[0].StoreID);

    console.dir(store,{depth:1});
```


### Detailed class insight

```js

    //nearbyStores high level instance
    NearbyStores {
        address: Address {
            street: '88 COLIN P KELLY JR ST',
            streetNumber: '88',
            streetName: 'COLIN P KELLY JR ST',
            unitType: '',
            unitNumber: '',
            city: 'SAN FRANCISCO',
            region: 'CA',
            postalCode: '94107-2008',
            deliveryInstructions: ''
        },
        stores: [
            [Object], [Object],
            ...
        ],
        dominosAPIResponse: {
            //core
            Status: 0,
            StatusItems: [Array],
            
            //specific to this request
            Granularity: 'Exact',
            Address: [Object],
            Stores: [Array]
        }
    }


    //nearbyStores.stores[0] basic store info
    {
      StoreID: '8302',
      IsDeliveryStore: false,
      MinDistance: 22.7,
      MaxDistance: 22.7,
      Phone: '831-728-4444',
      AddressDescription: '512 Main Street\nWatsonville, CA 95076\n',
      HolidaysDescription: '',
      HoursDescription: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
      ServiceHoursDescription: {
        Carryout: 'Su-Sa 10:30am-10:00pm',
        Delivery: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
        DriveUpCarryout: 'Su-Sa 4:30pm-9:00pm'
      },
      IsOnlineCapable: true,
      IsOnlineNow: true,
      IsNEONow: true,
      IsSpanish: true,
      LocationInfo: '',
      LanguageLocationInfo: { en: '', es: '' },
      AllowDeliveryOrders: true,
      AllowCarryoutOrders: true,
      AllowDuc: true,
      ServiceMethodEstimatedWaitMinutes: {
        Delivery: { Min: 29, Max: 34 },
        Carryout: { Min: 13, Max: 18 }
      },
      StoreCoordinates: { StoreLatitude: '36.912', StoreLongitude: '-121.759' },
      AllowPickupWindowOrders: false,
      ContactlessDelivery: 'REQUIRED',
      ContactlessCarryout: 'INSTRUCTION',
      IsOpen: true,
      ServiceIsOpen: { Carryout: true, Delivery: true, DriveUpCarryout: false }
    }

```