// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================

// Import readline-sync library
const readlineSync = require("readline-sync");

// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}

// Function for modulus
function modulus(a, b) {
    return a % b;
}

// Function for exponentiation
function exponent(a, b) {
    return a ** b;
}

// Function to display menu
function displayMenu() {

    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// Main function
function main() {

    let running = true;

    while (running) {

        displayMenu();

        let choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice === 7) {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        if (choice < 1 || choice > 7) {
            console.log("Error: Invalid menu choice.");
            continue;
        }

        let firstNumber = readlineSync.questionFloat("Enter first number : ");
        let secondNumber = readlineSync.questionFloat("Enter second number: ");

        let result;

        switch (choice) {

            case 1:
                result = add(firstNumber, secondNumber);
                console.log(`Result: ${firstNumber} + ${secondNumber} = ${result.toFixed(2)}`);
                break;

            case 2:
                result = subtract(firstNumber, secondNumber);
                console.log(`Result: ${firstNumber} - ${secondNumber} = ${result.toFixed(2)}`);
                break;

            case 3:
                result = multiply(firstNumber, secondNumber);
                console.log(`Result: ${firstNumber} * ${secondNumber} = ${result.toFixed(2)}`);
                break;

            case 4:
                result = divide(firstNumber, secondNumber);

                if (result === null) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    console.log(`Result: ${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
                }
                break;

            case 5:
                result = modulus(firstNumber, secondNumber);
                console.log(`Result: ${firstNumber} % ${secondNumber} = ${result.toFixed(2)}`);
                break;

            case 6:
                result = exponent(firstNumber, secondNumber);
                console.log(`Result: ${firstNumber} ** ${secondNumber} = ${result.toFixed(2)}`);
                break;
        }
    }
}

// Run program
main();