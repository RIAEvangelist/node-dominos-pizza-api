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

//used to get instantiation payload for CI test
//console.log(order.payload)

const cheesePizza=new Item(
    {
        code:'14SCREEN',
        options:{
            X: {'1/1' : '1'}, 
            C: {'1/1' : '2'}
        }
    }
)

const order=new Order(customer);
order.storeID=7981;
order.serviceMethod='Carryout';

order.addItem(cheesePizza);

await order.validate();

console.log(`
ORDER
`);

console.dir(order,{depth:2});

console.log(`
VALIDATION
`);

console.dir(order.validationResponse,{depth:5});


//used to get validation payload for CI test
order.validationResponse.Order.OrderID=null;
order.validationResponse.Order.IP=null;
console.log(JSON.stringify(order.validationResponse));
