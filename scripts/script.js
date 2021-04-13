function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    throw new Error("Can't divide by zero!");
  }
  return Math.round(x / y * 100) / 100;
}

function operate(x, operator, y) {
  let result;

  switch (operator) {
    case "+": {
      result = add(x, y);
      break;
    }

    case "-": {
      result = subtract(x, y);
      break;
    }

    case "*": {
      result = multiply(x, y);
      break;
    }

    case "/": {
      result = divide(x, y);
      break;
    }

    default: {
      throw new Error("Invalid operator " + operator + " found!");
    }
  }

  return result;
}

const display = document.getElementById("display-text");
display.value = "";

const buttons = document.getElementById("keypad").querySelectorAll("button");

const operators = ["*", "+", "-", "/"];

let firstNumber;
let secondNumber;
let operator = "";

let clearInput = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // If an operator was clicked
    if (operators.includes(button.value)) {
      if (firstNumber === undefined) {
        firstNumber = parseInt(display.value, 10);
      } else {
        secondNumber = parseInt(display.value, 10);
        firstNumber = operate(firstNumber, operator, secondNumber);
      }

      operator = button.value;
      clearInput = true;
    }
    // If the equals sign was clicked
    else if (button.value === "=") {
      secondNumber = parseInt(display.value, 10);
      display.value = operate(firstNumber, operator, secondNumber);

      firstNumber = undefined;
      secondNumber = undefined;
      clearInput = true;
    }
    // The clear button was pressed
    else if (button.value === "clear") {
      display.value = "";
      firstNumber = undefined;
      secondNumber = undefined;
    } 
    // A number was pressed
    else if (button.value) {
      if (clearInput) {
        display.value = "";
        clearInput = !clearInput;
      }
      display.value += button.value;
    }
  });
});
