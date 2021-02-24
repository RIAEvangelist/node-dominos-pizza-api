import {Tracking} from '../index.js';
import {Is} from 'strong-type';

const is=new Is;


const runTest=async function(test){
    try{
        test.expects(`Tracking bad number to return no orders`);    
        
        const tracking=new Tracking();

        const trackingResult=await tracking.byPhone('3108675309');
        
        is.object(trackingResult.orders);
        is.object(trackingResult.query);
        is.string(trackingResult.query.Phone);

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