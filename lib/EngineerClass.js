const Employee = require("../lib/EmployeeClass")

class Engineer extends Employee{
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  createHTMLString = () => `<div class=\"card\"><div class=\"title\"><h2>${this.name}</h2><h3>Engineer</h3></div><div class=\"info\"><div><p>ID: ${this.id}</p></div><div><p>Email: <a href=\"mailto:${this.email}\">${this.email}</a></p></div><div><p>GitHub: ${this.github}</p></div></div></div>`
}

module.exports = Engineer;