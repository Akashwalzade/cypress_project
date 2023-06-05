// All mouse actions

// const { beforeEach } = require("mocha")

//MouseActions 
//Click
//RigthClick
//DoubleClick
//MouseOver
//MouseMove
//MouseUp
//MouseDown
//Scrool

describe('Verify the functionality of mouse buttons and actions', () => {
    // beforeEach(() => {
    //     cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
    // })
    it('check all the actions and functions of mouse , verify the scroll down', () => {
        cy.get('[href="https://eviltester.com"]').scrollIntoView().click()
    })
    // cypress doesnt supports multiple tabs
    it('remove _black value so doesnt open in another windows', () => {
        cy.get('[href="https://eviltester.com"]').invoke('removeAttr', 'target').click()
        // assetions for next page or tab
        cy.get('[href="/blog"]').eq(1).should('have.class','btn btn-lg btn-success')

    })
    it('Removeing _black value',()=>{
        cy.get('[href="https://eviltester.com"]').invoke('removeAttr','target').click()
    })

    it('verify the methods mousedown,mouseup & mouseMove',()=>{
        cy.get('#draggable1').trigger('mousedown',{which:1})
        cy.get('#droppable1').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable1 > p').should('have.text','Dropped!')
        
    })
    it.only('verfication for mousehover button',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('[class="mouse-hover-content"]').invoke('show') // here we access the parent element of top and reload
        cy.contains('Top').click() // click on top it will fletch on the url 
        cy.url().should('include','top')// assert the top element with url
    })

})
