import Is from 'strong-type';
import urls from '../utils/urls.js';
import {toCamel} from '../utils/toCase.js';
import {get} from '../utils/api-json.js';

const is=new Is;
const weakIs=new Is(false);

class Menu{
    constructor(storeID,lang='en') {
        return this.#getMenu(storeID,lang);
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
        cooking:{
            instructions:{},
            instructionGroups:{}
        }
    }

    get dominosAPIResponse(){
        return this.#dominosAPIResponse; 
    }

    set dominosAPIResponse(value){
        is.object(value);

        return this.#dominosAPIResponse=value;
    }

    #dominosAPIResponse={}

    async #getMenu(storeID,lang){
        this.dominosAPIResponse=await get(
            urls.store.menu
                .replace('${storeID}', storeID)
                .replace('${lang}', lang)
        );

        this.#parse(this.dominosAPIResponse);

        return this;
    };

    #parse(menu){
        is.object(menu);

        //define categories
        for(const [categoryKey, dominosCategory] of Object.entries(this.dominosAPIResponse.Categorization)){
            const category= this.menu.categories[toCamel(categoryKey)]={};
            
            this.#defineCategories(
                dominosCategory.Categories,
                category
            );
        }

        this.#allParentAndGrandDescendantsToCamel(this.dominosAPIResponse.Flavors,this.menu.flavors);
        this.#allParentAndGrandDescendantsToCamel(this.dominosAPIResponse.Sides,this.menu.sides);
        this.#allParentAndGrandDescendantsToCamel(this.dominosAPIResponse.Sizes,this.menu.sizes);
        this.#allParentAndGrandDescendantsToCamel(this.dominosAPIResponse.Toppings,this.menu.toppings);

        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.Products,this.menu.products);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.PreconfiguredProducts,this.menu.preconfiguredProducts);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.Coupons,this.menu.coupons.products);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.Variants,this.menu.variants);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.ShortProductDescriptions,this.menu.shortProductDescriptions);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.UnsupportedProducts,this.menu.unsupported.products);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.UnsupportedOptions,this.menu.unsupported.options);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.CookingInstructions,this.menu.cooking.instructions);
        this.#allGrandDescendantsToCamel(this.dominosAPIResponse.CookingInstructionGroups,this.menu.cooking.instructionGroups);

        this.#allDescendantsToCamel(this.dominosAPIResponse.CouponTiers,this.menu.coupons.couponTiers);
        this.#allDescendantsToCamel(this.dominosAPIResponse.ShortCouponDescriptions,this.menu.coupons.shortCouponDescriptions);
        
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
