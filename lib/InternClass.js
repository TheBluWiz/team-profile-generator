const Employee = require("../lib/EmployeeClass")

class Intern extends Employee{
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school
  }
}

module.exports = Intern;