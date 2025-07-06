describe('Mouse Operation and Commands', () => {

  it('Handling links', () => {
    cy.visit('https://automationteststore.com/', {
      failOnStatusCode: false
    });

    // Wait for the page to load before interacting
    cy.wait(3000);

    //witout doing custom commands
   // cy.get("div[id='block_frame_featured_1769'] a[title='BeneFit Girl Meets Pearl'").click();
   
   
   cy.ClickLink("BeneFit Girl Meets Pearl");
   cy.get('.bgnone').should('have.text','BeneFit Girl Meets Pearl');
});

  it('Overwriting existing commands', () => {
    // You can define or overwrite Cypress commands here
  });

  it('Login commands', () => {
    // You can create reusable login commands in commands.js
  });

});
