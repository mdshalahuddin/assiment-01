function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDisplay = document.getElementById('result');

    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerHTML = "<div class='alert alert-danger'>Please enter valid numbers.</div>";
        return;
    }

    let result;
    try {
        // Perform the calculation based on the selected operation
        switch (operation) {
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
                if (num2 === 0) {
                    throw new Error("Division by zero");
                }
                result = num1 / num2;
                break;
            default:
                throw new Error("Invalid operation");
        }
        // Display the result
        resultDisplay.innerHTML = "<div class='alert alert-success'>Result: " + result + "</div>";
    } catch (error) {
        // Handle errors gracefully
        resultDisplay.innerHTML = "<div class='alert alert-danger'>Error: " + error.message + "</div>";
    }
}