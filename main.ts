#! /usr/bin/env node

import inquirer from "inquirer";
import promptSync from "prompt-sync";
const prompt = promptSync();

let myList: string[] = [];
console.log("======== Welcome To the TO DO List App =========");

while (true) {
  const answer = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: "What do you want to do in this App:",
      choices: ["View To Do List", "Add Tasks", "Delete Tasks", "Exit"],
    },
  ]);

  if (answer.options === "View To Do List") {
    console.log("=========== Here is the List ============");
    for (let item of myList) {
      console.log(myList.indexOf(item) + ":" + item);
    }

    if (myList[0] === undefined) {
      console.log("\nxxxxx No Entries xxxxx\n");
    }
    console.log("==========================================");
  } else if (answer.options === "Add Tasks") {
    let input = prompt("Enter your task here: ");


    if (input.trim() !== "") {
      myList.push(input);
      console.log(`${input} added in the list`);
      for (let items of myList) {
        console.log(myList.indexOf(items) + ":" + items);
      }
    } else {
      console.log("Invalid Entry!!!");
    }
  } else if (answer.options === "Delete Tasks") {
    for (let item of myList) {
      console.log(myList.indexOf(item) + ":" + item);
    }

    let deleteIndex = Number(
      prompt("Enter Index number of task that you want to delete: ")
    );
    let deletedItem = myList.splice(deleteIndex, 1);
    console.log(`${deletedItem} is now removed from the list.`);
    for (let items of myList) {
      console.log(myList.indexOf(items) + ":" + items);
    }
  }
  if (answer.options === "Exit") {
    console.log("====== Thanks For Using The App, Good Bye! ======");

    break;
  }
}
