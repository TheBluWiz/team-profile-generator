const Employee = require("../lib/EmployeeClass")

class Manager extends Employee{
  constructor(id, name, email, store) {
    super(id, name, email);
    this.store = store
  }
}

module.exports = Manager;