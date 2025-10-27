const count = window.app.counter.counter;
const counter1 = window.app.counter2.createCounter();
const counter2 = window.app.counter2.createCounter();
////////////////////////////////
for(let i = 0; i <10; i++){
    count.increment();
}
////////////////////////////////
for(let i = 0; i < 5; i++){
   counter1.increment();
}

////////////////////////////////
for(let i = 0; i < 15; i++){
   counter2.increment();
}
///////////////////////////////
console.log(count.getCount());
console.log(counter1.getCount());
console.log(counter2.getCount());
