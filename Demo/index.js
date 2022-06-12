var button = document.querySelector("button");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
function addToNum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(addToNum(+num1.value, +num2.value));
});
