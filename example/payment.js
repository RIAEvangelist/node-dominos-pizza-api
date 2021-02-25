import {Payment} from '../index.js';

const myCard=new Payment(
    {
        amount:10.77,
        //dashes are not needed, they just make it easier to read
        //the class sanitizes the data
        number:'4444-4444-4444-4444',
        expiration:'01/12',
        securityCode:'867',
        postalCode:'93940'
    }
)

console.dir(myCard);