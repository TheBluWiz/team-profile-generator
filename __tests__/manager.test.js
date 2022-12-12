const Manager = require("../lib/ManagerClass")

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