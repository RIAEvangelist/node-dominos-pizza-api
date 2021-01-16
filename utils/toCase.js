const toCamel=function(key){
    return key[0].toLowerCase()+key.slice(1);
}

const toPascal=function(key){
    return key[0].toUpperCase()+key.slice(1);
}

const old={toCamel}

export {
    old as default,
    toCamel,
    toPascal
}