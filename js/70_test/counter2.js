window.app = window.app||{};

window.app.counter2 = (function (module) {
  'use strict';
  let created = 0;
  module.createCounter = function createCounter() {
    let count = 0;
    return{
      increment(){
        return count++;
      },
      getCount(){
        return count;
      },
      amountCreated(){
       return console.log(`you have created ${created++} counters`);
      }
    };
  };
  return module;
}(window.app.counter2||{}));



