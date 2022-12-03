const fs = require("fs");
const inquirer = require("inquirer")
const Manager = require("./lib/ManagerClass.js")
const Engineer = require("./lib/EngineerClass.js")
const Intern = require("./lib/InternClass.js")

let employees = [];
let cardHTML = "";
let HTML = "";

initialQuestions = [
  {
    type: 'input',
    message: "Team Manager Name:  ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Employee ID:  ",
    name: 'ID',
  },
  {
    type: 'input',
    message: "Email Address:  ",
    name: 'email',
  },
  {
    type: 'input',
    message: "Office Number:  ",
    name: 'office',
  },
  {
    type: 'list',
    message: "Do you have additional team members to add to this profile?",
    choices: [
      "Engineer",
      "Intern",
      "All team members have been added"
    ],
    name: 'team',
  },
]

engineerQuestions = [
  {
    type: 'input',
    message: "Engineer Name:  ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Employee ID:  ",
    name: 'ID',
  },
  {
    type: 'input',
    message: "Email Address:  ",
    name: 'email',
  },
  {
    type: 'input',
    message: "GitHub Username:  ",
    name: 'github',
  },
  {
    type: 'list',
    message: "Do you have additional team members to add to this profile?",
    choices: [
      "Engineer",
      "Intern",
      "All team members have been added"
    ],
    name: 'team',
  },
]

internQuestions = [
  {
    type: 'input',
    message: "Intern Name:  ",
    name: 'name',
  },
  {
    type: 'input',
    message: "Employee ID:  ",
    name: 'ID',
  },
  {
    type: 'input',
    message: "Email Address:  ",
    name: 'email',
  },
  {
    type: 'input',
    message: "University Partnership:  ",
    name: 'school',
  },
  {
    type: 'list',
    message: "Do you have additional team members to add to this profile?",
    choices: [
      "Engineer",
      "Intern",
      "All team members have been added"
    ],
    name: 'team',
  },
]

generateHTML = function () {
  employees.forEach(element => {
    cardHTML = cardHTML + element.createHTMLString()
  });
  console.log("Generating HTML..")
  HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="./reset.css"><link rel="stylesheet" href="./styles.css"><title>My Team</title></head><body><header><h1>My Team</h1></header><main><div id="cards">${cardHTML}</div></main></body></html>`

  fs.writeFile("./dist/generated.html", HTML, (err) => err ? console.error(err) : console.log("HTML Generated!"))
}

newEmployee = function (answers) {
  switch (answers.team) {
    case 'Engineer':
      inquirer.prompt(engineerQuestions).then(function (answers) {
        const engineer = new Engineer(answers.ID, answers.name, answers.email, answers.github)
        employees.push(engineer);
        newEmployee(answers);
      })
      break;
    case 'Intern':
      inquirer.prompt(internQuestions).then(function (answers) {
        const intern = new Intern(answers.ID, answers.name, answers.email, answers.school)
        employees.push(intern);
        newEmployee(answers);
      })
      break;
    case "All team members have been added":
      console.log("Employees Added!")
      generateHTML()
      break;
  }
}

inquirer.prompt(initialQuestions).then(function (answers) {
  const manager = new Manager(answers.ID, answers.name, answers.email, answers.office);
  employees.push(manager);
  newEmployee(answers)

})