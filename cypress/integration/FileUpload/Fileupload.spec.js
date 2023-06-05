// import { describe } from "mocha";

describe('Functionality of FileUpload',()=>{
    it.skip('tc-01 check the single file uploading functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('NewPic.png')
        cy.get('#file-submit').click()

        cy.get('.example>h3').should('have.text','File Uploaded!')
        cy.get('.example>h3').should('contain','File Uploaded!')
        // cy.get('.example>h3').should('eq','File Uploaded!')
    })
    it.skip('tc-02 check for multiple files uploading functionality',()=>{
        let files = ['NewPic.png','NewPic2.png','NewPic3.png']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('[name="filesToUpload"]').attachFile(files)
        cy.get('#fileList').children().should('have.length',3)
    })
    it('tc-03 check Uploded file NameChange',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'NewPic.PNG',fileName:'nanji.PNG'})
        cy.get('#file-submit').click()
        cy.get('div > h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('nanji')
        cy.get('#uploaded-files').should('contain','nanji')
    })
})