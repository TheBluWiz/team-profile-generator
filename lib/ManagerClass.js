const Employee = require("../lib/EmployeeClass")

class Manager extends Employee{
  constructor(id, name, email, office) {
    super(id, name, email);
    this.office = office
  }

  createHTMLString = function() {
    
  }
}

module.exports = Manager;