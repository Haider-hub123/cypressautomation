describe('File upload', function() {
  it.skip('single file upload', function() {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile({filePath:'iftikhar.Ahmed.pdf',fileName:'myfile.pdf'});
    cy.get('#file-submit').click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
   
  })

   it('single file upload -  rename', function() {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile({filePath:'iftikhar.Ahmed.pdf',fileName:'myfile.pdf'});
    cy.get('#file-submit').click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
   
  })


  it('single file upload  drag and drop', function() {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile("iftikhar.Ahmed.pdf",{subjectType:'drag-n-drop'})
    cy.wait(5000);
   cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('iftikhar.Ahmed.pdf')
  })
it.skip('multiple file uploaded', function() {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

    cy.get('#filesToUpload').attachFile(["cypress.pdf.pdf","iftikhar.Ahmed.pdf"])
    cy.wait(5000);
    cy.get(':nth-child(6) > strong').should('contain.text',"Files You Selected:")
  })


it.only('shado down file upload', function() {
    cy.visit('http://8.213.19.53/auth/login');

  cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('cypress.pdf.pdf')
  cy.get('.smart-item-name',{includeShadowDom:true}).contains('cypress.pdf.pdf')
  })

})