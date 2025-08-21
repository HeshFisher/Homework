"use strict";

const letters = ["a", "b", "C", "d", "E", "f", "g", "H"];

function ourEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(ourEvery(letters, (letters) => letters === letters.toUpperCase()));

console.log(ourEvery(letters, (letters) => letters === letters.toLowerCase()));

console.log(letters.every((letters) => letters === letters.toLowerCase()));

///////////////////////////////////////////////////////

function ourSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(ourSome(letters, (letters) => letters === letters.toUpperCase()));

console.log(ourSome(letters, (letters) => letters === letters.toLowerCase()));

console.log(letters.some((letters) => letters === letters.toLowerCase()));

///////////////////////////////////////////////////////

function ifOnly(array, test, action) {
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      action(array[i]);
    }
  }
}

ifOnly(letters, (letters) => letters === letters.toLowerCase(), console.log);

//////////////////////////////////////////////////////////

letters.filter(l => l === l.toUpperCase()).forEach(l => console.log(l));
