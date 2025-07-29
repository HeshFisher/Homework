"use strict";

function getC(f) {
  return ((f - 32) * 5) / 9;
}

function getF(c) {
  return (c * 9) / 5 + 32;
}

let tempF = prompt("Enter a temperature in Fahrenheit:");
alert(`the temperature in Celsius is ${getC(tempF)}`);

let tempC = prompt("Enter a temperature in Celsius:");
alert(`the temperature in Fahrenheit is ${getF(tempC)}`);

function multiply(a, b) {
  return console.log(a * b);
}

multiply(14,4);
multiply(6,4);

function getMultiplier() {
  return function (a, b) {
    return console.log(a * b);
  };
}

let theMultiplier = getMultiplier();
theMultiplier(4,3);
theMultiplier(9,4);


function getBetterMultiplier(a) {
  return function (b) {
    return a * b;
  };
}

const betterMultiplierThree = getBetterMultiplier(3);

console.log(betterMultiplierThree(4));


