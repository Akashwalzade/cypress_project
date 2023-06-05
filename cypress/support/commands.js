// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').type(email)
    cy.get('#password').type(password)
    cy.get('input[name="login-button"]').click()
})


Cypress.Commands.add('Login2',(Username,Email,MassageField,SubmitButton)=>{
    cy.get(Username).type(user)
    cy.get(Email).type(mail)
    cy.get(MassageField).type(msg)
    cy.get(SubmitButton).click()
})

Cypress.Commands.add('StaticDrop',(text,country)=>{
    cy.get('#autocomplete').type(text)
    cy.get('.ui-menu-item > div').each((el)=>{
        text = el.text()
        //cy.log(text)
        if(text == country){
            cy.get(el).click()
        }
    })
 
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
