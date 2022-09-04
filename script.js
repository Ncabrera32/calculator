//this creates my calculator object to help keep track of values
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }

function inputDecimal(dot) {
  // If the `displayValue` property does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

// to update the display I need to make a function in that funciton I need to name my const and is "display" 
// calculator-screen is selecting my display for the calculator
// calculator.displayValue pulls 0 from my calculator object 
// adding .value to the end of my const of display, inputs the 0 from calculator.displayValue into the input field for my calculator screen  
function updateDisplay(){
const display = document.querySelector('.calculator-screen');
display.value = calculator.displayValue
}
updateDisplay();

//defining calculator-keys as keys with document querySelector attached
//i want keys to have an event listener for a click and then have an event happen
//with the => syntax we are telling the code we want run a function.... but I still could write a function.
//so we create a const of target to be the event we want to executed.
//to extract these events i need to put target in {} to use destructuring to pass the object { target } as a function
//after reading about arrow functions you need to use "return", {braces}, and (parentheses)
//then we can start our if checks
//1st if check is that if target does not match(selector) then return nothing
//have to use matches() because target is set as an element in the HTML as "keys" and thats the event we are listening for
//for the rest of the checks the target event is checking the calculator-keys for the correct class
//then asking to print in console the class and value listed in the button html
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
		updateDisplay();
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});