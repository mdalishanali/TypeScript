// Function Return Types and Void 
function sum(a, b) {
        return a + b;
    }
    function printRes(a) {
        // return a;
        /**Type 'number' is not assignable to type 'void'.ts(2322) */
        console.log("Res of two num is" + a);
        // it does not return succeesfull completed
    }
    var ans = printRes(sum(3, 5));
    console.log(ans);
    