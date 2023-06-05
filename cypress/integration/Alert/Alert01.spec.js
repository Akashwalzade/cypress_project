///<reference types = "cypress"/>

describe("check the functionality for the alert", () => {

    it("verify the Alert functionality", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsAlert()"]').click()
        cy.on('windows:alert', (text) => {  // cy.on is use to acces the outside procees of cypress test runner
            cy.log(text)
            expect(text).to.eql('I am a JS Alert')

        })

       
    })
    // alert with js using windows prompt
    it('verify the alert functionality', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'alert').as('alert')
        })

        cy.get('[onclick="jsAlert()"]').click()
        cy.get('@alert').should('have.been.calledOnceWith', 'I am a JS Alert')

    })

    // confirm with js
    it('verify the confirm with js',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('windows:confirm',(text)=>{
            expect(text).to.eql.apply('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text',"You clicked: Ok")
    })
//       confirm with js using windows prompt
    it.only('verify the confirm using windows',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el,"confirm").as("element")

        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('@element').should('have.been.calledOnceWith', 'I am a JS Confirm')
    })
    // prompt using windows
    it('Verify promt alert with window',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el,'prompt').returns('Akash walzade')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain','Akash')
    })

// prompt for null value using contain
    
    it('Verify promt alert with window',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el,'prompt').returns("")
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain','You entered:')
    })

    it.only('Verify promt alert with window',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el,'prompt').callsFake(()=>null)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain','You entered:')
        cy.get('#result').should('be.visible')
    })



})