

describe('check the functionality for amazon page',()=>{
    it('tc01-verify seach functionlity',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('black shoes')
        cy.get('#nav-search-submit-button').click()
    })
})