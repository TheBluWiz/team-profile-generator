const fs = require("fs");
const inquirer = require("inquirer")
const Employee = require("../lib/EmployeeClass.js")
const Manager = require("../lib/ManagerClass.js")
const Engineer = require("../lib/EngineerClass.js")
const Intern = require("../lib/InternClass.js")

const manager = new Manager(1, "Monique", "manager@corp.com", "R077");

manager.logStuff
console.log(manager.createHTMLString)
