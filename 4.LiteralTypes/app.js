// literal Types
function combine(input1, input2, resultConversion
        //this union types is literal union
        ) {
            var res;
            if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
                res = +input1 + +input2;
            }
            else {
                res = input1.toString() + input2.toString();
            }
            return res;
        }
        var combinedAges = combine(30, 26, "as-number");
        console.log(combinedAges);
        var combinedStringAges = combine("30", "26", "as-number");
        console.log(combinedStringAges);
        var combinedNames = combine("JOHN", "DOE", "as-text");
        console.log(combinedNames);
        