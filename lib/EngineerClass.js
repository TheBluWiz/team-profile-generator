const Employee = require("../lib/EmployeeClass")

class Engineer extends Employee{
  constructor(ID, name, email, github) {
    super(ID, name, email);
    this.github = github;
  }

  createHTMLString = () => `<div class=\"card\"><div class=\"title\"><h2>${this.name}</h2><h3>Engineer</h3></div><div class=\"info\"><div><p>ID: ${this.ID}</p></div><div><p>Email: <a href=\"mailto:${this.email}\">${this.email}</a></p></div><div><p>GitHub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></p></div></div></div>`;
  
  getGithub = () => this.github;
  getRole = () => "Engineer";
}

module.exports = Engineer;