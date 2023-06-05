///<reference types ="cypress"/>

describe('validate api calls using Gorest', () => {
    it("verify the GET call using Gorest", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            header: {
                Authorization: "Bearer 6911099df1cf9c6b05344682e553c4e2442dd6fcc61255012c01c9c3ab5ef8c5"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })
    it('Validate POST api using cy.request', () => {
        let email = `tenali.ramakrishna@122${Math.floor(Math.random() * 6)}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": email,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 6911099df1cf9c6b05344682e553c4e2442dd6fcc61255012c01c9c3ab5ef8c5"
            }
        }).then((res) => {
            cy.log(res)
            // res.body.id
            
            expect(res.status).to.eq(201)
        })

    })
    it('Validate the PUT api req using cy.req', () => {
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/1266184",
            body:{
                "name":"Akash walzade", 
                "email":`allasani.peddana@1${Math.floor(Math.random() * 6)}ce.com`, 
                "status":"active"
            },
            headers:{
                Authorization: "Bearer 6911099df1cf9c6b05344682e553c4e2442dd6fcc61255012c01c9c3ab5ef8c5"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            
        })
    })
    it.only('Validate the DELETE api req using cy.req',()=>{
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/1266380",
            header: {
                Authorization: "Bearer 6911099df1cf9c6b05344682e553c4e2442dd6fcc61255012c01c9c3ab5ef8c5"
            }
        }).then((res)=>{
            cy.log(res)
        })
        
        

    })
})