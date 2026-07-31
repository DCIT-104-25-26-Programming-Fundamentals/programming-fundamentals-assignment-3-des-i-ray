
// Import readline-sync library
const readlineSync = require("readline-sync");

// Function to calculate sum of numbers
function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Function to calculate average of numbers
function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

// Function to find maximum number
function findMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

// Function to find minimum number
function findMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

// Main function
function main() {
    // Read number of values
    const n = readlineSync.questionInt("How many numbers? ");

    // Validate N
    if (n <= 0) {
        console.log("Error: Number of values must be a positive integer.");
        return;
    }

    // Create array and collect numbers
    let numbers = [];

    for (let i = 0; i < n; i++) {
        const number = readlineSync.questionInt(`Enter number ${i + 1}: `);
        numbers.push(number);
    }

    // Calculate results
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const maximum = findMaximum(numbers);
    const minimum = findMinimum(numbers);

    // Display results
    console.log("\nResults:");
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${maximum}`);
    console.log(`Minimum: ${minimum}`);
}

// Run the program
main();