// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================

// Import readline-sync library
const readlineSync = require("readline-sync");

// PART A: Function to generate and print first N Fibonacci terms
function generateFibonacci(n) {
    let fibonacci = [];

    let first = 0;
    let second = 1;

    for (let i = 0; i < n; i++) {
        fibonacci.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    return fibonacci;
}

// PART B: Function to check if a number is a Fibonacci number
function isFibonacci(number) {
    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

// Main function
function main() {

    // PART A
    const n = readlineSync.questionInt("How many terms? ");

    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    let sequence = generateFibonacci(n);

    console.log("Fibonacci sequence: " + sequence.join(" "));


    // PART B
    const number = readlineSync.questionInt("\nEnter a number to check: ");

    if (isFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

// Run program
main();