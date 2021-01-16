import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';

const is=new Is;


class Menu{
    constructor(menu) {
        is.object(menu);
        
        this.#dominos = menu;
        this.#parse(menu);
    }

    get dominos(){
        return this.#dominos;
    }
    
    menu={
        categories:{},
        coupons:{
            products:{},
            shortCouponDescriptions:{},
            couponTiers:{},
        },
        flavors:{},
        products:{},
        sides:{},
        sizes:{},
        toppings:{},
        variants:{},
        preconfiguredProducts:{},
        shortProductDescriptions:{},
        unsupported:{
            products:{},
            options:{}
        },
        cookingInstructions:{},
        cookingInstructionGroups:{}
    }

    //add back in once menu parsing solid
    // get menu(){
    //     return this.#menu;
    // }

    #menu={
        categories:{},
        coupons:{
            products:{},
            shortCouponDescriptions:{},
            couponTiers:{},
        },
        flavors:{},
        products:{},
        sides:{},
        sizes:{},
        toppings:{},
        variants:{},
        preconfiguredProducts:{},
        shortProductDescriptions:{},
        unsupported:{
            products:{},
            options:{}
        },
        cookingInstructions:{},
        cookingInstructionGroups:{}
    }

    #dominos={}

    #parse(menu){
        is.object(menu);
        
    }
   
}

export {
    Menu as default,
    Menu
}
