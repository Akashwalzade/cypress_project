


describe('Hooks Example', () => {
    beforeEach('this is execute before each blaock', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
    })
    afterEach('test', () => {
        cy.get('._2xm1JU').should('be.visible')
    })
    it('tc 1-children()', () => {
        cy.get('._1kidPb').children().should('have.length', 9)
    })
    it('tc 2-find()', () => {
        cy.get('._1kidPb').children().first().find('svg').should('have.class', 'RWB9Wm')
        cy.get('._1kidPb').children().first().find('svg').should('have.attr', 'height', '8')
    })
    it('tc 3-filter()', () => {
        cy.get('._1kidPb').children().filter('a[href="/travel/flights?otracker=nmenu_Flights"]').should('have.text', 'Flights')
    })













})