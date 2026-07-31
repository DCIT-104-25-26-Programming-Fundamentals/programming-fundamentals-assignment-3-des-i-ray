// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================

// Import readline-sync library
const readlineSync = require("readline-sync");

// PART A: Function to print a single multiplication table
function printTable(number) {
    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

// PART B: Function to print multiplication tables from 1 to N
function printTablesUpToN(n) {

    for (let number = 1; number <= n; number++) {
        printTable(number);

        console.log("---------------------------");
    }
}

// Main function
function main() {

    // PART A
    const number = readlineSync.questionInt("Enter a number: ");

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    printTable(number);


    // PART B
    const n = readlineSync.questionInt("\nEnter N for tables from 1 to N: ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    printTablesUpToN(n);
}

// Run program
main();