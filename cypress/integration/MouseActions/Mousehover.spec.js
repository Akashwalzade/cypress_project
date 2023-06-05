

describe('verify the mouse hover actions',()=>{
    it('verfication for mousehover button',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('[class="mouse-hover-content"]').invoke('show') // here we access the parent element of top and reload
        cy.contains('Top').click() // click on top it will fletch on the url 
        cy.url().should('include','top')// assert the top element with url
    })

    it.only('verify the mouse hover functions',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.contains('Find a List or Registry').click()
        cy.url().should('include','nav_ListFlyout_find')

    })


})





// it('verify the mouseover functionality', () => {
//     cy.visit('https://www.amazon.com/')
//     cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
//     cy.contains('Find a List or Registry').click()
//     cy.url().should('include', 'nav_ListFlyout_find')
//     //https://www.amazon.com/hz/wishlist/intro
// })