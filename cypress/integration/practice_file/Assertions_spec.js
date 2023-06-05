// checking the implicite assetions  

describe('Implicite assertions',()=>{
    it("implicite asertions verification",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// 1st way for should using include , eq and contain

        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrmlive')

// 2nd way for should using multiple should(  use cy.url() just once)
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive')

// 3rd way instead of writing should multiple times we can use and also
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive') // assertion having two type i.e positive asser  and negative asser
        .and('not.contain','graamhrmlive') // this is negative assertion


// cy.title()--> this is return the title of the current page
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
// cypress tetsting tool also having his slelctor  
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')//logo visible or not
        // visible check the elements is present on the page or not
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .and('exist')


    })
})