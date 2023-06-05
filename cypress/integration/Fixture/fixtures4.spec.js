


    before(function () {
        cy.fixture('credentials').then(function (data) {
            this.data = data
        })
    })
    it("fixtures tests using fixtures file", () => {
        // cy.log(testdata)
        cy.visit(this.data.adminUrl)
        cy.get('[id=Email]').clear()
        cy.get('[id=Email]').type(this.data.username)// email
        cy.get('[id=Password]').clear()
        cy.get('[id=Password]').type(this.data.password)// password

        cy.get('[type="submit"]').click()
        cy.url().should('be.equal', this.data.adminUrl)
    });




// before(function () {
//     cy.fixture('credentials').then(function (testdata) {
//         this.testdata = testdata
//     })
// })
// it("Login with valid credentials", function () {
//     cy.visit(this.testdata.adminUrl)
//     cy.get('[id=Email]').clear()
//     cy.get('[id=Email]').type(this.testdata.username)
//     cy.get('[id=Password]').clear()
//     cy.get('[id=Password]').type(this.testdata.password)
//     cy.get('[type=submit]').click();
//     cy.url().should('be.equal', this.testdata.adminUrl)
// });