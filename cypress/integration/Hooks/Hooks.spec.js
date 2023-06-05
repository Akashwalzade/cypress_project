

// hooks methods
// before()----> it executes before all test cases
// beforeEach()----> it excutes before each testcase
// afterEach()-----> it executes after each test case
// after()---------> it execute after all test case







describe('HOOKS',()=>{

    before('Before All',()=>{
        cy.log(' i will execute before all block')
    })
    beforeEach('Before Each',()=>{
        cy.log(' i will execute before each block')
    })
    afterEach('Before Each',()=>{
        cy.log(' i will execute after each block ')
    })
    after('After All',()=>{
        cy.log(' i will execute After All blocks')
    })
    it('tc-01',()=>{
        cy.log('test case 1')
    })
    it('tc 02',()=>{
        cy.log(' test case 2')
    })
    it('tc-03',()=>{
        cy.log('test case 3')
    })
    it('tc 04',()=>{
        cy.log(' test case 4')
    })


















})


