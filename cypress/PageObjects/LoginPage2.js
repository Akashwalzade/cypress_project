class login {

    txtUsername = '[placeholder="Username"]'
    txtPassword = '[placeholder="Password"]'
    txtSubmit = '[type="submit"]'
    txtVerify = '[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'





    setUsername(username) {
        cy.get(this.txtUsername).type(username)

    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }
    clickSubmit() {
        cy.get(this.txtSubmit).click()
    }

    verifyPage() {
        cy.get(this.txtVerify).should('have.text', 'Dashboard')
    }




}

export default login;