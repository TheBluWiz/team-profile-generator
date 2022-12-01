const fs = require("fs");
const inquirer = require("inquirer")
const Employee = require("./lib/EmployeeClass.js")
const Manager = require("./lib/ManagerClass.js")
const Engineer = require("./lib/EngineerClass.js")
const Intern = require("./lib/InternClass.js")
const prompt = require("./src/prompt")

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
    type: 'input',
    message: "Do you have additional team members to add to this profile?",
    choices: [
      "Engineer",
      "Intern",
      "All team members have been added"
    ],
    name: 'office',
  },
]

engineerQuestions = [
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
    message: "GitHub Username:  ",
    name: 'github',
  },
  {
    type: 'input',
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
    message: "University Partnership:  ",
    name: 'school',
  },
  {
    type: 'input',
    message: "Do you have additional team members to add to this profile?",
    choices: [
      "Engineer",
      "Intern",
      "All team members have been added"
    ],
    name: 'team',
  },
]

prompt(initialQuestions);