// fixtures can cantrolls repeatation of code

// hardcoded code can make less efficient for tetser so we use fixtures 

describe('fixtures', () => {


    let obj1 = [{

        firstName: 'akash',
        lastName: 'lastnametest',
        email: "trialmail@gmail.com",
        msg: "this is test data 1",
        successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
    },
    {

        firstName: 'nanji',
        lastName: 'lastnametest22',
        email: "trialmail2@gmail.com",
        msg: "this is test data 2",
        successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
    }]
    // it('Using Hardcoded',()=>{
    //     cy.visit('https://www.weifieldcontracting.com/contact/')
    //     cy.get('#input_2_1_3').type('firsttestname')
    //     cy.get('#input_2_1_6').type('lasttestname')
    //     cy.get('#input_2_2').type('amago12@gmail.com')
    //     cy.get('#input_2_3').type('writing fixture code')
    //     cy.get('[class="gform_button button"]').click()
    //     cy.get('#gform_confirmation_message_2').should('have.text','Thanks for contacting us! We will get in touch with you shortly.')
    // })
    it.skip('Using object as hardcode value', () => {
        cy.visit('https://www.weifieldcontracting.com/contact/')
        cy.get('#input_2_1_3').type(obj1.firstName)
        cy.get('#input_2_1_6').type(obj1.lastName)
        cy.get('#input_2_2').type(obj1.email)
        cy.get('#input_2_3').type(obj1.msg)
        cy.get('[class="gform_button button"]').click()
        cy.get('#gform_confirmation_message_2').should('have.text', obj1.successMsg)
    })

    it('using multiple object',()=>{
        obj1.forEach((el)=>{
            cy.visit('https://www.weifieldcontracting.com/contact/')
            cy.get('[name="input_1.3"]').type(el.firstName)
            cy.get('[name="input_1.6"]').type(el.lastName)
            cy.get('#input_2_2').type(el.email)
            cy.get('#input_2_3').type(el.msg)
            cy.get('#gform_submit_button_2').click()
            cy.get('#gform_confirmation_message_2').should('have.text',el.successMsg)
        })
    })
})