///<reference types ="cypress"/>

describe("verify the post req by chaining", () => {
    it("tc-01 post api", () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `tenali.ramakrishna@165${Math.random() * 5}ce.com`,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 6911099df1cf9c6b05344682e553c4e2442dd6fcc61255012c01c9c3ab5ef8c5"
            }
        }).then((res) => {
            expect(res.status).to.eql(201)
            // cy.log(res)
            // cy.log(res.body.id)
            return res.body.id
        }).then((id) => {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    "name": "Walzade Akash",
                    "gender": "male",
                    "email": `walzadeakash22${Math.random() * 9}@gmail.com`,
                    "status": "active"
                },
                headers: {
                    Authorization: "Bearer 6911099df1cf9c6b05344682e553c4e2442dd6fcc61255012c01c9c3ab5ef8c5"
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                return res.body.id
                
           
            }).then((id) => {
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: "Bearer 6911099df1cf9c6b05344682e553c4e2442dd6fcc61255012c01c9c3ab5ef8c5"
                    }

                }).then((res)=>{
                    cy.log(res)
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})