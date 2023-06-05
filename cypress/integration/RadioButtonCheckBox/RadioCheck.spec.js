
// checkbox methods functionality
// click , unclick
// check and uncheck

describe('Verify the functionality of Radio buttons and checkboxes',()=>{
    beforeEach(()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('Check the functionality of checkbox using,ckecked method',()=>{
        cy.get('[value="green"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="purple"]').check().should('be.checked')
        cy.get('[value="orange"]').check().should('be.checked')
    })
    it('Check the functionality of checkbox using,not ckecked method',()=>{
        cy.get('[value="green"]').uncheck().should('not.be.checked')
        cy.get('[value="yellow"]').uncheck().should('not.be.checked')
        cy.get('[value="red"]').uncheck().should('not.be.checked')
        cy.get('[value="purple"]').uncheck().should('not.be.checked')
        cy.get('[value="orange"]').uncheck().should('not.be.checked')
    })
    // click method 
    it.only('Check the functionality of checkbox using,click method',()=>{
        cy.get('[value="green"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="green"]').click().should('not.be.checked')//same element but assertion is defferent
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('not.be.checked')//same element but assertion is defferent
       
    })
})