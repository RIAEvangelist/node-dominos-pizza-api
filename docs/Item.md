Item
====
Items are used to track what products, quantities, and options a customer would like to Order.

If you have cloned this repo, you can run the example with this command:
`node ./example/item.js`

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)

Constructor
====

`new Item({...})`

|params.argument|type  |required|description|
|--------       |------|--------|-------|
|.iD            |Number|no|this number will auto increment with each item created, you do not need to do anything unless you want specific ids on your items. The casind is weird to support dominos format|
|.code          |String|yes|the product code, like `14SCREEN` for a 14' cheese pizza|
|.qty           |Number|no|the quantity of the item to order, ***defaults to 1*** if not specified|
|.options       |Object|no|the special options for these items, options supported for various products can be found in the menu entries for the item|
|.isNew         |Bool  |no|suggested you do not modify this. tells the dominos api if this is a new item. If set to false, dominos will not return duplicate information for this item|

Instance
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md) as this class extends it.

|member/method|type  |description|
|-------------|------|-------    |
|.iD          |Number|unique id for each item, autogenerated if not provided upon init|
|.code        |String|the product code, like `14SCREEN` for a 14' cheese pizza|
|.qty         |Number|the quantity of the item to order|
|.options     |Object|the special options for these items, options supported for various products can be found in the menu entries for the item. Poke around in the menu to get an idea about them.|
|.isNew       |Bool  |suggested you do not modify this. tells the dominos api if this is a new item. If set to false, dominos will not return duplicate information for this item|

```js
import {Item} from 'dominos';

const cheesePizza=new Item(
    {
        ID:1,
        code:'14SCREEN',
        options:
            // this says, for the whole pizza put sauce on it
            X: {'1/1' : '1'}, 
            
            //this says for the whole pizza put double cheese
            C: {'1/1' : '2'}
    }
);

console.dir(cheesePizza);

//outputs
Item { 
    code: 'P_14SCREEN', 
    qty: 1, 
    options: {
        X: {'1/1' : '1'}, 
        C: {'1/1' : '2'}
    } 
}

```