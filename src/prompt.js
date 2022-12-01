const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("../lib/ManagerClass")
const Engineer = require("../lib/EngineerClass")
const Intern = require("../lib/InternClass")

function newMember(answers) {
  switch (answers.team) {
    case 'Engineer':
      createEngineer();
      break;
    case 'Intern':
      createIntern();
      break;
    case 'All team members have been added':
      return;
      break;
  }
}

function createEngineer() {
  inquirer.prompt(engineerQuestions).then(function (answers) {
    const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github);
    let card = engineer.createHTMLString
    fs.appendFile('./tmp/cards', card, (err) =>
      err ? console.log(err) : console.log('Card Generated!')
    );
    newMember(answers);
  })
}

function createIntern() {
  inquirer.prompt(internQuestions).then(function (answers) {
    const intern = new Intern(answers.id, answers.name, answers.email, answers.school);
    let card = intern.createHTMLString
    fs.appendFile('./tmp/cards', card, (err) =>
      err ? console.log(err) : console.log('Card Generated!')
    );
    newMember(answers);
  })
}


prompt = (initialQuestions) => {
  inquirer.prompt(initialQuestions).then(function (answers) {
    const manager = new Manager(answers.id, answers.name, answers.email, answers.office);
    let card = manager.createHTMLString
    fs.writeFile('./tmp/cards', card, (err) =>
      err ? console.log(err) : console.log('Card Generated!')
    );
    newMember(answers);
  })
}
module.exports = prompt;