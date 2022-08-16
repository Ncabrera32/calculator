
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