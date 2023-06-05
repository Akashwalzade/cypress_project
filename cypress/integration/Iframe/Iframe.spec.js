describe("check the functionality of Iframe",()=>{
    beforeEach(()=>{
        cy.visit("http://www.webdriveruniversity.com/IFrame/index.html")
    })
    it("verify the Iframe with Jquery method",()=>{
        // cy.visit("http://www.webdriveruniversity.com/IFrame/index.html")
        cy.get("#frame").then((el)=>{
            let body = el.contents().find('body')
            cy.wrap(body).as("Iframe")
            cy.get("@Iframe").find('a[href="index.html"]').should('be.visible')
            .should("have.text","Home")
        })
    })
    it("verify the Iframe with js method",()=>{
        // cy.visit("http://www.webdriveruniversity.com/IFrame/index.html")
        cy.get('#frame').then((ele)=>{
            cy.log(ele)
            let body2 = ele[0].contentDocument.body
            cy.log(body2)
            cy.wrap(body2).as('Iframe')
            cy.get('@Iframe').find('a[href="products.html"]').should('be.visible')
            cy.get('@Iframe').find('a[href="products.html"]').should('have.text','Our Products')

    })
})
})