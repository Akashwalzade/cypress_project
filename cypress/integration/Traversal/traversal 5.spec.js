


describe('Verify the cypress traverse methods', () => {
    it('Tc-01: To get the all dom sibilings elemnts, Nextuntil', () => {
        // cy.visit('https://www.lenskart.com/')
        // cy.get('#content').nextUntil('#footer-container').should('have.length',2)
        // cy.get('.navigation').nextUntil('.three-col-layout').should('have.length',4)
        cy.visit('https://www.amazon.in/')
        cy.get('.nav-left').nextUntil('.nav-sprite').eq(5).should('have.length', 1)
        cy.get('#nav-flyout-iss-anchor').nextUntil('#nav-progressive-subnav').should('have.length', 3)
        cy.get('.nav-left').nextUntil('.nav-right').should('have.length', 3)
        // cy.wait(5000)
        // cy.get('input[type="text"]').type('i phone ')
        // cy.get('#nav-search-submit-button').click()
        // cy.get('.a-link-normal').should('be.visible')
        // cy.get('.a-size-medium')
    })
    it('tc-02:get parents DOM element of elements, use the .parents() command',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1bEAQy _2iN8uD"]').first().parents().should('have.class','_6t1WkM _3HqJxg')
        cy.get('[class="kJjFO0 _3DIhEh"]').first().parents().should('have.class','_3ChZRr _1rs5Pv')
        cy.get('[class="_3qX0zy"]').parents().should('have.length',8)
        cy.get('[class="_3SkBxJ"]').parents().should('have.length',10)
   
    })
    it.only('tc-03: To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#')
        cy.get('[href="#/offers"]').parentsUntil('[class="container"]').first().should('have.length',1)
        cy.get('[class="cart-icon"]').parentsUntil('#root').should('have.length',4)
    })
    
})