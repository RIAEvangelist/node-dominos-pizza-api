import Is from 'strong-type';
import DominosFormat from './DominosFormat.js';

const is=new Is;

class Item extends DominosFormat{
    constructor(parameters) {
        super();
        this.init=parameters;

        return this;
    }

    code=''
    qty=1
    options={}   
}

export {
    Item as default,
    Item
};