#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
async function createTodo(tod) {
    do {
        let operator = await inquirer.prompt([
            {
                message: "Select an option",
                type: "list",
                name: "options",
                choices: ["Add", "Delete", "Update", "View", "Exit"]
            }
        ]);
        if (operator.options === "Add") {
            let condition = true;
            while (condition) {
                let addTask = await inquirer.prompt([
                    {
                        message: "What would you like to add in your todos?",
                        type: "input",
                        name: "todo"
                    },
                ]);
                todos.push(addTask.todo);
                console.log(todos);
                addTask = await inquirer.prompt([
                    {
                        message: "Would you like to add more?",
                        type: "confirm",
                        name: "addMore",
                        default: "false"
                    }
                ]);
                condition = addTask.addMore;
            }
        }
        if (operator.options === "Delete") {
            let delTodo = await inquirer.prompt([
                {
                    message: "Select the item you want to delete",
                    type: "list",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let newTodo = todos.filter(val => val != delTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
        if (operator.options === "Update") {
            let updateTodo = await inquirer.prompt([
                {
                    message: "Which item do you want to update?",
                    type: "list",
                    name: "todo",
                    choices: todos.map(item => item)
                }
            ]);
            let addTodo = await inquirer.prompt([
                {
                    message: "Add item",
                    type: "input",
                    name: "todo"
                }
            ]);
            let newTodo = todos.filter(val => val != updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (operator.options === "View") {
            console.log(todos);
        }
        if (operator.options === "Exit") {
            break;
        }
    } while (true);
}
createTodo(todos);
