//all of these classes will be globally available

class DominosValidationError extends Error{
    constructor(validationResponse){
        super();

        //console.log(validationResponse)

        this.message='Dominos Order Validation failed with the following information:';
        for(const [i,statusItem] 
            of Object.entries(validationResponse.Order.StatusItems)
        ){
            this.message+=` ${statusItem.Code},`
        }

        for(const [i,statusItem] 
            of Object.entries(validationResponse.StatusItems)
        ){
            this.message+=` ${statusItem.Code},`
        }
    }
};

global.DominosValidationError=DominosValidationError;
