# Dominos Store Info

Store is constructed `async`, so when you instantiate it, you should await it, like this : ` const store = await new Store(String)` this will work in your main node code without wrapping it in an anonymous async function.

If you have cloned this repo, you can run the example with this command:
`node ./example/store.js`

Constructor
====

`await new Store(4337)`

|argument|type          |required|default|
|--------|------        |--------|-------|
|storeID |Number/String |true    |       |
|lang    |String        |false   |en     |

```js

    import {Store} from 'dominos';

    const store=await new Store(4337);

    console.dir(store,{depth:1});

```

Instance
====

|member/method|type   |description|
|-------------|------ |-------    |
|.menu        |Menu   |parsed and more friendly menu for the store check out the [Dominos Pizza Menu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Menu.md) for more details.|
|.info        |object |see the detailed store information object below.|


store.info
====

The `store.info` object is pretty big and contains a wealth of information about the Store. 

Here is a full example from store `4332`. Enjoy perusing the available data.

```js

  {
      StoreID: "4332",
      BusinessDate: "2021-01-10",
      PulseVersion: "6.89.477",
      PulseVersionName: "3.89",
      PreferredLanguage: "en-US",
      PreferredCurrency: "USD",
      Phone: "703-799-3030",
      StreetName: "7732c Richmond Hwy",
      City: "Alexandria",
      Region: "VA",
      PostalCode: "22306",
      AddressDescription: "7732c Richmond Hwy\nAlexandria, VA 22306\nPlease don't forget to tip your driver for being awesome!",
      TimeZoneCode: "GMT-05:00",
      TimeZoneMinutes: -300,
      IsAffectedByDaylightSavingsTime: false,
      Holidays: {},
      HolidaysDescription: "",
      Hours: {
          Sun: [
              {
                  OpenTime: "00:00",
                  CloseTime: "00:59"
              },
              {
                  OpenTime: "10:00",
                  CloseTime: "23:59"
              }
          ],
          Mon: [
              {
                  OpenTime: "10:00",
                  CloseTime: "23:59"
              }
          ],
          ...

      },
      HoursDescription: "Su-Th 10:00am-12:00am\nFr-Sa 10:00am-1:00am",
      ServiceHours: {
          Carryout: {
              Sun: [
                  {
                      OpenTime: "10:00",
                      CloseTime: "22:00"
                  }
              ],
              ...

          },
          Delivery: {
              Sun: [
                  {
                      OpenTime: "00:00",
                      CloseTime: "00:59"
                  },
                  {
                      OpenTime: "10:00",
                      CloseTime: "23:59"
                  }
              ],
              ...

          },
          DriveUpCarryout: {
              Sun: [
                  {
                      OpenTime: "16:00",
                      CloseTime: "20:59"
                  }
              ],
              Mon: [
                  {
                      OpenTime: "16:00",
                      CloseTime: "20:59"
                  }
              ],
              ...

          }
      },
      ServiceHoursDescription: {
          Carryout: "Su-Sa 10:00am-10:00pm",
          Delivery: "Su-Th 10:00am-12:00am\nFr-Sa 10:00am-1:00am",
          DriveUpCarryout: "Su-Sa 4:00pm-9:00pm"
      },
      CustomerCloseWarningMinutes: 30,
      AcceptablePaymentTypes: [
          "Cash",
          "GiftCard",
          "CreditCard"
      ],
      AcceptableCreditCards: [
          "American Express",
          "Discover Card",
          "Mastercard",
          "Optima",
          "Visa"
      ],
      IsOnlineCapable: true,
      LocationInfo: "Please don't forget to tip your driver for being awesome!",
      LanguageLocationInfo: {
          en: "Please don't forget to tip your driver for being awesome!",
          es: ""
      },
      MinimumDeliveryOrderAmount: 13.98,
      CashLimit: 50,
      IsForceOffline: false,
      IsOnlineNow: true,
      IsForceClose: false,
      IsOpen: false,
      OnlineStatusCode: "Ok",
      StoreAsOfTime: "2021-01-11 00:26:21",
      AsOfTime: "2021-01-11 00:27:31",
      IsNEONow: false,
      IsSpanish: true,
      AllowCarryoutOrders: true,
      AllowDeliveryOrders: true,
      Status: 0,
      AcceptableWalletTypes: [
          "Google"
      ],
      SocialReviewLinks: {
          yelp: "http://www.yelp.com/biz/skVUD-11n-64ASlPSPTvXg",
          gmb: "http://search.google.com/local/writereview?placeid=ChIJUzJl6hSut4kR5j-Wp9ZeKyw",
          plus: "https://plus.google.com/104470678873051810563"
      },
      IsAVSEnabled: true,
      Pop: true,
      LanguageTranslations: {
          en: {
              LocationInfo: "Please don't forget to tip your driver for being awesome!",
              StoreName: ""
          },
          es: {
              LocationInfo: "",
              StoreName: ""
          }
      },
      StoreLocation: {
          Latitude: "38.7485",
          Longitude: "-77.0833"
      },
      DriverTrackingSupported: "true",
      IsCookingInstructionsEnabled: false,
      IsSaltWarningEnabled: false,
      DriverTrackingSupportMode: "NOLO_VISIBLE",
      StoreName: "",
      AllowDineInOrders: false,
      EstimatedWaitMinutes: "15-25",
      StoreCoordinates: {
          StoreLatitude: "38.7485",
          StoreLongitude: "-77.0833"
      },
      Upsell: {},
      AcceptableTipPaymentTypes: [
          "CreditCard"
      ],
      FutureOrderDelayInHours: 1,
      FutureOrderBlackoutBusinessDate: "2021-01-10",
      StoreEndTimeEvenSpansToNextBusinessDay: "2021-01-10 23:59:00",
      ecomActive: true,
      AllowSmsNotification: true,
      HasKiosk: false,
      IsTippingAllowedAtCheckout: true,
      AlternatePaymentProcess: false,
      AcceptAnonymousCreditCards: true,
      Tokenization: true,
      AcceptGiftCards: true,
      AcceptSavedCreditCard: true,
      AllowCardSaving: true,
      AllowPickupWindowOrders: false,
      IsAllergenWarningEnabled: false,
      AllowAutonomousDelivery: false,
      AllowDriverPooling: false,
      AdvDelDash: false,
      SaltWarningInfo: null,
      MarketPaymentTypes: [],
      CarryoutWaitTimeReason: null,
      DeliveryWaitTimeReason: null,
      RawPaymentGateway: "1",
      AllowDuc: true,
      AllowRemoteDispatch: false,
      AllowPiePass: true,
      IsDriverSafetyEnabled: false,
      StoreVariance: null,
      ContactlessDelivery: "REQUIRED",
      ContactlessCarryout: "INSTRUCTION",
      AllowDynamicDeliveryFees: false,
      SmartRunEnabled: false,
      RequireMaskInStore: false,
      AllowHotspotLiteOrders: false,
      TargetedOffers: {
          OptInAAA: true,
          OptInCOBB: true
      },
      NoCarryoutOrdersUntil: "2000-01-01 00:00:00",
      NoDeliveryOrdersUntil: "2000-01-01 00:00:00",
      NoHotspotLiteOrdersUntil: "2100-01-01 00:00:00",
      GeofenceRadiusMeters: 100,
      CarsideTippingEnabled: false,
      ServiceMethodEstimatedWaitMinutes: {
          Delivery: {
              Min: 15,
              Max: 25
          },
          Carryout: {
              Min: 8,
              Max: 13
          }
      }
  }

```