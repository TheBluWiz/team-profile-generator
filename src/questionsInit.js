const inquirer = require("inquirer")
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
]

prompt = (initialQuestions) => {
  inquirer.prompt(initialQuestions).then((answers) => {
    const manager = new Manager(answers.id, answers.name, answers.email, answers.office);
    
  })
}