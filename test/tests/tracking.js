import {Tracking} from '../../index.js';
import IsDominos from '../../utils/DominosTypes.js';

const isDominos=new IsDominos;


const runTest=async function(test){
    try{
        test.expects(`Tracking bad number to return no orders`);    
        
        const tracking=new Tracking();

        const trackingResult=await tracking.byPhone('3108675309');
        
        isDominos.tracking(tracking);
        //console.log(tracking)
        isDominos.object(trackingResult.orders);
        isDominos.object(trackingResult.query);
        isDominos.string(trackingResult.query.Phone[0]);

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