AmountsBreakdown
====
This is the primary AmountsBreakdown Class used for all things Domnio's.

Really unless you are working on the core of this module you don't need to understand this class as it is not used outside of the internals of the [Order Class](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Order.md) itself.

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)

Constructor
====

`new AmountsBreakdown(params)`

|params.          |type  |required|
|--------         |------|--------|
|.foodAndBeverage |String|no      |
|.adjustment      |String|no      |
|.surcharge       |String|no      |
|.deliveryFee     |String|no      |
|.tax             |Number|no      |
|.tax1            |Number|no      |
|.tax2            |Number|no      |
|.tax3            |Number|no      |
|.tax4            |Number|no      |
|.tax5            |Number|no      |
|.bottle          |Number|no      |
|.customer        |Number|no      |
|.roundingAdjustment|Number|no    |
|.cash            |Number|no      |
|.savings         |String|no      |

Instance
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md) as this class extends it.

|member/method|type  |description|
|-------------|------|-------    |
|.foodAndBeverage |String|cost of the food and beverage.|
|.adjustment      |String|? maybe related to coupons ?|
|.surcharge       |String|?|
|.deliveryFee     |String|delivery fee|
|.tax             |Number|tax|
|.tax1            |Number|main tax|
|.tax2            |Number|?|
|.tax3            |Number|?|
|.tax4            |Number|?|
|.tax5            |Number|?|
|.bottle          |Number|? maybe a recycling crv?|
|.customer        |Number|Total order price for the customer|
|.roundingAdjustment|Number|?|
|.cash            |Number|?|
|.savings         |String|? maybe related to coupons ?|



```js

  //this is a sample AmountsBreakdown from a dominos order

  AmountsBreakdown {
      foodAndBeverage: '31.98',
      adjustment: '0.00',
      surcharge: '0.00',
      deliveryFee: '0.00',
      tax: 2.96,
      tax1: 2.96,
      tax2: 0,
      tax3: 0,
      tax4: 0,
      tax5: 0,
      bottle: 0,
      customer: 34.94,
      roundingAdjustment: 0,
      cash: 0,
      savings: '0.00'
  }

```