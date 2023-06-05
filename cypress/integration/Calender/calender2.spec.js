describe('Verify the date picker functionality',()=>{

    it('Verify Calender through cypress',()=>{
        let date = new Date()
        date.setDate(date.getDate() + 300)
        let da = date.getDate()// current date
        let month = date.getMonth()//Return current month index
        //jan = 0 feb = 1 march = 2
        let fullMonth = date.toLocaleString('default',{month:"long"})
        let fullMonth2 = date.toLocaleString('default',{month:"short"})
        let year = date.getFullYear()
        cy.log(da)
        //cy.log(month)
        cy.log(fullMonth)
        //cy.log(fullMonth2)
        cy.log(year)
         cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker1').click()
        function selectMonthYear(){
            cy.get('.ui-datepicker-title').then((el)=>{
                 cy.log(el.text())
                 cy.log(typeof(el.text()))
                if(!el.text().includes(year)){
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()
                }
            })
            cy.get('.ui-datepicker-title').then((el)=>{
                // cy.log(el.text())
                // cy.log(typeof(el.text()))
               if(!el.text().includes(fullMonth)){
                   cy.get('.ui-datepicker-next.ui-corner-all').last().click()
                   selectMonthYear()
               }
           })

        }
        selectMonthYear()

        function selectDate(){
            cy.get('.ui-state-default').contains(da).click()
        }
        selectDate()


    })
})