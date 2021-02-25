Item
====
Items are used to track what products, quantities, and options a customer would like to Order.

If you have cloned this repo, you can run the example with this command:
`node ./example/item.js`

extends `DominosFormat` class, see more in [DominosFormat.md]](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/DominosFormat.md)

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
import {Item} from 'dominos';

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