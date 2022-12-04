class Employee {
  constructor(ID, name, email) {
    this.ID = ID;
    this.name = name;
    this.email = email;
  }

  getName = () => this.name;
  getId = () => this.ID;
  getEmail = () => this.email;
  getRole = () => "Employee"
}

module.exports = Employee;