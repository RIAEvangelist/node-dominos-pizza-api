import Is from 'strong-type';

const is=new Is;

const toCamel=function(key){
    is.string(key);
    return key[0].toLowerCase()+key.slice(1);
}

const toPascal=function(key){
    is.string(key);
    return key[0].toUpperCase()+key.slice(1);
}

const pascalObjectKeys=function(target){
    const pascalFormat={};
        
    for(const [key,value] of Object.entries(target)){
        const pascalKey=toPascal(key);
        
        pascalFormat[pascalKey]=value;
    }

    return pascalFormat;
}

const camelObjectKeys=function(target){
    const camelFormat={};
        
    for(const [key,value] of Object.entries(target)){
        const camelKey=toCamel(key);
        
        camelFormat[camelKey]=value;
    }

    return camelFormat;
}


const old={toCamel,toPascal,pascalObjectKeys,camelObjectKeys}

export {
    old as default,
    toCamel,
    toPascal,
    pascalObjectKeys,
    camelObjectKeys
}