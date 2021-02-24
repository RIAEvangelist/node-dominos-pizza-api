import {Base64File} from 'js-base64-file';
import urls from '../utils/urls.js';

class Image extends Base64File{
    constructor(productCode) {
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