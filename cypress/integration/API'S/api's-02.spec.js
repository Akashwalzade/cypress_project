///<reference types ="cypress"/>


describe("verify the all Api's Methods",()=>{
    it("check the functionality of get method",()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2",
        }).then((responce)=>{
            expect(responce.status).to.eq(200)
            expect(responce.body.page).to.eq(2)
            expect(responce.statusText).to.eq("OK")
            expect(responce.body.page).to.eq(2)
            expect(responce.body.total).to.eq(12)
        })
    })

    it("check the functionality of post method",()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name": "Akash",
                "job": "QA"
            }
        }).then((responce)=>{
            cy.log(responce)
           

            expect(responce.status).to.eq(201)
            expect(responce.body.name).to.eq("Akash")
            expect(responce.body.job).to.equal("QA")
        })
    })
    it("checkt the functionality for put method",()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "Akash",
                "job": "Automation Tester"
            }
        })
        .then((responce)=>{
            cy.log(responce)

            expect(responce.status).to.equal(200)
            expect(responce.body.job).to.equal("Automation Tester")

        })
    })
    it.only('checkt the functionality for DELETE method', () => {
        
        cy.request({
            method: "DELETE",
            url: `https://reqres.in/api/users/2`,
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(204)
            expect(response.statusText).to.eq("No Content")
        })
    })
})