import IsDominos from '../utils/DominosTypes.js';
import {Menu,Image} from '../index.js';

const menu=await new Menu(4337);
const productCode=menu.menu.products[
    Object.keys(menu.menu.products)[19]
].imageCode;


const isDominos=new IsDominos;

const testStore=async function(test,storeID,lang){
    try{
        test.expects(`Image to fetch base64 product image for ${productCode}`);    
        const image=await new Image(productCode);
        
        console.log(image)

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}




const runTest=async function(test){
    
    
}

export {
    runTest as default,
    runTest
}