const inquirer = require("inquirer")
const Engineer = require("../lib/EngineerClass")
const Manager = require("../lib/ManagerClass")

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
    name: 'office',
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
    name: 'office',
  },
]



prompt = (initialQuestions) => {
  inquirer.prompt(initialQuestions).then((answers) => {
    const manager = new Manager(answers.id, answers.name, answers.email, answers.office);
    
  })
}