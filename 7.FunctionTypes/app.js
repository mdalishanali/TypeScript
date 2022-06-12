// function types
function sum(a, b) {
        return a + b;
    }
    function printRes(a) {
        console.log("result is " + a);
    }
    var ans = printRes(sum(3, 5));
    // let combineValues:Function;
    var combineValues;
    combineValues = sum;
    console.log(combineValues(8, 8));
    