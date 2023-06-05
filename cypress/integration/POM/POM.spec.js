import login from "../../PageObjects/LoginPage2";
///<reference types = 'cypress'/>

describe('POM in Cypress',()=>{
    it("Export pom file",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.fixture('orangehrm').then((data)=>{
            let ln = new login()
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit();
            ln.verifyPage();
    

        })




        // let ln = new login()
        // ln.setUsername('Admin')
        // ln.setPassword('admin123')
        // ln.clickSubmit();
        // ln.verifyPage();

    })
})