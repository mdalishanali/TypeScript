function sum(a, b, showRes, phrase) {
  throw new Error("alishan send error");
  var res = a + b;
  if (showRes) console.log(phrase + res);
  else return a + b;
}
var num1 = 5;
var num2 = 10;
var showRes = true;
var resultPhrase = "Result is : ";
var ans = sum(num1, num2, showRes, resultPhrase);
// typescript help in the development mode
/**
     * Argument of type 'string' is not assignable to parameter of type 'number'.
    
    8 const ans = sum(num1, num2);
     */
