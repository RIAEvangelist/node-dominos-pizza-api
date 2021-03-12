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

class DominosAddressError extends Error{
    constructor(message){
        is.string(message);
        super();

        this.message='Dominos Address Error: '+message;

        return this;
    }
};

class DominosDateError extends Error{
    constructor(message){
        is.string(message);
        super();

        this.message='Dominos Date Error: '+message;

        return this;
    }
};

class DominosStoreError extends Error{
    constructor(message){
        is.string(message);
        super();

        this.message='Dominos Store Error: '+message;

        return this;
    }
};

class DominosProductsError extends Error{
    constructor(message){
        is.string(message);
        super();

        this.message='Dominos Products Error: '+message;

        return this;
    }
};

class DominosTrackingError extends Error{
    constructor(message){
        is.string(message);
        super();

        this.message='Dominos Tracking Error: '+message;

        return this;
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
            self.message+=` ${statusItem.Code}:'${statusItem.Message||''}',`
        }
    }

    if(response.Order.CorrectiveAction){
        for(const [key,value] 
            of Object.entries(response.Order.CorrectiveAction)
        ){
            self.message+=` ${key}:'${value}',`
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
global.DominosAddressError=DominosAddressError;
global.DominosDateError=DominosDateError;
global.DominosStoreError=DominosStoreError;
global.DominosProductsError=DominosProductsError;
global.DominosTrackingError=DominosTrackingError;