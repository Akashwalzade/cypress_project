

describe("check the Table functionality", () => {

    let sum = 0
    it.skip('Verify the total sum', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            //cy.log(el.text())
            if (index != 0) {
                //cy.log(el.children().last().text())
                //cy.log(typeof(el.children().last().text()))
                cy.log(typeof (Number(el.children('td').last().text())))
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(() => {
            expect(sum).to.eq(7100)

            cy.log(sum)

        })

    })
    it("Verify the author column", () => {

        let authercolumn = ['','Amit','Mukesh','Animesh','Mukesh','Amod','Amit']
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            //cy.log(el.text())
            if (index != 0) {
                cy.get(el).children().eq(1).should('have.text', authercolumn[index])
            }

        })


    })

})