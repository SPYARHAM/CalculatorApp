// let operator = alert("Select any operator");
// let number1 = alert("Enter First Number");
// let number2 = alert("Enter Second Number");

// switch (operator) {
//   case "+":
//     alert(number1 + number2);
//     break;
//   case "-":
//     alert(number1 - number2);
//     break;
//   case "*":
//     alert(number1 * number2);
//     break;
//   case "/":
//     alert(number1 / number2);
//     break;
//   default:
//     alert("Invalid Operator");
//     break;
// }
let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);
let string = "";

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
