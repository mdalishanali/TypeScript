const button = document.querySelector("button")! as HTMLButtonElement;
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;

function addToNum(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", function () {
  console.log(addToNum(+num1.value, +num2.value));
});
