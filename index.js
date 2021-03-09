let result = "0";
let active = "";
let operator;

let resultButton = document.querySelector("#result");

let button1 = document.querySelector("#button1");
button1.addEventListener("click", (event) => {
  active = active + "1";
  assignResultButton(active);
});
let button2 = document.querySelector("#button2");
button2.addEventListener("click", (event) => {
  active = active + "2";
  assignResultButton(active);
});
let button3 = document.querySelector("#button3");
button3.addEventListener("click", (event) => {
  active = active + "3";
  assignResultButton(active);
});
let button4 = document.querySelector("#button4");
button4.addEventListener("click", (event) => {
  active = active + "4";
  assignResultButton(active);
});
let button5 = document.querySelector("#button5");
button5.addEventListener("click", (event) => {
  active = active + "5";
  assignResultButton(active);
});
let button6 = document.querySelector("#button6");
button6.addEventListener("click", (event) => {
  active = active + "6";
  assignResultButton(active);
});
let button7 = document.querySelector("#button7");
button7.addEventListener("click", (event) => {
  active = active + "7";
  assignResultButton(active);
});
let button8 = document.querySelector("#button8");
button8.addEventListener("click", (event) => {
  active = active + "8";
  assignResultButton(active);
});
let button9 = document.querySelector("#button9");
button9.addEventListener("click", (event) => {
  active = active + "9";
  assignResultButton(active);
});
let button0 = document.querySelector("#button0");
button0.addEventListener("click", (event) => {
  active = active + "0";
  assignResultButton(active);
});
let buttonDivide = document.querySelector("#buttonDivide");
buttonDivide.addEventListener("click", (event) => {
  // perform math if needed
  result = parseInt(result);
  active = parseInt(active);
  if (result !== 0) {
    console.log(`result: ${result}`, typeof result);
    console.log(`active: ${active}`, typeof active);
    result = result / active;
    active = "";
    console.log(`result: ${result}`);
    assignResultButton(result);
  } else {
    result = active;
    assignResultButton(result);
    active = "";
  }
});
let buddtonSubtract = document.querySelector("#buttonSubtract");
let buttonAdd = document.querySelector("#buttonAdd");
buttonAdd.addEventListener("click", (event) => {
  // send active to result
  result = active;
  // clear active
  active = "";
  // set operator flag
  operator = "add";
});
let buttonMultiply = document.querySelector("#buttonMultiply");
let equals = document.querySelector("#buttonEquals");
equals.addEventListener("click", (event) => {
  result = parseInt(result);
  active = parseInt(active);
  switch (operator) {
    case "add":
      result = result + active;
      result = result.toString();
      assignResultButton(result);
      break;
    default:
      break;
  }
});

let buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener("click", (event) => {
  result = "0";
  active = "";
  assignResultButton(result);
});

function assignResultButton(string) {
  resultButton.innerText = string;
}

document.addEventListener("click", (event) => {
  console.log(`result: ${result}`, typeof result);
  console.log(`active: ${active}`, typeof active);
});
