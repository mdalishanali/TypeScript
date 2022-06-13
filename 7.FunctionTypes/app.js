"use strict";
// function types
function sum(a, b) {
    return a + b;
}
function printRes(a) {
    console.log("result is " + a);
}
let ans = printRes(sum(3, 5));
// let combineValues:Function;
let combineValues;
combineValues = sum;
console.log(combineValues(8, 8));
