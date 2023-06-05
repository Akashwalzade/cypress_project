///<reference types ="cypress"/>

describe("check the functionality for api call using cy.intercept",()=>{
    it("verify api calls using cy.intercept",()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1",

        }).as('Getreq')

        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@Getreq')
        cy.get('[class="network-comment"]').should('be.visible')
        cy.get('[class="network-comment"]').should('contain','laudantium')

    })
    it("verify GET call using cy.intercept",()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1",

        }).as('GetCall')

        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@GetCall').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)

        })
        cy.get('[class="network-comment"]').should('be.visible')
        cy.get('[class="network-comment"]').should('contain','laudantium')

    })

    it("verify GET call using cy.intercept",()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",

        }).as('POSTcmt')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@POSTcmt').then((res)=>{
            cy.log(res)

            expect(res.response.statusCode).to.eq(201)
        })
        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text','POST successful!')
    })

    it.only('verify the PUT req using cy.intercept',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",

        }).as('Putcmt')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-put btn btn-warning"]').click()
        cy.wait('@Putcmt').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eql(res.response.statusCode)
        })
    })
    
})