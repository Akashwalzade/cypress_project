

describe('Verify the cypress traverse methods', () => {
    it('Tc-01: to get the all next siblings of the dom elements', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(5000)
        cy.get('.product').nextAll().should('have.length', 29)
        cy.get('.decrement').eq(1).nextAll().should('have.length', 2)
        cy.get('.greenLogo').nextAll().should('have.length', 2)
    })
    it('Tc-02: to get the previous sibling of the dom elements', ()=> {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.increment').eq(1).prev().should('have.length',1)
    })
})