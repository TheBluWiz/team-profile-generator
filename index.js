const fs = require("fs");
const inquirer = require("inquirer")
const Employee = require("./lib/EmployeeClass.js")
const Manager = require("./lib/ManagerClass.js")
const Engineer = require("./lib/EngineerClass.js")
const Intern = require("./lib/InternClass.js")
const newEmployee = require("./src/newEmployee")
const generateHTML = require("./src/generateHTML")

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

inquirer.prompt(initialQuestions).then(function (answers) {
  const manager = new Manager(answers.id, answers.name, answers.email, answers.office);
  employees.push(manager);
  newEmployee(answers)

})