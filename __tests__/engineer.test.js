const Engineer = require("../lib/EngineerClass")

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