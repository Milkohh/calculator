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
  return x / y;
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

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // If an operator was clicked
    if (operators.includes(button.value)) {
      firstNumber = parseInt(display.value, 10);
      operator = button.value;
      display.value = "";
    } 
    // If the equals sign was clicked
    else if (button.value === "=") {
      secondNumber = parseInt(display.value, 10);
      display.value = operate(firstNumber, operator, secondNumber);
    }
    
    else if (button.value) {
      display.value += button.value;
    }
  });
});
