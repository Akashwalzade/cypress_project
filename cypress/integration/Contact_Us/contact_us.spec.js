

describe('Verify the contact us functionality',()=>{
    it('TC -01:Valoidate the contact_us',()=>{
        cy.visit('https://codenboxautomationlab.com/contact/')
        cy.get('#nf-field-1').type('Nanjiii')
        cy.get('[name="email"]').type('nanji1212@gmail.com')
        cy.get('[name="nf-field-3"]').type('Hello, i am learning javascript')
        cy.get('#nf-field-4').click()
        cy.wait(18000)
        cy.get('[class="nf-response-msg"]>p').should('contain','Form submitted successfully.')
    })
})