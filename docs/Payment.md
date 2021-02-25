Payment
====
This class will initialize a creditcard payment object for an order

If you have cloned this repo, you can run the example with this command:
`node ./example/payment.js`

extends `DominosFormat` class, see more in [DominosFormat.md]](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/v3.x/docs/DominosFormat.md)

Constructor
====

`new Payment({...})`

|parameters.|type       |required|description|
|--------   |------     |--------|-------|
|amount     |number     |no      |amount to pay with the card|
|number     |string     |yes     |credit card number|
|cardType   |string     |yes     ||
|expiration |string     |yes     ||
|securityCode|string    |yes     ||
|postalCode |string     |yes     ||

Instance
====

|member/method|type  |writeable|default|description|
|-------------|------|---    |---      |-------    |




type='CreditCard'
    amount=0
    number=''
    cardType=''
    expiration=''
    securityCode=''
    postalCode=''



 visa        : /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard  : /^5[1-5][0-9]{14}$/,
            amex        : /^3[47][0-9]{13}$/,
            diners      : /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover    : /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb         : /^(?:2131|1800|35\d{3})\d{11}$/,
            enroute  