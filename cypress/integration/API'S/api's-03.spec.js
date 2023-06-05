///<reference types="cypress"/>
describe("validate the apis for the multiple users",()=>{
    it.skip("check the functionality for multiple users",()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=1"
        }).then((responce)=>{
            cy.log(responce)
            expect(responce.body.data.length).to.equal(6)
        })
    })
    it("check the functionality for multiple users",()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=1"
        }).then((responce)=>{
            responce.body.data.forEach(el => {
                expect(el).to.haveOwnProperty('id')
                expect(el).to.haveOwnProperty('email')
                expect(el).to.haveOwnProperty('first_name')
                expect(el).to.haveOwnProperty('last_name')
                expect(el).to.haveOwnProperty('avatar')
                expect(el).to.have.all.keys('id','email','first_name','last_name','avatar')
                

                
            });
        })
    })
})