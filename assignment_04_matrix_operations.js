// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================

const readlineSync = require('readline-sync');

// Function to read a matrix from the user
function readMatrix(rows, cols, name) {
    let matrix = [];

    console.log(`Enter values for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        let values = row.split(" ").map(Number);

        matrix.push(values);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

// PART A: Function to transpose a matrix
function transposeMatrix(matrix) {
    let transpose = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];

        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }

        transpose.push(row);
    }

    return transpose;
}

// PART B: Function to add two matrices
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        let row = [];

        for (let j = 0; j < matrixA[0].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

// PART C: Function to multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        let row = [];

        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;

            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

// Main function
function main() {

    // PART A
    console.log("PART A: Matrix Transpose");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols, "A");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    let transposed = transposeMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposed);


    // PART B
    console.log("\nPART B: Matrix Addition");

    let addRows = readlineSync.questionInt("Enter number of rows: ");
    let addCols = readlineSync.questionInt("Enter number of columns: ");

    let matrixB1 = readMatrix(addRows, addCols, "A");
    let matrixB2 = readMatrix(addRows, addCols, "B");

    let sumMatrix = addMatrices(matrixB1, matrixB2);

    console.log("\nSum of Matrices:");
    displayMatrix(sumMatrix);


    // PART C
    console.log("\nPART C: Matrix Multiplication");

    let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
    let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

    let matrixA = readMatrix(rowsA, colsA, "A");

    let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
    let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (colsA !== rowsB) {
        console.log("Error: Columns of Matrix A must equal rows of Matrix B.");
        return;
    }

    let matrixB = readMatrix(rowsB, colsB, "B");

    let product = multiplyMatrices(matrixA, matrixB);

    console.log("\nProduct of Matrices:");
    displayMatrix(product);
}

// Run program
main();