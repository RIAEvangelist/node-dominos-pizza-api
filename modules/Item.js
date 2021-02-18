import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Item extends DominosFormat{
    constructor(parameters) {
        defaultParameters(this,parameters);
    }

    code=''
    qty=1
    options={}   
}

export {
    Item as default,
    Item
};