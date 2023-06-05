///<reference types="cypress"/>

// import fixtData from '../fixtures/user.json';
// const fixtData = require('../fixtures/user.json');

xdescribe('fixtures', () => {

    let obj1 = [{
              firstName: 'ankit',
              lastName: 'testLastName1',
              email: "testEmail@gmail.com",
              msg: "this is test data",
              successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
    }, {
              firstName: 'test123',
              lastName: 'testLastName2',
              email: "testEmail2@gmail.com",
              msg: "this is test datdsadasdsadsaa2",
              successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
    }]

    // it('hardcoded values',()=>{
    //     cy.visit('https://www.weifieldcontracting.com/contact/')
    //     cy.get('[name="input_1.3"]').type('testName')
    //     cy.get('[name="input_1.6"]').type('testLastName')
    //     cy.get('#input_2_2').type('test@gmail.com')
    //     cy.get('#input_2_3').type('test msgtest msgtest msgtest msgtest msgtest msgtest msg')
    //     cy.get('#gform_submit_button_2').click()
    //     cy.get('#gform_confirmation_message_2').should('have.text','Thanks for contacting us! We will get in touch with you shortly.')
    // })

    // it('hardcoded values for single object',()=>{
    //     cy.visit('https://www.weifieldcontracting.com/contact/')
    //     cy.get('[name="input_1.3"]').type(obj1[0].firstName)
    //     cy.get('[name="input_1.6"]').type(obj1[0].lastName)
    //     cy.get('#input_2_2').type(obj1[0].email)
    //     cy.get('#input_2_3').type(obj1[0].msg)
    //     cy.get('#gform_submit_button_2').click()
    //     cy.get('#gform_confirmation_message_2').should('have.text',obj1[0].successMsg)
    // })

    it('executing test case for multiple data', () => {
              obj1.forEach((el) => {
                        cy.visit('https://www.weifieldcontracting.com/contact/')
                        cy.get('[name="input_1.3"]').type(el.firstName)
                        cy.get('[name="input_1.6"]').type(el.lastName)
                        cy.get('#input_2_2').type(el.email)
                        cy.get('#input_2_3').type(el.msg)
                        cy.get('#gform_submit_button_2').click()
                        cy.get('#gform_confirmation_message_2').should('have.text', el.successMsg)
              })
    });

});

describe('Extract data from fixture using js', () => {

    it('Using js import statement', () => {
              cy.log(fixtData)
              // fixtData  ---> Array
              // fixtData[0]  ---> object
              cy.visit('https://www.weifieldcontracting.com/contact/')
              cy.get('[name="input_1.3"]').type(fixtData[0].firstName)
              cy.get('[name="input_1.6"]').type(fixtData[0].lastName)
              cy.get('#input_2_2').type(fixtData[0].email)
              cy.get('#input_2_3').type(fixtData[0].msg)
              // cy.get('#gform_submit_button_2').click()
              // cy.get('#gform_confirmation_message_2').should('have.text', el.successMsg)
    });

    it.only('Using js require keyword', () => {
              cy.log(fixtData)
              // fixtData  ---> Array
              // fixtData[0]  ---> object
              cy.visit('https://www.weifieldcontracting.com/contact/')
              cy.get('[name="input_1.3"]').type(fixtData[0].firstName)
              cy.get('[name="input_1.6"]').type(fixtData[0].lastName)
              cy.get('#input_2_2').type(fixtData[0].email)
              cy.get('#input_2_3').type(fixtData[0].msg)
              // cy.get('#gform_submit_button_2').click()
              // cy.get('#gform_confirmation_message_2').should('have.text', el.successMsg)
    });
});


describe('Fetch data from fixture file using cypress fixture method', function () {

    //           //part of before hook
    //           before("Using this keyword", function () {
    //                     //access fixture data
    //                     cy.fixture('example').then(function (fixData) {
    //                               this.obj = fixData
    //                     })
    //           });


    it.only('Using cy.fixture get data from fixture file', () => {
              // cy.fixture(filepath,encoding, options)

              // cy.fixture('user').then(fixtFileData => {
              //           cy.log(fixtFileData)
              // })

              // cy.fixture('user.json').then(fixtFileData => {
              //           cy.log(fixtFileData)
              // })

              // Nested path
              cy.fixture('ABC/user.json').then(fixtFileData => {
                        cy.log(fixtFileData)
                        // fixtFileData  ---> Array
                        // fixtFileData[0]  ---> object
                        cy.visit('https://www.weifieldcontracting.com/contact/')
                        cy.get('[name="input_1.3"]').type(fixtFileData[0].firstName)
                        cy.get('[name="input_1.6"]').type(fixtFileData[0].lastName)
                        cy.get('#input_2_2').type(fixtFileData[0].email)
                        cy.get('#input_2_3').type(fixtFileData[0].msg)
              })
    });

    //           // test case
    //           it('Test Case1: Geeting data from this obj', function () {
    //                     // launch URL
    //                     // cy.visit("https://register.rediff.com/register/register.php")
    //                     // // data driven from fixture
    //                     // cy.get('[width="200"] > input').type(this.obj.fullName)
    //                     // cy.get('#mobno').type(this.obj.number)
    //           });

    //           it('Test Case1: read audio file', function () {
    //                     cy.fixture('audio/sound.mp3', 'base64').then((mp3) => {
    //                               const uri = 'data:audio/mp3;base64,' + mp3
    //                               const audio = new Audio(uri)
    //                               audio.play()
    //                     });
    //           });
});