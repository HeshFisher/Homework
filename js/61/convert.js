'use strict'

function getC(f){
return (f - 32) * 5 / 9;
}

function getF(c){
    return c * 9 / 5 + 32;
}

console.log(getC(212));
console.log(getF(0));

