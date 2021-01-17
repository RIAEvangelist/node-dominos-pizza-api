import defaultParameters from './defaultParameters.js';
import Is from 'strong-type';
import {toCamel} from '../utils/toCase.js';

const is=new Is;
const weakIs=new Is(false);

class Menu{
    constructor(menu) {
        is.object(menu);
        
        this.#dominos = menu;
        this.#parse(menu);
    }

    get dominos(){
        return this.#dominos;
    }
    
    get parsed(){
        return this.#menu;
    }

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
        cooking:{
            instructions:{},
            instructionGroups:{}
        }
    }

    #dominos={}

    #parse(menu){
        is.object(menu);

        //define categories
        for(const [categoryKey, dominosCategory] of Object.entries(this.#dominos.Categorization)){
            const category= this.#menu.categories[toCamel(categoryKey)]={};
            
            this.#defineCategories(
                dominosCategory.Categories,
                category
            );
        }

        this.#allParentAndGrandDescendantsToCamel(this.#dominos.Flavors,this.#menu.flavors);
        this.#allParentAndGrandDescendantsToCamel(this.#dominos.Sides,this.#menu.sides);
        this.#allParentAndGrandDescendantsToCamel(this.#dominos.Sizes,this.#menu.sizes);
        this.#allParentAndGrandDescendantsToCamel(this.#dominos.Toppings,this.#menu.toppings);

        this.#allGrandDescendantsToCamel(this.#dominos.Products,this.#menu.products);
        this.#allGrandDescendantsToCamel(this.#dominos.PreconfiguredProducts,this.#menu.preconfiguredProducts);
        this.#allGrandDescendantsToCamel(this.#dominos.Coupons,this.#menu.coupons.products);
        this.#allGrandDescendantsToCamel(this.#dominos.Variants,this.#menu.variants);
        this.#allGrandDescendantsToCamel(this.#dominos.ShortProductDescriptions,this.#menu.shortProductDescriptions);
        this.#allGrandDescendantsToCamel(this.#dominos.UnsupportedProducts,this.#menu.unsupported.products);
        this.#allGrandDescendantsToCamel(this.#dominos.UnsupportedOptions,this.#menu.unsupported.options);
        this.#allGrandDescendantsToCamel(this.#dominos.CookingInstructions,this.#menu.cooking.instructions);
        this.#allGrandDescendantsToCamel(this.#dominos.CookingInstructionGroups,this.#menu.cooking.instructionGroups);

        this.#allDescendantsToCamel(this.#dominos.CouponTiers,this.#menu.coupons.couponTiers);
        this.#allDescendantsToCamel(this.#dominos.ShortCouponDescriptions,this.#menu.coupons.shortCouponDescriptions);
        
    }

    #defineCategories(categories,menuParent){
        for(const category of categories){
            const formattedCategory=menuParent[
                toCamel(category.Code)
            ]={};

            if(category.Code.length){
                formattedCategory.code=category.Code;
            }
    
            if(category.Name.length){
                formattedCategory.name=category.Name;
            }else{
                //if the name is missing populate it with the code
                formattedCategory.name=category.Code;
            }
    
            if(category.Description.length){
                formattedCategory.description=category.Description;
            }
    
            formattedCategory.hasSubCategories=false;
    
            if(category.Categories.length){
                formattedCategory.hasSubCategories=true;
                formattedCategory.subCategories={};
    
                this.#defineCategories(
                    category.Categories,
                    formattedCategory.subCategories
                );
            }
    
            formattedCategory.hasProducts=false;
    
            if(category.Products.length){
                formattedCategory.hasProducts=true;
                formattedCategory.products=category.Products;
            }
    
            formattedCategory.hasTags=false;

        }
    }
    
    #camelCaseKeys(dominos,menu){
        for(const [key,value] of Object.entries(dominos)){
            //console.log(key);
            menu[toCamel(key)]=dominos[key];
        }
    }
    
    #allDescendantsToCamel(dominos,menu){
        if(weakIs.object(dominos)){
            for(const [key,value] of Object.entries(dominos)){
                if(
                    weakIs.array(value)||
                    !weakIs.object(value)
                ){
                    menu[toCamel(key)]=value;
                    continue;
                }
                menu[toCamel(key)]={};
                const menuChild=menu[toCamel(key)];
                this.#camelCaseKeys(value,menuChild);
                this.#allDescendantsToCamel(value,menuChild);
            }
        }
    }
    
    #allGrandDescendantsToCamel(dominos,menu){
        if(weakIs.object(dominos)){
            //console.log(menu);
            for(const [key,value] of Object.entries(dominos)){
                menu[key]={};
                const menuChild=menu[key];
                this.#allDescendantsToCamel(value,menuChild);
            }
        }
    }
    
    #allParentAndGrandDescendantsToCamel(dominos,menu){
        if(weakIs.object(dominos)){
            //console.log(menu);
            if(weakIs.object(dominos)){
                this.#camelCaseKeys(dominos,menu);
                for(const [key,value] of Object.entries(dominos)){
                    const menuChild=menu[toCamel(key)]={};
                    
                    this.#allGrandDescendantsToCamel(value,menuChild);
                }
            }
        }
    }
   
}

export {
    Menu as default,
    Menu
}
