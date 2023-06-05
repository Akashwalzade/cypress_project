///<reference types="cypress"/>

describe('Traversal Methods', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('tr01-First', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr', { timeout: 40000 }).should('be.visible')
        cy.get('._4rR01T').first().should('have.text', 'APPLE iPhone 14 (Midnight, 128 GB)')
    })
    it('tr02-Last', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr', { timeout: 40000 }).should('be.visible')
        cy.get('._4rR01T').last().should('have.text', 'APPLE iPhone 14 Plus (Midnight, 256 GB)')

    })
    it.only('tr01-eq', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr', { timeout: 40000 }).should('be.visible')
        cy.get('._4rR01T').eq(2).should('have.text','APPLE iPhone 11 (White, 128 GB)')
        cy.get('.a-size-medium').eq(1).should('have.text','Apple iPhone 14 Plus 128GB Purple')
    })                                  
})