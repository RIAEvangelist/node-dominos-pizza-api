import {Item} from '../index.js';
import IsDominos from '../utils/DominosTypes.js';

const isDominos=new IsDominos;

const itemCode='P_14SCREEN';

const runTest=async function(test){
    try{
        test.expects(`Item to populate proper itemCode`);    
        const item=new Item(
            {
                code:itemCode
            }
        )
        
        isDominos.item(item);

        if(item.code!=itemCode){
            throw new ReferenceError(`Expected Item Code of '${item.code}' to be ${itemCode}.`);
        }

        const formattedItem=address.formatted;

        for(const [key,value] of Object.entries(expected)){
            const pascalKey=toPascal(key);
            
            //ensure that all item values match expected values
            test.compare(
                value,
                item[key],
                `item.${key} ${JSON.stringify(item[key])} to equal expected.${key} ${JSON.stringify(value)}`    
            );

            //ensure that all dominos formatted values match expected values
            test.compare(
                value,
                formattedItem[pascalKey],
                `expected.${key} ${JSON.stringify(value)} to equal item.formatted.${pascalKey} ${JSON.stringify(formattedItem[pascalKey])}`    
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