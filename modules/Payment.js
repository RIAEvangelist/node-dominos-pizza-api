import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Payment extends DominosFormat{
    constructor(parameters) {
        is.string(parameters.number);
        is.string(parameters.expiration);
        is.string(parameters.securityCode);
        is.string(parameters.postalCode);
        
        if(parameters.amount){
            is.number(parameters.amount)
        }
        if(parameters.tipAmount){
            is.number(parameters.tipAmount);
        }

        super();

        parameters.number=this.#digitsOnly(parameters.number);

        this.#validate(parameters.number);
        
        if(this.cardType){
            this.number=parameters.number;
            
            //numbers only
            this.expiration=this.#digitsOnly(parameters.expiration);
            this.securityCode=parameters.securityCode;
            this.postalCode=parameters.postalCode;
            this.amount=parameters.amount||0;
            this.tipAmount=parameters.tipAmount||0;

        }

        return this;
    }
    
    type='CreditCard'
    amount=0
    tipAmount=0
    number=''
    cardType=''
    expiration=''
    securityCode=''
    postalCode=''   

    #digitsOnly(string){
        return string.replace(/\D/g,'');
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
    
        (re.visa.test(number))? this.cardType='VISA':null;
    
        (re.mastercard.test(number))? this.cardType='MASTERCARD':null;
    
        (re.amex.test(number))? this.cardType='AMEX':null;
    
        (re.diners.test(number))? this.cardType='DINERS':null;
    
        (re.discover.test(number))? this.cardType='DISCOVER':null;
    
        (re.jcb.test(number))? this.cardType='JCB':null;
    
        (re.enroute.test(number))? this.cardType='ENROUTE':null;
        
        return this;
    }
}

export {
    Payment as default,
    Payment
}