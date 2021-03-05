import {Order,Customer,Item,Payment} from '../index.js';

//extra cheese thin crust pizza
const pizza=new Item(
    {
        code:'14THIN',
        options:{
            //sauce, whole pizza : normal
            X: {'1/1' : '1'}, 
            //cheese, whole pizza  : double 
            C: {'1/1' : '2'}
        }
    }
);

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

//create
const order=new Order(customer);
order.storeID=7981;
// add pizza
order.addItem(pizza);
//validate order
await order.validate();
//price order
await order.price();

//grab price from order and setup payment
const myCard=new Payment(
    {
        amount:order.amountsBreakdown.customer,
        number:'4100123422343234',
        expiration:'01/35',
        securityCode:'867',
        postalCode:'93940'
    }
);

order.payments.push(myCard);

//place order
await order.place();

//inspect Order
console.dir(order,{depth:5});