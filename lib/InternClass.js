const Employee = require("../lib/EmployeeClass")

class Intern extends Employee{
  constructor(ID, name, email, school) {
    super(ID, name, email);
    this.school = school
  }

  createHTMLString = () => `<div class=\"card\"><div class=\"title\"><h2>${this.name}</h2><h3>Intern</h3></div><div class=\"info\"><div><p>ID: ${this.ID}</p></div><div><p>Email: <a href=\"mailto:${this.email}\">${this.email}</a></p></div><div><p>Partner School: ${this.school}</p></div></div></div>`

  getSchool = () => this.school;
}

module.exports = Intern;