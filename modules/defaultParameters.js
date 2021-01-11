const defaultParameters=function(parameters){
    
    if(!parameters){
        //false because there are no parmas to work with.
        return false;
    }

    if (typeof parameters !== 'object') {
        //true because there are parmas to work with,
        //but the default Object handler can't use them
        return true;
    }

    for(const [key,value] of Object.entries(parameters)){
        //console.log(key,value)
        
        //console.log(`${key} in ${this} = ${key in this}`);

        if(!key in this){
            continue;
        }

        this[key]=value;
    }

    //false because the params have been handled and should need no further work.
    return false;
}

export {
    defaultParameters as default,
    defaultParameters
}