

describe("verify the custom cammand with login functionalioty",()=>{
    it("verify login using custom command",()=>{
        cy.login('standard_user','secret_sauce')
        cy.url().should('contains','inventory')
        cy.get('.app_logo').should('be.visible')
        cy.get('.title').should('have.text','Products')
    })
    it("verify the dropdown using custom_command",()=>{
        
    })
})