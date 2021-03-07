import DominosFormat from "./DominosFormat.js"

class AmountsBreakdown extends DominosFormat{
    constructor(params){
        super();
        this.init=params;
        return this;
    }

    foodAndBeverage='0.00'
    adjustment='0.00'
    surcharge='0.00'
    deliveryFee='0.00'
    tax=0
    tax1=0
    tax2=0
    tax3=0
    tax4=0
    tax5=0
    bottle=0
    customer=0
    roundingAdjustment=0
    cash=0
    savings='0.00'
  }

  export {
      AmountsBreakdown as default,
      AmountsBreakdown
  }