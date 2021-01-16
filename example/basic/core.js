import {Store} from '../../index.js';
import {toCamel} from '../../utils/toCase.js';
import Is from 'strong-type';

const weakIs=new Is(false);
const store=await new Store(4332);

// console.dir(
//     //JSON.stringify(store.info, null, 4)
//     store.info,
//     {depth:0}
// );

const defineCategories=function(categories,menuParent){
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

            defineCategories(
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

        if(category.Tags.length){
            formattedCategory.hasTags=true;
            formattedCategory.tags=category.Tags;
        }
    }
}   

//define categories
for(const [categoryKey, dominosCategory] of Object.entries(store.menu.dominos.Categorization)){
    const category= store.menu.menu.categories[toCamel(categoryKey)]={};
    
    defineCategories(
        dominosCategory.Categories,
        category
    );
}

const camelCaseKeys=function(dominos,menu){
    for(const [key,value] of Object.entries(dominos)){
        //console.log(key);
        menu[toCamel(key)]=dominos[key];
    }
}

const allDescendantsToCamel=function(dominos,menu){
    if(weakIs.object(dominos)){
        for(const [key,value] of Object.entries(dominos)){
            if(!weakIs.object(value)){
                menu[toCamel(key)]=value;
                continue;
            }
            menu[toCamel(key)]={};
            const menuChild=menu[toCamel(key)];
            camelCaseKeys(value,menuChild);
            allDescendantsToCamel(value,menuChild);
        }
    }
}

//
//
//organize the below object keys to camel case as follows
// {
//     camel:{
//         LEAVEIT:{
//             any decendant keys camel
//         }
//     }
// }

//flavors
//console.dir(store.menu.dominos.Flavors,{depth:2});
camelCaseKeys(store.menu.dominos.Flavors,store.menu.menu.flavors);
//console.log(store.menu.menu.flavors);

//products
//console.dir(store.menu.dominos.Products,{depth:2});

//sides
//console.dir(store.menu.dominos.Sides,{depth:2});

//Sizes
//console.dir(store.menu.dominos.Sizes,{depth:2});

//Toppings
//console.dir(store.menu.dominos.Toppings,{depth:3});

//Variants
//console.dir(store.menu.dominos.Variants,{depth:2});

//PreconfiguredProducts
//console.dir(store.menu.dominos.PreconfiguredProducts,{depth:2});

//
//
//organize the below object keys to camel case as follows
// {
//     LEAVEIT:{
//         all descendants camel
//     }
// }

//coupons
//console.dir(store.menu.dominos.Coupons,{depth:2});

//ShortProductDescriptions
//console.dir(store.menu.dominos.ShortProductDescriptions,{depth:2});

//ShortCouponDescriptions
//console.dir(store.menu.dominos.ShortCouponDescriptions,{depth:2});

//UnsupportedProducts
//console.dir(store.menu.dominos.UnsupportedProducts,{depth:2});

//UnsupportedOptions
//console.dir(store.menu.dominos.UnsupportedOptions,{depth:2});

//CookingInstructions
//console.dir(store.menu.dominos.CookingInstructions,{depth:2});

//CookingInstructionGroups
//console.dir(store.menu.dominos.CookingInstructionGroups,{depth:2});

//
//
//organize the below object keys to camel case as follows
// {
//     all descendants camel
// }


//CouponTiers
//console.dir(store.menu.dominos.CouponTiers,{depth:3});
allDescendantsToCamel(store.menu.dominos.CouponTiers,store.menu.menu.coupons.couponTiers);

console.dir(store.menu.menu.coupons.couponTiers,{depth:3});

// console.dir(
//     //JSON.stringify(store.menu)
//     store.menu.menu.Categorization.Food.Categories,
//     {
//         depth:1
//     }
// );

