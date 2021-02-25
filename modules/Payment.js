import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Payment extends DominosFormat{
    constructor(parameters={}) {
        super();

        

        this.init=parameters;
    }

    
    type='CreditCard'
    amount=0
    number=''
    
    //all uppercase
    cardType=''
    
    //digits only
    expiration=''
    securityCode=''
    postalCode=''   
    
    addCard(number,expiration,securityCode,billingPostalCode){
        this.reset();

        this.#validate(number);
        
        if(this.cardType){
            this.number=number;
            this.expiration=expiration;
            this.securityCode=securityCode;
            this.billingPostalCode=billingPostalCode;
        }

        return this;
    }

    reset(){
        this.number='';
        this.expiration='';
        this.securityCode='';
        this.billingPostalCode='';
    }

    #validate(number){
        const re = {
            visa        : /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard  : /^5[1-5][0-9]{14}$/,
            amex        : /^3[47][0-9]{13}$/,
            diners      : /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover    : /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb         : /^(?:2131|1800|35\d{3})\d{11}$/,
            enroute     : /^(?:2014|2149)\d{11}$/
        };
    
        (re.visa.test(number))? this.cardType='VISA':false;
    
        (re.mastercard.test(number))? this.cardType='MASTERCARD':false;
    
        (re.amex.test(number))? this.cardType='AMEX':false;
    
        (re.diners.test(number))? this.cardType='DINERS':false;
    
        (re.discover.test(number))? this.cardType='DISCOVER':false;
    
        (re.jcb.test(number))? this.cardType='JCB':false;
    
        (re.enroute.test(number))? this.cardType='ENROUTE':false;
        
        return this;
    }
}

export {
    Payment as default,
    Payment
}