// union types
function combine(input1, input2) {
  var res;
  if (typeof input1 === "number" && typeof input2 === "number") {
    res = input1 + input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  return res;
}
var combinedAge = combine(30, 26);
console.log(combinedAge);
var combinedName = combine("Alishan", "Ali");
console.log(combinedName);
