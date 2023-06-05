

describe('fixture testsuite', () => {

//     let info
//     before(function () {
//         cy.fixture('credentials').then(function (file) {
//             info = file
//         })
//     })

//     it("fixtures tests using fixtures file", () => {
//         // cy.log(testdata)
//         cy.visit(file.adminUrl)
//         cy.get('[id=Email]').clear()
//         cy.get('[id=Email]').type(file.username)// email
//         cy.get('[id=Password]').clear()
//         cy.get('[id=Password]').type(file.password)// password
//         cy.get('[type="submit"]').clear()
//         cy.get('[type="submit"]').click()
//         cy.url().should('be.equal',file.adminUrl)
//     });

//     //     // it('fixtures tests with Hardcoded values',()=>{
//     //     //     cy.visit('https://admin-demo.nopcommerce.com/login')
//     //     //    cy.get('[id=Email]').type('admin@yourstore.com')// email
//     //     //     cy.get('#Password').type('admin')// password
//     //     //     cy.get('[type="submit"]').click()
//     //     // })
// })

before(function () {
    cy.fixture('credentials').then(function (testdata) {
        this.testdata = testdata
    })
})
it("Login with valid credentials", function () {
    cy.visit(this.testdata.adminUrl)
    cy.get('[id=Email]').clear()
    cy.get('[id=Email]').type(this.testdata.username)
    cy.get('[id=Password]').clear()
    cy.get('[id=Password]').type(this.testdata.password)
    cy.get('[type=submit]').click();
    // cy.url().should('be.equal', this.testdata.adminUrl)
 });
})
