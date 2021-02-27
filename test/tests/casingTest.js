import {toCamel,toPascal} from '../../utils/toCase.js';

const testToCase=function(test,camel,pascal){
    try{
        test.expects(`toCamel and toPascal to be able to swap cases of ${camel} and ${pascal}`);    
        
        test.compare(
            camel,
            toCamel(pascal),
            `expects ${camel} and ${toCamel(pascal)} to be the same`
        );

        test.compare(
            pascal,
            toPascal(camel),
            `expects ${pascal} and ${toPascal(camel)} to be the same`
        );

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}


const runTest=async function(test){
    testToCase(test,'camelPascal','CamelPascal');
}

export {
    runTest as default,
    runTest
}