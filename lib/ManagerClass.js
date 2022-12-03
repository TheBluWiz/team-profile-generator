const Employee = require("../lib/EmployeeClass")

class Manager extends Employee {
  constructor(ID, name, email, officeNumber) {
    super(ID, name, email);
    this.officeNumber = officeNumber
  }

  createHTMLString = () => `<div class=\"card\"><div class=\"title\"><h2>${this.name}</h2><h3>Manager</h3></div><div class=\"info\"><div><p>ID: ${this.ID}</p></div><div><p>Email: <a href=\"mailto:${this.email}\">${this.email}</a></p></div><div><p>Office Number: ${this.officeNumber}</p></div></div></div>`

  getOfficeNumber = () => this.officeNumber
  getRole = () => "Manager"
}

module.exports = Manager;