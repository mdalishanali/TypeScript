// union types
function combine(input1: number | string | boolean, input2: number | string) {
  let res;
  if (typeof input1 === "number" && typeof input2 === "number") {
    res = input1 + input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  return res;
}

const combinedAge = combine(30, 26);
console.log(combinedAge);
const combinedName = combine("Alishan", "Ali");
console.log(combinedName);
