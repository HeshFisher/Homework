window.app = window.app||{};

window.app.counter = (function (module) {
  'use strict';
  module.counter = {
    count: 0,
    increment() {
        return this.count++;
      },
      getCount() {
        return this.count;
      },
    };
    return module;
  }(window.app.counter||{}));

