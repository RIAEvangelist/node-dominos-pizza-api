//all of these classes will be globally available

import Is from "strong-type";

const is=new Is;

class DominosValidationError extends Error{
    constructor(response){
        is.object(response);
        super();

        //console.log(response)

        this.message='Dominos Order Validation failed with the following information:';
        
        return createErrorMessage(this,response);
    }
};

class DominosPriceError extends Error{
    constructor(response){
        is.object(response);
        super();

        //console.log(response)

        this.message='Dominos Order Pricing failed with the following information:';

        return createErrorMessage(this,response);
    }
};

class DominosPlaceOrderError extends Error{
    constructor(response){
        is.object(response);
        super();

        //console.log(response)

        this.message='Dominos Place Order failed with the following information:';

        return createErrorMessage(this,response);
    }
};

const createErrorMessage=function(self,response){
    is.object(self);
    is.object(response);

    //console.dir(response,{depth:2})

    if(response.Order.StatusItems){
        for(const [i,statusItem] 
            of Object.entries(response.Order.StatusItems)
        ){
            self.message+=` ${statusItem.Code},`
        }
    }

    for(const [i,statusItem] 
        of Object.entries(response.StatusItems)
    ){
        self.message+=` ${statusItem.Code},`
    }

    return self;
}

global.DominosValidationError=DominosValidationError;
global.DominosPriceError=DominosPriceError;
global.DominosPlaceOrderError=DominosPlaceOrderError;
