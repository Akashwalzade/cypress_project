describe('Validate Basic auth API', () => {

    it('Verify Gorest API', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Mahesh Aher",
                "gender": "male",
                "email": `Minskole12${Math.random() * 3}@gmail.com`,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res) => {
         return res.body.id
        }).then((id) => {
            //cy.log(id)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    "name": "Mahesh Sunil Aher",
                    "email": `Mahesh.aher${Math.random() * 2}@gmail.com`,
                    "status": "active"
                },
                headers: {
                    Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
                }
            }).then((res) => {
                return res.body.id
            }).then((id)=>{
                cy.log(id)
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
                    }
                }).then((res)=>{
                    cy.log(res)
                    expect(res.status).to.eql(204)
                })
            })
        })
    })
})