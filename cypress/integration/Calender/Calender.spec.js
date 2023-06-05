

describe('verify the calender and data picker functionality', () => {
    it('check the date picker functionality', () => {
        let date = new Date()
        date.setDate(date.getDate() + 300)  // it will give the future date

        let currentdate = date.getDate()
        let month = date.getMonth()// it will give month in index wise like (january=> 0,feb=>1,march=>2)
        let fullMonth = date.toLocaleDateString('default', { month: "long" })// march
        let shortMonth = date.toLocaleDateString('default', { month: "short" })// mar
        let year = date.getFullYear()





        cy.log(currentdate)
        //cy.log(month) // 
        cy.log(fullMonth)

        cy.log(shortMonth)
        cy.log(year)
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker1').click()
        function selectMonthYear() {
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                cy.log(typeof (el.text()))
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()
                }
            })
            cy.get('.ui-datepicker-title').then((el) => {
                if (!el.text().includes(fullMonth)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()

                }
            })
        }

        selectMonthYear()
        function selectDate() {
            cy.get('.ui-state-default').contains(currentdate).click()
        }
        selectDate()
    })
})

