

describe('verify the traverse method',()=>{
    it('Tc-01:closect anscestor DOM element,closest()',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.checkoutKartModal').closest('div').should('have.class','modal-wrapper')
    })
    it('Tc-02:get DOM elements that match a specific selector, use the .filter() command',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart>a').filter('.blinkingText').should('have.text','Free Access to InterviewQues/ResumeAssistance/Material')
    })
    it('Tc-03:get parent DOM element of the elements , use the .parent() command',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.container').parent().should('have.id','root')
    })
})                                    