import {Store} from '../../index.js';
import pascalToCamel from '../../utils/pascalToCamel.js';

const store=await new Store(4332);

// console.dir(
//     //JSON.stringify(store.info, null, 4)
//     store.info,
//     {depth:0}
// );

//get sub category names
const menu={
    categories:{}
}

const defineCategories=function(categories,menuParent){
    for(const category of categories){
        const formattedCategory=menuParent[
            pascalToCamel(category.Code)
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
            formattedCategory.subCategories=category.Categories;
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
for(const [categoryKey, dominosCategory] of Object.entries(store.menu.Categorization)){
    const category= menu.categories[pascalToCamel(categoryKey)]={};
    
    defineCategories(
        dominosCategory.Categories,
        category
    );
}


console.dir(menu,{depth:1});
console.dir(store.menu.Coupons,{depth:1});

// console.dir(
//     //JSON.stringify(store.menu)
//     store.menu.Categorization.Food.Categories,
//     {
//         depth:1
//     }
// );

