// the unknown types
// unknown ---- throws and error line --9
// but any ---- dont throw error
let userInput: any;
let userName: string;

userInput = 5;
userInput = "Alishan";
if (typeof userInput === "string") {
  userName = userInput;
}
//Type 'unknown' is not assignable to type 'string'.

console.log(userInput);
