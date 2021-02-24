import {Tracking} from '../index.js';

const tracking=new Tracking();

const trackingResult=await tracking.byPhone('3869721922');

console.dir(trackingResult,{depth:1});