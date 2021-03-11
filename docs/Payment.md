Payment
====

***NEED TO ADD SUPPORT FOR PAY WITH CASH ON DELIVERY***

This class will initialize a creditcard payment object for an order

If you have cloned this repo, you can run the example with this command:
`node ./example/payment.js`

extends `DominosFormat` class, see more in [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md)

Constructor
====

`new Payment({...})`

|parameters.|type       |required|description|
|--------   |------     |--------|-------|
|amount     |number     |no      |amount to pay with the card|
|tipAmount  |number     |no      |amount of the payment that is a tip|
|number     |string     |yes     |credit card number sanitized when instantiatied per dominos rules (numbers only)|
|expiration |string     |yes     |creditcard expiration sanitized when instantiatied per dominos rules (numbers only)|
|securityCode|string    |yes     |credit card security code|
|postalCode |string     |yes     |credit card billing postal/zip code|

Instance
====

Also check the [DominosFormat.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosFormat.md) as this class extends it.

|member/method  |type  |description|
|-------------  |------|---      |-------    |
|amount         |number|amount to pay with the card|
|tipAmount      |number|amount of the payment that is a tip|
|number         |string|credit card number sanitized when instantiatied per dominos rules (numbers only|
|cardType       |string|type of credit card, automatically assigned when instantiated based on the credit card number |
|expiration     |string|credit card expiration sanitized when instantiatied per dominos rules (numbers only)|
|securityCode   |string|credit card security code|
|postalCode     |string|credit card billing postal/zip code|


```js

import {Payment} from 'dominos';

const myCard=new Payment(
    {
        //amount is optional. you can add this on myCard.amount whenever you are ready
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


//outputs


Payment {
  type: 'CreditCard',
  amount: 10.77,
  number: '4444444444444444',
  cardType: 'VISA',
  expiration: '0112',
  securityCode: '867',
  postalCode: '93940'
}

```
