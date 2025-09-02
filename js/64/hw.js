"use strict";

const dayOfWeek = (function () {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Shabbos Kodesh (Saturday)",
  ];

  return {
    getDay(index) {
      return days[index - 1];
    },
    getIndex: function (day) {
      return (
        days.findIndex((d) => d.toLowerCase().includes(day.toLowerCase())) + 1
      );
    },
  };
}());

console.log(dayOfWeek.getDay(7));

console.log(dayOfWeek.getIndex("shaB"));








const intrestCal = (function () {
  let year;
  let rate;

  function setRate(r) {
    rate = r;
  }
  function setYears(y) {
    year = y;
  }
  function calculateIntrest(principal) {
    let total = principal;
    for (let i = 0; i < year; i++) {
      total += total * rate; 
    }
    //return principal * year * rate;
    return total - principal;
  }
  return {
    setRate,
    setYears,
    calculateIntrest,
  };
}());

intrestCal.setRate(0.2);
intrestCal.setYears(4);
console.log(intrestCal.calculateIntrest(100));
