function outerFunction(){
    var outerVariable = "I am from outer";

    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}

var closureFunction = outerFunction();
console.dir(closureFunction);
