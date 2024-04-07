#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import promptSync from "prompt-sync";
const prompt = promptSync();
let myList = [];
console.log(chalk.bold.whiteBright("\n=========== Welcome To the TO DO List App ============"));
while (true) {
    const answer = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: chalk.yellowBright("\nWhat do you want to do in this App:"),
            choices: [
                chalk.magentaBright("View To Do List"),
                chalk.magentaBright("Add Tasks"),
                chalk.magentaBright("Update Tasks"),
                chalk.magentaBright("Delete Tasks"),
                chalk.magentaBright("Exit"),
            ],
        }
    ]);
    //View To Do List
    if (answer.options === chalk.magentaBright("View To Do List")) {
        console.log(chalk.bold("================= Here is the List =================="));
        for (let item of myList) {
            console.log((myList.indexOf(item) + 1) + ":" + chalk.magentaBright(item));
        }
        if (myList[0] === undefined) {
            console.log(chalk.redBright("\nxxxxx No Entries xxxxx\n"));
        }
        console.log(chalk.whiteBright("====================================================="));
    }
    //Update Tasks
    if (answer.options === chalk.magentaBright("Update Tasks")) {
        for (let item of myList) {
            console.log((myList.indexOf(item) + 1) + ":" + chalk.magentaBright(item));
        }
        let updateIndex = Number(prompt(chalk.greenBright("Enter the index number of the task you want to update: "))) - 1;
        if (updateIndex >= 0 && updateIndex < myList.length) {
            let newTask = prompt(chalk.greenBright("Enter the new task: "));
            let oldTask = myList[updateIndex];
            myList[updateIndex] = newTask;
            console.log(chalk.whiteBright(`\n"${chalk.magentaBright(oldTask)}" is now updated to "${chalk.magentaBright(newTask)}".`));
        }
        else {
            console.log(chalk.redBright("\nInvalid Index!!!\n"));
        }
        for (let items of myList) {
            console.log((myList.indexOf(items) + 1) + ":" + items);
        }
    }
    //Add Tasks
    else if (answer.options === chalk.magentaBright("Add Tasks")) {
        let input = prompt(chalk.greenBright(chalk.greenBright("Enter your task here: ")));
        if (input.trim() !== "") {
            myList.push(input);
            console.log(chalk.whiteBright(`\n"${chalk.magentaBright(input)}" added in the list`));
            for (let items of myList) {
                console.log((myList.indexOf(items) + 1) + ":" + chalk.magentaBright(items));
            }
        }
        else {
            console.log(chalk.redBright("\nInvalid Entry!!!\n"));
        }
    }
    else if (answer.options === chalk.magentaBright("Delete Tasks")) {
        for (let item of myList) {
            console.log((myList.indexOf(item) + 1) + ":" + chalk.magentaBright(item));
        }
        let deleteIndex = Number(prompt(chalk.greenBright("Enter Index number of task that you want to delete: "))) - 1;
        let deletedItem = myList.splice(deleteIndex, 1);
        console.log(chalk.whiteBright(`\n"${chalk.magentaBright(deletedItem)}" is now removed from the list.`));
        for (let items of myList) {
            console.log((myList.indexOf(items) + 1) + ":" + items);
        }
    }
    //Exit
    if (answer.options === chalk.magentaBright("Exit")) {
        console.log(chalk.bold("\n======== Thanks For Using The App, Good Bye! ========\n"));
        break;
    }
}
