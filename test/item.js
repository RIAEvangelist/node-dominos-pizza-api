import {Item} from '../index.js';
import IsDominos from '../utils/DominosTypes.js';

const isDominos=new IsDominos;

const itemCode='P_14SCREEN';

const runTest=async function(test){
    try{
        test.expects(`Item to populate proper itemCode`);    
        const pepperoniPizza=new Item(
            {
                code:itemCode
            }
        )
        
        isDominos.item(pepperoniPizza);

        if(pepperoniPizza.code!=itemCode){
            throw new ReferenceError(`Expected Item Code of '${pepperoniPizza.code}' to be ${itemCode}.`);
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