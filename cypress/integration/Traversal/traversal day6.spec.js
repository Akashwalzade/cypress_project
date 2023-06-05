

describe('Verify the cypress traverse methods',()=>{
    it('tc-01: to remove dom element from the set of the elements .not()',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[class="brand greenLogo"]').not('.cart').should('have.length',1)
        cy.get('.cart > div').not('.cart-header-navlink').last().should('have.length',1)
    })
})