//fun(5)(6) can be done using currying

function reuse(f){
    return function outter(a){
        return function inner(b){
            return a+b;
        }
    }
}

let sum = reuse();
console.log("output of first method:");
console.log(sum(5)(6));



/////////////////////////////////////////////Or second method



function reuse1(f){
    return function outter(a){
        return function inner(b){
            return f(a,b);
        }
    }
}

function sum1(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function multi(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

let addition = reuse1(sum1);
let subtraction = reuse1(sub);
let multiplication = reuse1(multi);
let division = reuse1(div);

console.log("output of second method:");
console.log("addition "+addition(5)(6));
console.log("subtraction "+subtraction(10)(9));
console.log("multiplication "+multiplication(10)(10));
console.log("division "+division(10)(10));