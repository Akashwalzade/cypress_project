///<reference types ="cypress"/>

describe('test for contactus form',()=>{
    it('TC-1- verification for valid credentials',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        cy.contains('here').should('be.visible')
        cy.get('#input_1_1').type('newuser1')
        cy.get('#input_1_2').type('lastname1')
        cy.get('#input_1_3').type('nani@email.com')
        cy.get('#input_1_4').type('9685741236')
        cy.get('#input_1_5').type('www.unioni.com')
        cy.get('#input_1_6').type('maharaja.pvt.ltd')
        cy.get('#input_1_7').type('please ignore this msg')
        cy.get('#gform_submit_button_1').click()
        cy.get('#gform_confirmation_message_1').should('have.text','Thanks for contacting us! We will get in touch with you shortly.')

    })
})