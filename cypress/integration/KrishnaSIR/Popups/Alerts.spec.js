///<reference types="cypress"/>

Cypress.on("uncaught:exception", () => {
    return false;
});

describe("cypress commans to handle the elemsnts outside DOM", () => {
    it("Validate the Browser Page Title", () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
        cy.title().then(title => {
            cy.log(title)
            expect(title).to.eql("WebDriver | Popups & Alerts")
        });

    });
    it.only("validate browser page url", () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
        cy.url().then(url => {
            cy.log(url);
            expect(url).to.eql("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
            
        });
        // cy.url().should("contain", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
        cy.url().should("includes", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
        // cy.url().should("have.text", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");


    })
})