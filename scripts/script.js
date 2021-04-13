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
