import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.gray("WELCOME TO QUIZ SYSTEM"));
const question = await inquirer.prompt([
    {
        name: "answer1",
        type: "list",
        message: "Who developed TypeScript language?",
        choices: ["Apple", "Microsoft", "Google"]
    },
    {
        name: "answer2",
        type: "list",
        message: "Extension of TypeScript is?",
        choices: [".as", ".ts", ".js"]
    },
    {
        name: "answer3",
        type: "list",
        message: "Which of the following is valid command to compile typescript file?",
        choices: ["tsc abc.ts", "ts abc", ".tsc abc.js"]
    },
    {
        name: "answer4",
        type: "list",
        message: "TypeScript is a _________ of JavaScript?",
        choices: ["superset", "subset", "superset and subset"]
    },
    {
        name: "answer5",
        type: "list",
        message: "When was TypeScript first introduced?",
        choices: ["October 2009", "October 2010", "October 2012"]
    },
]);
let number = 0;
if (question.answer1 === "Microsoft") {
    console.log(chalk.yellowBright("Correct Answer"));
    number += 1;
}
else {
    console.log(chalk.red("Wrong Answer"));
}
if (question.answer2 === ".ts") {
    console.log(chalk.yellowBright("Correct Answer"));
    number += 1;
}
else {
    console.log(chalk.red("Wrong Answer"));
}
if (question.answer3 === "tsc abc.ts") {
    console.log(chalk.yellowBright("Correct Answer"));
    number += 1;
}
else {
    console.log(chalk.red("Wrong Answer"));
}
if (question.answer4 === "superset") {
    console.log(chalk.yellowBright("Correct Answer"));
    number += 1;
}
else {
    console.log(chalk.red("Wrong Answer"));
}
if (question.answer5 === "October 2012") {
    console.log(chalk.yellowBright("Correct Answer"));
    number += 1;
}
else {
    console.log(chalk.red("Wrong Answer"));
}
console.log(chalk.magentaBright(`Your score is ${number} out of 5`));
