///<reference types = "Cypress"/>

describe('check the redbus web fucntionality', () => {
    it('verify the calender for redbus web', () => {

        let date = new Date()
        date.setDate(date.getDate() + 300)
        let da = date.getDate()// current date
        let month = date.getMonth()//Return current month index
        //jan = 0 feb = 1 march = 2
        let fullMonth = date.toLocaleString('default', { month: "long" })
        let fullMonth2 = date.toLocaleString('default', { month: "short" })
        let year = date.getFullYear()
        cy.log(da)
        //cy.log(month)
        cy.log(fullMonth)
        //cy.log(fullMonth2)
        cy.log(year)
        cy.visit('https://www.redbus.com/')
        cy.get('#date-box').click({ force: true })
        function selectMonthYear() {
            cy.get('.DayNavigator__CalendarHeader-sc-1tlckkc-1.ccLrBz').eq(1).then((el) => {
                cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('#next').click({ force: true })
                    selectMonthYear()
                }
            })

            cy.get('.DayNavigator__CalendarHeader-sc-1tlckkc-1.ccLrBz').eq(1).then((el) => {
                cy.log(el.text())
                if (!el.text().includes(fullMonth)) {
                    cy.get('#next').click({ force: true })
                    selectMonthYear()
                }
            })
         }

        selectMonthYear()
        function selectDate(){
            cy.get('.DayTiles__CalendarDaysSpan-sc-14em0t0-1.xaHaF').contains(da).click({force: true})
        }
        selectDate()
    })
})