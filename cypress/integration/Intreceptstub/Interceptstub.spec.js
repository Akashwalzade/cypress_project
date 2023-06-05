///<reference types ="cypress"/>


describe("vallidate the API's using intercept", () => {
    it("TC -1 check the intecept functionality for API ", () => {
        cy.fixture('Intercept').then((responce) => {
            responce.forEach(ele => {
                //cy.log(ele)
                cy.intercept({
                    method: "GET",
                    url: "https://jsonplaceholder.cypress.io/comments/1"
                },
                    {
                        body: ele,
                        // body:ele.url,
                        statusCode:201

                    }).as('GETREQ')
                    cy.visit('https://example.cypress.io/commands/network-requests')
                    cy.get('.btn-primary').click()
                    cy.wait('@GETREQ').then((res) => {
                    cy.log(res)
                    expect(res.response.statusCode).to.eq(201)
                    
                })

            });
        })
    })
    it.only("TC-2 check the intecept functionality for API",()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        },
        //    { statusCode:401}
        ).as('POSTREQ')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.get('[class="network-post btn btn-success"]').click()
        cy.wait('@POSTREQ').then((res)=>{
            cy.log(res)
        })
        cy.get('.network-post-comment').should('be.visible')
    })
})