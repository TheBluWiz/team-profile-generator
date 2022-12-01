const Employee = require("../lib/EmployeeClass")

class Manager extends Employee {
  constructor(id, name, email, office) {
    super(id, name, email);
    this.office = office
  }

  createHTMLString = () => `<div class=\"card\"><div class=\"title\"><h2>${this.name}</h2><h3>Manager</h3></div><div class=\"info\"><div><p>ID: ${this.id}</p></div><div><p>Email: <a href=\"mailto:${this.email}\">${this.email}</a></p></div><div><p>Office Number: ${this.office}</p></div></div></div>`

  logStuff = () => {
    console.log("this.name", this.name)
    console.log("this.id", this.id)
    console.log("this.email", this.email)
    console.log("this.store", this.office)
  }
}

module.exports = Manager;