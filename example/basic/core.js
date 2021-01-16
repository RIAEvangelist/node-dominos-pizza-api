import {Store} from '../../index.js';

const store=await new Store(4332);

// console.dir(
//     //JSON.stringify(store.info, null, 4)
//     store.info,
//     {depth:0}
// );

//get sub category names
const menu={
    food:{}
}

const defineCategories=function(categories,menuParent){
    for(const category of categories){
        const formattedCategory=menuParent[category.Code]={};
        
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

//define food
defineCategories(
    store.menu.Categorization.Food.Categories,
    menu.food
);

console.log(menu);

// console.dir(
//     //JSON.stringify(store.menu)
//     store.menu.Categorization.Food.Categories,
//     {
//         depth:1
//     }
// );

