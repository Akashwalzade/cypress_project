///<reference types = 'cypress'/>

describe('verify the functionality of radio button',()=>{
    beforeEach(()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('check th functions of radio button',()=>{
        cy.get('.Example > form >input').eq(6).should('be.checked')
        cy.get('.Example > form >input').eq(6).should('have.attr','checked')
        cy.get('.Example > form >input').eq(7).should('not.be.checked')


    })
    it('check the redio button one by one using wrap and each',()=>{
        cy.get('[type="radio"]').each((el)=>{
            cy.wrap(el).check().should('be.checked')
        })

    })
    it.only("validate the url",()=>{
        cy.url().should('contain','forms')
        .and('eq',"forms")
    })
})