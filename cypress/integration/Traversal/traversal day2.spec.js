// find()  & next()

describe('verify the diff cypress method', () => {
    it.skip('TC-01-descendant DOM elements of the selector ,use the .find() command', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart').find('a').should('have.length', 4)
        cy.get('.search').find('form').should('have.class', 'search-form')
    })
    it('TC-02-get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search').next().should('have.class','cart')
        cy.get('.wrapperone').next().should('have.class','wrapperTwo')
        cy.get('.wrapperTwo').next().should('have.class','wrapperThree')
    })
})