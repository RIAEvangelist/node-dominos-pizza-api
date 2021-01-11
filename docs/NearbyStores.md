
NearbyStores for Finding Stores
====

|argument |type                         |default|description|
|-------- |----                         |-------|--------|
|address  |AddressObject / AddressString|       |anything that could be passed to the `Address` class|
|type     |String                       |all    |`Delivery`, `Carryout`, `all`|

You can see the full NearbyStores documentation [in the dominos pizza NearbyStores.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/NearbyStores.md). 

### By PostalCode
***this yields a wide variety of stores*** because it is not a very specific address. To find stores closer to you (or your user), use a more specific address.

You can see the all the ways to pass an address [in the dominos pizza Address.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Address.md).

```js

  import {NearbyStores} from 'dominos';

  const nearbyStores=await new NearbyStores(
    '63102',
    'Delivery'
  );

  console.log(nearbyStores.stores);

```

`nearbyStores.stores` is automatically populated from the dominos API when the class is instantiated. It is an `Array` of basic Store information. This info can be used as is, or you can create a `new Store(StoreID)` to get even more detailed information on the Store and its Menu as well.

```js

    [
        {
            StoreID: '1605',
            IsDeliveryStore: false,
            Phone: '314-421-3030',
            AddressDescription: '1430 N. 13th\n' +
            'St. Louis, MO 63106\n' +
            'On the  corner of Cass Ave and N 13th Street.',
            HolidaysDescription: '',
            HoursDescription: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
            ServiceHoursDescription: {
                Carryout: 'Su-Sa 10:30am-10:00pm',
                Delivery: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
                DriveUpCarryout: 'Su-Sa 10:30am-9:00pm'
            },
            IsOnlineCapable: true,
            IsOnlineNow: true,
            IsNEONow: true,
            IsSpanish: true,
            LocationInfo: 'On the  corner of Cass Ave and N 13th Street.',
            LanguageLocationInfo: {
                en: 'On the  corner of Cass Ave and N 13th Street.',
                es: 'On the  corner of Cass Ave and N 13th Street.'
            },
            AllowDeliveryOrders: true,
            AllowCarryoutOrders: true,
            AllowDuc: true,
            ServiceMethodEstimatedWaitMinutes: { 
                Delivery: { Min: 15, Max: 20 }, 
                Carryout: { Min: 10, Max: 15 } 
            },
            StoreCoordinates: { StoreLatitude: '38.6405', StoreLongitude: '-90.1942' },
            AllowPickupWindowOrders: false,
            ContactlessDelivery: 'REQUIRED',
            ContactlessCarryout: 'INSTRUCTION',
            IsOpen: false,
            ServiceIsOpen: { Carryout: false, Delivery: false, DriveUpCarryout: false }
        },
        {
            StoreID: '1524',
            IsDeliveryStore: false,
            Phone: '314-621-3030',
            AddressDescription: '1613 S 9th Street\nSt. Louis, MO 63104\n',
            HolidaysDescription: '',
            HoursDescription: 'Su-Th 11:00am-12:00am\nFr-Sa 11:00am-1:00am',
            ServiceHoursDescription: {
                Carryout: 'Su-Sa 10:30am-10:00pm',
                Delivery: 'Su-Th 11:00am-12:00am\nFr-Sa 11:00am-1:00am',
                DriveUpCarryout: 'Su-Sa 4:00pm-9:00pm'
            },
            IsOnlineCapable: true,
            IsOnlineNow: true,
            IsNEONow: false,
            IsSpanish: true,
            LocationInfo: '',
            LanguageLocationInfo: { en: '', es: '' },
            AllowDeliveryOrders: true,
            AllowCarryoutOrders: true,
            AllowDuc: true,
            ServiceMethodEstimatedWaitMinutes: { 
                Delivery: { Min: 20, Max: 30 }, 
                Carryout: { Min: 10, Max: 15 } 
            },
            StoreCoordinates: { StoreLatitude: '38.6111', StoreLongitude: '-90.2024' },
            AllowPickupWindowOrders: false,
            ContactlessDelivery: 'REQUIRED',
            ContactlessCarryout: 'DISABLED',
            IsOpen: false,
            ServiceIsOpen: { Carryout: false, Delivery: false, DriveUpCarryout: false }
        },
        ...
    ]

```