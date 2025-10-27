(function () {
  'use strict';

  const numbers = [1, 2, 4, 8, 16];

  function ourMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      const temp = callback(array[i]);
      newArray.push(temp);
    }
    return newArray;
  }

  function add(number) {
    return number * 2;
  }

  const returnedArray = ourMap(numbers,add);
  console.log(numbers);
  console.log(returnedArray);
}());
