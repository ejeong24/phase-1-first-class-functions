function receivesAFunction(callback){
    callback();
}

receivesAFunction(returnsAnAnonymousFunction());

function returnsANamedFunction(){
    function namedFunction(){
        
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function () {
        
    }
}

