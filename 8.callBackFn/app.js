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
// now it is time for callback fn
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// 30
addHandle(10, 20, (result) => {
    console.log(result);
});
