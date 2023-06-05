

describe('check the DoubleClick functionality',()=>{
    it.skip('Doubleclick functionality',()=>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-div').dblclick()
        cy.get('.action-input-hidden').should('be.visible')
    })


    it('rightclick functionality',()=>{
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.rightclick-action-div').rightclick()
        cy.get('.rightclick-action-div.hidden').should('have.class','hidden')

    })
})