'use strict';


var MenuCategory = function(menuData,parentCategory) {
    if(!menuData) menuData={};

    this.menuData = menuData;
    this.subcategories = [];
    this.products = [];
    this.parent = parentCategory;
}

MenuCategory.prototype.getSubcategories = function() {
    return this.subcategories;
}

MenuCategory.prototype.getName = function() {
    return this.menuData.Name;
}

MenuCategory.prototype.getDescription = function() {
    return this.menuData.Description;
}

MenuCategory.prototype.getCode = function() {
    return this.menuData.Code;
}

MenuCategory.prototype.getCategoryPath = function() {
    var result = this.parent !== undefined ? this.parent.getCategoryPath().concat([this.menuData.Code]) : [this.menuData.Code];
    return result;
}

MenuCategory.prototype.getProducts = function() {
    return this.products;
}

module.exports = MenuCategory;
