const defaultParameters=function(parameters){
    if (typeof parameters !== 'object') {
        //true because there are parmas to work with,
        //but the default Object handler can't use them
        return true;
    }

    for(const [key,value] of Object.entries(parameters)){
        //console.log(key,value)
        
        //console.log(`${key} in ${this} = ${key in this}`);

        this[key]=value;
    }

    //false because the params have been handled and should need no further work.
    return false;
}

export {
    defaultParameters as default,
    defaultParameters
}