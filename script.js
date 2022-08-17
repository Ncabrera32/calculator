//this creates my calculator object to help keep track of values
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
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
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});

function add(num1, num2){
    let result = num1 + num2
    return result
}
function subtract(num1, num2){
    let result = num1 - num2
    return result
}

function multiply(num1, num2){
    let result = num1 * num2
    return result
}

function divide(num1, num2){
    let result = num1 / num2
    return result
}

function operate(num1, operator, num2){
if(operator == "150") {
    return add(num1, num2);
    } else if(operator == "160") {
        return subtract(num1, num2);
    } else if(operator == "170") {
        return multiply(num1, num2);
    } else if(operator == "180") {
        return divide(num1, num2);
    }
}

console.log(add(12, 10));
console.log(subtract(14, 10));
console.log(multiply(12, 10));
console.log(divide(12, 6));
console.log(operate(14, 150, 10));
console.log(operate(14, 160, 10));
console.log(operate(14, 170, 10));
console.log(operate(14, 180, 7));