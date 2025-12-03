'use strict';

const vehicleObject = {
  go(speed) {
    this.speed = speed;
    console.log(`Now going at ${this.speed} MPH`);
  },
  print() {
    console.log(`The ${this.color} ${this.type} is driving ${this.speed} MPH`);
  },
  stop() {
    this.speed = 0;
    console.log(`The ${this.color} ${this.type} has stopped`);
  }
};


function Vehicle(color, type) {
  this.color = color;
  this.type = type;
  this.speed = 0;
}

Vehicle.prototype = vehicleObject;



function Plane(color, type) {
  (this.color = color), (this.type = type);
  this.speed = 0;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constuctor = Plane;

Plane.prototype.go = function (speed) {
  this.speed = speed;
  console.log(`Now flying at ${this.speed} MPH`);
};
Plane.prototype.print = function () {
  console.log(`The ${this.color} ${this.type} is flying ${this.speed} MPH`);
};


const van = new Vehicle('red', 'Minivan');
const suv = new Vehicle('black', 'suv');
const plane747 = new Plane('white and blue', '747');
const plane737 = new Plane('yellow', '737');


van.go(120);
van.print();
van.go(60);
van.print();
plane747.go(450);
plane747.print();
suv.go(55);
suv.print();
plane737.go(500);
plane737.print();
plane737.stop();
suv.stop();
