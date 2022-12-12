const Employee = require("../lib/EmployeeClass");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with an ID, name, and an email when called with the new keyword", () => {
        const employee = new Employee(1, "Steve", "employee@corp.com");
        
        expect(employee.ID).toEqual(1);
        expect(employee.name).toEqual("Steve")
        expect(employee.email).toEqual("employee@corp.com")
  
        expect(employee.getName()).toEqual("Steve")
        expect(employee.getId()).toEqual(1)
        expect(employee.getEmail()).toEqual("employee@corp.com")
        expect(employee.getRole()).toEqual("Employee")
      })
    })
  })