Item
====
Items are used to track what products, quantities, and options a customer would like to Order.

Constructor
====

```js

const pepperoniPizza=new Item(
    {
        code:'P_14SCREEN'
    }
)

```

|argument|type  |required|description|
|--------|------|--------|-------|
|params  |Object|true    | `.code` is the product code, `.qty` defaults to 1, `.options` special options for the item.|

Instance
====

|member/method|type  |description|
|-------------|------|-------    |
|.code        |String|the product code, like `14SCREEN` for a 14' cheese pizza|
|.qty         |Number|the quantity of the item to order|
|.options     |Object|the special options for these items, options supported for various products can be found in the menu entries for the item|

