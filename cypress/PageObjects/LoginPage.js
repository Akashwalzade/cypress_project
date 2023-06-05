class login {
    setUsername(username) {
        cy.get('[placeholder="Username"]').type(username)

    }
    setPassword(password) {
        cy.get('[placeholder="Password"]').type(password)
    }
    clickSubmit() {
        cy.get('[type="submit"]').click()
    }

    verifyPage() {
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard')
    }




}

export default login;