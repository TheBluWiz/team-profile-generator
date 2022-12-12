const Intern = require("../lib/InternClass")

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