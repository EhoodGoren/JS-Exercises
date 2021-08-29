"use strict";
const num = 123;
let sum = 0;
sum = num%10 + (Math.floor(num/10)%10) + (Math.floor(num/100)%10);
console.log(sum);