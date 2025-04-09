function performOperation(operator) {
    // Get input values from the form
    let num1 = parseFloat(document.calculator.num1.value);
    let num2 = parseFloat(document.calculator.num2.value);
    let result = 0;
    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText =
    
    "Please enter valid numbers!";
    
    return;
    }
    // Perform the operation based on the operator
    switch (operator) {
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
    // Handle division by zero error
    if (num2 === 0) {
    document.getElementById('result').innerText
    
    = "Error: Division by zero!";
    return;
    } else {
    result = num1 / num2;
    
    }
    break;
    default:
    document.getElementById('result').innerText =
    
    "Invalid operation!";
    return;
    
    }
    // Display the result dynamically on the webpage
    document.getElementById('result').innerText = result;
    }