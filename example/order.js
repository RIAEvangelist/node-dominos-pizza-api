import {Order,Customer,Item} from '../index.js';

const customer = new Customer(
    {
        //this could be an Address instance if you wanted 
        address: '1 alvarado st, 93940',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

const cheesePizza=new Item(
    {
        code:'14SCREEN',
        options:{
            X: {'1/1' : '1'}, 
            C: {'1/1' : '1'}
        }
    }
)

const extraCheesePizza=new Item(
    {
        code:'14SCREEN',
        options:{
            X: {'1/1' : '1'}, 
            C: {'1/1' : '2'}
        }
    }
)


//create

const order=new Order(customer);
order.storeID=7981;
order.serviceMethod='Carryout';

order.addItem(cheesePizza);
order.addItem(extraCheesePizza);

console.log(`
    INITIALIZED ORDER
`);
console.dir(order,{depth:2});



//validate

await order.validate();

console.log(`
    VALIDATED ORDER
`);

console.dir(order,{depth:2});


//price

//await order.price()