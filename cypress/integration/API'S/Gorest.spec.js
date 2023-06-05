///<reference types = "cypress"/>
describe("verify the Get authorization with Gorest", () => {
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
            expect(res.body[3].gender).to.eql("female")
        })
    })
    it('Validate Basic auth Post Api', () => {
        let email = `tenali.ramakrishna@155${Math.floor(Math.random() * 6)}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": "email",
                "status": "active"
            },
            headers: {
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res) => {
            cy.log(email)
            cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.duration).to.be.lessThan(500)
        })
    })


})

// // it('Validate Basic auth Post Api', () => {
//     let email = `tenali.ramakrishna@15${Math.floor(Math.random() * 6)}ce.com`
//     cy.request({
//         method: "POST",
//         url: "https://gorest.co.in/public/v2/users",
//         body: {
//             "name": "Tenali Ramakrishna",
//             "gender": "male",
//             "email": email,
//             "status": "active"
//         },
//         headers: {
//             Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
//         }
//     }).then((res) => {
//         cy.log(email)
//         cy.log(res)
//         expect(res.status).to.eql(201)
//         expect(res.duration).to.be.lessThan(500)
//     })
// })

