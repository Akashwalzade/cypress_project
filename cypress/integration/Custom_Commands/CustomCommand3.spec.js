

describe('check the fucntionality for custom_commands', () => {
    it('veriofy the custom command functionality', () => {
        cy.login('#nf-field-1', '[name="email"]', '[name="nf-field-3"]', '#nf-field-4')
    })
    // cy.login('#user-name', '#password', 'input[name="login-button"]', 'standard_user', 'secret_sauce')
    // it('Verify the login functionality with valid credentials', () => {
    //     cy.get('.app_logo').should('be.visible')
    // })
})