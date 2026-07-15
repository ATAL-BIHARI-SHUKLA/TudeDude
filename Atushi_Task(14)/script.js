let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("Sum of first " + n + " natural numbers = " + sum);

let m = 10;
console.log("Table of " + m);

for (let i = 1; i <= 10; i++) {
  console.log(m + " * " + i + " = " + m * i);
}

let primeNum = 17;
let isPrime = true;

if (primeNum <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(primeNum + " is a Prime Number.");
} else {
  console.log(primeNum + " is not a Prime Number.");
}

let factorNum = 18;
console.log("Factors of " + factorNum + ":");

for (let i = 1; i <= factorNum; i++) {
  if (factorNum % i === 0) {
    console.log(i);
  }
}

let digitNum = 139;
let temp = digitNum;
let digitSum = 0;

while (temp > 0) {
  digitSum += temp % 10;
  temp = Math.floor(temp / 10);
}

console.log("Sum of digits of " + digitNum + " = " + digitSum);

let armstrongNum = 153;
temp = armstrongNum;
let armstrongSum = 0;

while (temp > 0) {
  let digit = temp % 10;
  armstrongSum += digit * digit * digit;
  temp = Math.floor(temp / 10);
}

if (armstrongSum === armstrongNum) {
  console.log(armstrongNum + " is an Armstrong Number.");
} else {
  console.log(armstrongNum + " is not an Armstrong Number.");
}
