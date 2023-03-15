const num1 = parseFloat(prompt("Enter first number: "));
const op = prompt("Enter operator (+, -, *, /): ");
const num2 = parseFloat(prompt("Enter second number: "));

let result;
switch(op) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
    process.exit(1);
}

console.log("Result:", result);
