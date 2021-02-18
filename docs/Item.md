Item
====
Items are used to track what products, quantities, and options a customer would like to Order.

Constructor
====

`new Item({...})`

|params.argument|type  |required|description|
|--------|------|--------|-------|
|.code        |String|yes|the product code, like `14SCREEN` for a 14' cheese pizza|
|.qty         |Number|no|the quantity of the item to order, ***defaults to 1*** if not specified|
|.options     |Object|no|the special options for these items, options supported for various products can be found in the menu entries for the item|

Instance
====

|member/method|type  |description|
|-------------|------|-------    |
|.code        |String|the product code, like `14SCREEN` for a 14' cheese pizza|
|.qty         |Number|the quantity of the item to order|
|.options     |Object|the special options for these items, options supported for various products can be found in the menu entries for the item|


```js

const pepperoniPizza=new Item(
    {
        code:'P_14SCREEN'
    }
)

console.dir(pepperoniPizza);

//outputs
Item { 
    code: 'P_14SCREEN', 
    qty: 1, 
    options: {} 
}

```