const pascalToCamel=function(key){
    return key[0].toLowerCase()+key.slice(1);
}

export {
    pascalToCamel as default,
    pascalToCamel
}