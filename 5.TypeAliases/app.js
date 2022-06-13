"use strict";
// this on type aliase of literal types
function combine(input1, input2, resultConversion
//this union types is literal union
) {
    let res;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("JOHN", "DOE", "as-text");
console.log(combinedNames);
