const defaultParameters=function(self,parameters){
    if (typeof parameters !== 'object') {
        //true because there are parmas to work with,
        //but the default Object handler can't use them
        return true;
    }

    Object.assign(self,parameters);

    //false because the params have been handled and should need no further work.
    return false;
}

export {
    defaultParameters as default,
    defaultParameters
}