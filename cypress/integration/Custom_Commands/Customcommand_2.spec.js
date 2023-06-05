

describe("verify the dropdworn using custom Commands",()=>{
    it("verify the dropdown by custom command",()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.StaticDrop('Ind','India')
    })
})