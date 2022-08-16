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