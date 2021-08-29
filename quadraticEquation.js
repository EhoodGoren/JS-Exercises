"use strict";
const a = 1;
const b = -1;
const c = -1;
let solutionA = 0;
let solutionB = 0;
solutionA = (-b + Math.sqrt(b*b-4*a*c)) / (2*a);
solutionB = (-b - Math.sqrt(b*b-4*a*c)) / (2*a);
console.log(solutionA, solutionB)