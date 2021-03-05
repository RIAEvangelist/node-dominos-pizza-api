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
        address: '110 S Fairfax Ave, 90036',
        firstName: 'Barack',
        lastName: 'Obama',
        //where's that 555 number from?
        phone: '1-800-555-2368',
        email: 'chief@us.gov'
    }
);

//create
const order=new Order(customer);

// console.log('Instance');
// console.dir(order,{depth:0});

order.storeID=8244;
// add pizza
order.addItem(pizza);
//validate order
await order.validate();

// console.log('Validate');
// console.dir(order,{depth:0});

//price order
await order.price();

console.log('Price');
console.dir(order,{depth:0});

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

try{
    //will throw a dominos error because
    //we used a fake credit card
    await order.place();
}catch(err){
    console.trace(err);

    //inspect Order Response to see more information about the 
    //failure, unless you added a real card, then you can inspect
    //the order itself
    console.log('Failed Order Probably Bad Card, here is order.priceResponse the raw response from Dominos');
    console.dir(
        order.priceResponse,
        {depth:5}
    );
}

// console.log('Placed Order');
console.dir(order,{depth:3});