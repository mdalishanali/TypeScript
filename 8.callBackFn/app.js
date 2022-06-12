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
    // now it is time for callback fn
    function addHandle(n1, n2, cb) {
        var result = n1 + n2;
        cb(result);
    }
    addHandle(10, 20, function (result) {
        console.log(result);
    });
    