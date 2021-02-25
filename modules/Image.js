import {Base64File} from 'js-base64-file';
import urls from '../utils/urls.js';
import Is from 'strong-type';

const is=new Is;

class Image extends Base64File{
    constructor(productCode) {
        is.string(productCode);
        
        super();
        
        return this.#fetchImage(urls.images.replace('${productCode}',productCode));
    } 

    async #fetchImage(url){
        this.base64Image=await this.loadRemote(url,'');

        return this;
    }
}

export {
    Image as default,
    Image
};