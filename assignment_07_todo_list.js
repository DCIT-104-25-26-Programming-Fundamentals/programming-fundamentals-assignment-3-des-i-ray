// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================

// Import readline-sync library
const readlineSync = require("readline-sync");

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    let task = readlineSync.question("Enter task: ");

    tasks.push(task);

    console.log(`Task added: "${task}"`);
}

// Function to view all tasks
function viewTasks() {

    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    console.log("Your Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// Function to delete a task
function deleteTask() {

    if (tasks.length === 0) {
        console.log("No tasks available to delete.");
        return;
    }

    viewTasks();

    let taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    let removedTask = tasks[taskNumber - 1];

    tasks.splice(taskNumber - 1, 1);

    console.log(`Task "${removedTask}" has been removed.`);
}

// Function to display menu
function displayMenu() {

    console.log("\n============================");
    console.log("       TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
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
                addTask();
                break;

            case 2:
                viewTasks();
                break;

            case 3:
                deleteTask();
                break;

            case 4:
                console.log("Goodbye!");
                running = false;
                break;

            default:
                console.log("Error: Invalid menu choice. Please select 1-4.");
        }
    }
}

// Run program
main();