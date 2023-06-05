describe('verify the fixture', () => {
    let info
    before(() => {
        cy.fixture('contactus').then((obj) => {
            info = obj
        })


    })
    
    it('Verify fixtures with normal object', () => {
        cy.log(info)
        //Step1 Visit the apps
        cy.visit('https://codenboxautomationlab.com/contact/')
        //step 2 Find Name elemnt
        cy.get('#nf-field-1').type(info.name)
        //step 3 Find email elemnt
        cy.get('#nf-field-2').type(info.Email)
        //step 4 Find msg elemnt 
        cy.get('[id="nf-field-3"]').type(info.msg)
        //Step 5 click
        cy.get('#nf-field-4').click()
        cy.wait(17000)
        cy.get('.nf-response-msg > p').should('contain', info.Smsg)
    })
    it('Test', () => {
        cy.log(info)
    })

    it('Test2', () => {
        cy.log(info)
    })











    // it('validate the data using normal object',()=>{
    //     cy.fixture('example').then((obj)=>{
    //         cy.log(obj)

    //         cy.visit('https://admin-demo.nopcommerce.com/login')
    //         cy.get('#Email').type(obj.email)// email
    //         cy.get('#Password').type(obj.password)// password
    //         cy.get('[type="submit"]').click()
    //     })
    // })
})

// let info
// before(() => {
//     cy.fixture('Contact_us').then((obj) => {
//         info = obj
//     })