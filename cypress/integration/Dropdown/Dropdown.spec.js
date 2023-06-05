// const { describe } = require("mocha");
// two types of dropwdoen functionality
// static-- have to select by typing
// dynamic -- it gives auto suggestions

describe('Static dropdown',()=>{
    let element = ""
    it.skip('check the functions of static dropdown',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')

    })

    it('check the functions of dynamic dropdown',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').type("can")
        // cy.get(".ui-menu-item>div").then((el)=>{
        
        //     element = el.text()
        //     cy.log(element)
        //     if(element == "canada"){
        //         cy.get(el).click()

        //     }
        // })
        // cy.get('.ui-menu-item > div').contains('Canada').click()

    })

})