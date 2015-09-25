'use strict';


var MenuItem = function(menuData) {
    if(!menuData) menuData={};

    this.menuData = menuData;
    this.categories = [];
}

MenuItem.prototype.setCategories = function(categories) {
    return this.categories = categories;
}

MenuItem.prototype.getCategories = function() {
    return this.categories;
}

MenuItem.prototype.getName = function() {
    return this.menuData.Name;
}

MenuItem.prototype.getDescription = function() {
    return this.menuData.Description;
}

MenuItem.prototype.getCode = function() {
    return this.menuData.Code;
}

module.exports = MenuItem;
