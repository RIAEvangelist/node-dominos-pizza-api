import {Menu,Image} from '../../index.js';
import IsDominos from '../../utils/DominosTypes.js';

const isDominos=new IsDominos;

const menu=await new Menu(4337);
const productCode=menu.menu.products[
    Object.keys(menu.menu.products)[19]
].imageCode;
const minSize=10e3; //10k

const runTest=async function(test){
    try{
        test.expects(`Image to fetch base64 product image for ${productCode}`);    
        const image=await new Image(productCode);
        
        isDominos.image(image);

        if(image.base64Image.length<minSize){
            throw new RangeError(`image size of ${image.base64Image.length} is smaller than the expected minimum size of ${minSize}.`)
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