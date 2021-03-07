import {Payment} from '../../index.js';
import {toPascal} from '../../utils/toCase.js';
import IsDominos from '../../utils/DominosTypes.js';

const isDominos=new IsDominos;

const expected={
    type: 'CreditCard',
    amount: 10.77,
    number: '4444444444444444',
    cardType: 'VISA',
    expiration: '0112',
    securityCode: '867',
    postalCode: '93940'
};

const runTest=async function(test){
    try{
        test.expects(`Payment to properly sanitize credit card information and detect card type.`);    
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
        );

        isDominos.payment(myCard);
        
        //using to validate other card types via coverage
        const template={
            number:'5555-5555-4444-4444',
            expiration:'01/25',
            securityCode:'411',
            postalCode:'90210'
        }
        
        const masterCard=new Payment(template);
        isDominos.payment(masterCard);

        template.number='376085142819769';
        const amexCard=new Payment(template);
        isDominos.payment(amexCard);

        template.number='30036592321275';
        const dinersCard=new Payment(template);
        isDominos.payment(dinersCard);

        template.number='6011265364782840';
        const discoverCard=new Payment(template);
        isDominos.payment(discoverCard);

        template.number='3541913402489615';
        const jcbCard=new Payment(template);
        isDominos.payment(jcbCard);
        
        const formattedPayment=myCard.formatted;
        
        for(const [key,value] of Object.entries(expected)){
            const pascalKey=toPascal(key);
            
            //ensure that all myCard values match expected values
            test.compare(
                value,
                myCard[key],
                `myCard.${key} ${JSON.stringify(myCard[key])} to equal expected.${key} ${JSON.stringify(value)}`    
            );
    
            //ensure that all dominos formatted values match expected values
            test.compare(
                value,
                formattedPayment[pascalKey],
                `expected.${key} ${JSON.stringify(value)} to equal myCard.formatted.${pascalKey} ${JSON.stringify(formattedPayment[pascalKey])}`    
            );
        }

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();       
}

export {
    runTest as default,
    runTest
}