let principal = 40000;
let rate = 8;
let time = 3;
let n = 1;

let amount = principal * Math.pow(1 + rate / 100 / n, n * time);

let compoundInterest = amount - principal;

console.log("Principal Amount:", principal);
console.log("Rate of Interest:", rate + "%");
console.log("Time:", time + " years");
console.log("Final Amount:", amount.toFixed(2));
console.log("Compound Interest:", compoundInterest.toFixed(2));
