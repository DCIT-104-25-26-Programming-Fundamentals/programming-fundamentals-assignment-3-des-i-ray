// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================

// Import readline-sync library
const readlineSync = require("readline-sync");

// Array to store student records
let students = [];

// Function to calculate average score
function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

// Function to add a student
function addStudent() {

    let name = readlineSync.question("Student name: ");
    let id = readlineSync.questionInt("Student ID: ");

    let numberOfScores = readlineSync.questionInt("How many scores? ");

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        let score = readlineSync.questionInt(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// Function to display all students
function displayStudents() {

    if (students.length === 0) {
        console.log("No student records available.");
        return;
    }

    console.log("\nStudent Records:");

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let average = calculateAverage(student.scores);

        console.log("----------------------------");
        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average Score: ${average.toFixed(2)}`);
    }
}

// Function to calculate average for a specific student
function calculateStudentAverage() {

    let id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {

        if (students[i].id === id) {

            let average = calculateAverage(students[i].scores);

            console.log(
                `${students[i].name}'s average score: ${average.toFixed(2)}`
            );

            return;
        }
    }

    console.log("Error: Student ID not found.");
}

// Function to display menu
function displayMenu() {

    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

// Main function
function main() {

    let running = true;

    while (running) {

        displayMenu();

        let choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {

            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                calculateStudentAverage();
                break;

            case 4:
                console.log("Goodbye!");
                running = false;
                break;

            default:
                console.log("Error: Invalid choice. Please select 1-4.");
        }
    }
}

// Run program
main();