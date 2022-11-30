const inquirer = require("inquirer");
const prompt = require("../src/prompt.js")

describe("inquirer", () => {
  describe("Initialize", () => {
    it("should ask a series of questions then return a promise", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => { });

      promptInit()

    })

    it("should resolve answers as name, ID, email, and office variable names", () => {

    })
  })
  
  describe("Build Team", () => {
    it("should allow adding engineers and interns to managers team", () => {
      const engineer =
    })
  })
})