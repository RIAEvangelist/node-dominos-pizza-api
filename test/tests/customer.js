import {Customer} from '../../index.js';
import {toPascal} from '../../utils/toCase.js';
import IsDominos from '../../utils/DominosTypes.js';

const isDominos=new IsDominos;

const expected={
    firstName: 'Barack',
    lastName: 'Obama',
    email: 'chief@us.gov',
    address: {
      street: '900 Clark Ave',
      streetNumber: '',
      streetName: '',
      unitType: '',
      unitNumber: '',
      city: '',
      region: '',
      postalCode: '63102',
      deliveryInstructions: ''
    },
    phone: '1-800-555-2368'
}

const runTest=async function(test){
    try{
        test.expects(`Customer populate properly from customer object`);    
        const customer = new Customer(
            {
                address: '900 Clark Ave, 63102',
                firstName: 'Barack',
                lastName: 'Obama',
                phone: '1-800-555-2368',
                email: 'chief@us.gov'
            }
        );
        
        isDominos.customer(customer);
        isDominos.address(customer.address);

        const formattedCustomer=customer.formatted;
        const formattedJSON=JSON.stringify(formattedCustomer);
        const expectedJSON=`{"FirstName":"Barack","LastName":"Obama","Email":"chief@us.gov","Address":{"street":"900 Clark Ave","streetNumber":"","streetName":"","unitType":"","unitNumber":"","city":"","region":"","postalCode":"63102","deliveryInstructions":""},"Phone":"18005552368","PhonePrefix":""}`;

        if(formattedJSON!=expectedJSON){
            console.log(formattedJSON);
            test.fail();
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