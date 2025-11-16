(function () {
  'use strict';

  function createBank() {
    return {
      balance: 1000,
      performTransaction(deposit) {
        this.balance += deposit;
        console.log(this.balance);
      },
    };
  }
const checking = createBank();

checking.performTransaction(55);
  /////////////////////////////////////////////////
const savings = createBank();

  function withdraw(withdraw) {
  this.balance -= withdraw;
    console.log(this.balance);
  }

  function deposit(deposit) {
  this.balance += deposit;
    console.log(this.balance);
  }

  withdraw.call(savings,15);
  withdraw.call(checking,15);

//////////////////////////////////////


const depositFifty = deposit.bind(savings,50);
depositFifty();
depositFifty();
}());
