const Employee = require("../lib/EmployeeClass")
const Manager = require("../lib/ManagerClass")
const Engineer = require("../lib/EngineerClass")
const Intern = require("../lib/InternClass")

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with an ID, name, and an email when called with the new keyword", () => {
      const employee = new Employee(1, "Steve", "employee@corp.com");
      
      expect(employee.id).toEqual(1);
      expect(employee.name).toEqual("Steve")
      expect(employee.email).toEqual("employee@corp.com")
    })
  })
})

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with an office number", () => {
      const manager = new Manager(1, "Monique", "manager@corp.com", "R077");

      expect(manager.office).toEqual("R077")
    })

    it("should inherit the employee class, giving it an ID. name, and email", () => {
      const manager = new Manager(1, "Monique", "monique@corp.com", "R077");

      expect(manager.id).toEqual(1)
      expect(manager.name).toEqual("Monique")
      expect(manager.email).toEqual("monique@corp.com")
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

      expect(engineer.id).toEqual(1)
      expect(engineer.name).toEqual("Trenton")
      expect(engineer.email).toEqual("engineer@corp.com")
    })
  })

  describe("createHTMLString", () => {
    it("should generate an HTML string that would build a card for the engineer", () => {
      let goodHTML = '<div class="card"><div class="title"><h2>Trenton</h2><h3>Engineer</h3></div><div class="info"><div><p>ID: 1</p></div><div><p>Email: <a href="mailto:trenton@corp.com">trenton@corp.com</a></p></div><div><p>GitHub: DevOpsPro</p></div></div></div>'

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
    })

    it("should inherit the employee class, giving it an ID, name, and email", () => {
      const intern = new Intern(1, "Eric", "intern@corp.com", "UW");

      expect(intern.id).toEqual(1)
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