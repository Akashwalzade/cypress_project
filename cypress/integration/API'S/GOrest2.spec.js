// const { expect } = require("chai")

describe("check functionality for Authorization using Gorest", () => {
    it("check the GET autho with gorest", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            Headers: {
                "Authorization": "Bearer ef589eb2a9f445c032eccc3b89fb780b39a879620cc62f72a1860f36e2281f2c"

            }

        }).then((res) => {
            cy.log(res)
            expect(res.body.length).to.eql(10)
            expect(res.status).to.eql(200)
            // expect(res.body[0].id).to.eql(974561)
            expect(res.body[3].gender).to.eql("male")
        })
    })
    it('Validate Basic auth Post Api', () => {
        // let mail = `walzadeakash2${Math.floor(Math.random() * 6)}@gmail.com`

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Akash walzade",
                "gender": "male",
                "email": "walzadeakash220@gmail.com",
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 9b8a549007636a57d36eedf4348f7e9686d8470667e5f97598f1795bf684c2f8"
            }
        }).then((res) => {
            // cy.log(email)
            cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.duration).to.be.lessThan(500)
        })
    })
    it("check the GET autho with gorest", () => {
        let mail = `walzadeakash2${Math.floor(Math.random() * 6)}@gmail.com`
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/994224",
            body: {
                "name": "Akash walzade",
                "gender": "male",
                "email": mail,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 9b8a549007636a57d36eedf4348f7e9686d8470667e5f97598f1795bf684c2f8"
            }




        }).then((res) => {
            cy.log(res)

            expect(res.status).to.eql(200)
        })

    })
    it.only("verify the delete method using gorest",()=>{
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/994618",
            headers: {
                Authorization: "Bearer 9b8a549007636a57d36eedf4348f7e9686d8470667e5f97598f1795bf684c2f8"
            }

        }).then((resp)=>{
            cy.log(resp)
            
        })

    })
})