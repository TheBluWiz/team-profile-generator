class Employee {
  constructor(ID, name, email) {
    this.id = ID;
    this.name = name;
    this.email = email;
  }

  getName = () => this.name;
  getId = () => this.id;
  getEmail = () => this.email;
  getRole = () => "Employee"
}

module.exports = Employee;