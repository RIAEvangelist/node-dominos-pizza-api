import {Item} from '../../index.js';
import {toPascal} from '../../utils/toCase.js';
import IsDominos from '../../utils/DominosTypes.js';

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

        const formattedItem=item.formatted;

        for(const [key,value] of Object.entries(item)){
            //handle isNew One off
            const pascalKey=(key=='isNew')? 'isNew':toPascal(key);
            
            if(JSON.stringify(value)!==JSON.stringify(formattedItem[pascalKey])){
                throw new ReferenceError(`expected item.${key}:${JSON.stringify(value)} to equal item.formatted.${pascalKey}:${JSON.stringify(formattedItem[pascalKey])}`)
            }
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