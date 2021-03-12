import {Tracking} from 'dominos';

const tracking=new Tracking();

try{
    const trackingResult=await tracking.byPhone('8318675309');
}catch(err){
    console.trace(err);
}

console.dir(trackingResult,{depth:8});