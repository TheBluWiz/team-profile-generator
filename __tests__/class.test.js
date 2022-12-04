const Employee = require("../lib/EmployeeClass")
const Manager = require("../lib/ManagerClass")
const Engineer = require("../lib/EngineerClass")
const Intern = require("../lib/InternClass")

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

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with an office number", () => {
      const manager = new Manager(1, "Monique", "manager@corp.com", "R077");

      expect(manager.officeNumber).toEqual("R077")
    })

    it("should inherit the employee class, giving it an ID. name, and email", () => {
      const manager = new Manager(1, "Monique", "monique@corp.com", "R077");

      expect(manager.ID).toEqual(1)
      expect(manager.name).toEqual("Monique")
      expect(manager.email).toEqual("monique@corp.com")

      expect(manager.getOfficeNumber()).toEqual('R077')
      expect(manager.getRole()).toEqual('Manager')
    })
  })

  describe("createHTMLString", () => {
    it("should generate an HTML string that would build a card for the manager", () => {
      let goodHTML = '<div class="card"><div class="title"><h2>Monique</h2><h3>Manager</h3></div><div class="info"><div><p>ID: 1</p></div><div><p>Email: <a href="mailto:monique@corp.com">monique@corp.com</a></p></div><div><p>Office Number: R077</p></div></div></div>'

      const manager = new Manager(1, "Monique", "monique@corp.com", "R077");

      expect(manager.createHTMLString()).toEqual(goodHTML)
    })
  })
})

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a Github username", () => {
      const engineer = new Engineer(1, "Trenton", "engineer@corp.com", "DevOpsPro");

      expect(engineer.github).toEqual("DevOpsPro")
    })

    it("should inherit the employee class, giving it an ID, name, and email", () => {
      const engineer = new Engineer(1, "Trenton", "engineer@corp.com", "DevOpsPro");

      expect(engineer.ID).toEqual(1)
      expect(engineer.name).toEqual("Trenton")
      expect(engineer.email).toEqual("engineer@corp.com")

      expect(engineer.getGithub()).toEqual("DevOpsPro")
      expect(engineer.getRole()).toEqual("Engineer")
    })
  })

  describe("createHTMLString", () => {
    it("should generate an HTML string that would build a card for the engineer", () => {
      let goodHTML = '<div class="card"><div class="title"><h2>Trenton</h2><h3>Engineer</h3></div><div class="info"><div><p>ID: 1</p></div><div><p>Email: <a href="mailto:trenton@corp.com">trenton@corp.com</a></p></div><div><p>GitHub: <a href="https://github.com/DevOpsPro" target="_blank">DevOpsPro</a></p></div></div></div>'

      const engineer = new Engineer(1, "Trenton", "trenton@corp.com", "DevOpsPro");

      expect(engineer.createHTMLString()).toEqual(goodHTML)
    })
  })
})

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a school", () => {
      const intern = new Intern(1, "Eric", "intern@corp.com", "UW");

      expect(intern.school).toEqual("UW")
      expect(intern.getSchool()).toEqual("UW")
    })

    it("should inherit the employee class, giving it an ID, name, and email", () => {
      const intern = new Intern(1, "Eric", "intern@corp.com", "UW");

      expect(intern.ID).toEqual(1)
      expect(intern.name).toEqual("Eric")
      expect(intern.email).toEqual("intern@corp.com")
    })
  })

  describe("createHTMLString", () => {
    it("should generate an HTML string that would build a card for the intern", () => {
      let goodHTML = '<div class="card"><div class="title"><h2>Gwen</h2><h3>Intern</h3></div><div class="info"><div><p>ID: 1</p></div><div><p>Email: <a href="mailto:gwen@corp.com">gwen@corp.com</a></p></div><div><p>Partner School: UW</p></div></div></div>'

      const intern = new Intern(1, "Gwen", "gwen@corp.com", "UW");

      expect(intern.createHTMLString()).toEqual(goodHTML)
    })
  })
})