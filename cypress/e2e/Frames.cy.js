
describe('Handling frame', function () {
  it('approach 1', function () {
    // Step 1: Visit the iframe page directly
    cy.visit('https://the-internet.herokuapp.com/iframe');

    // Step 2: Access the iframe content and type into the body
    cy.get('iframe#mce_0_ifr') // correct iframe selector
      .its('0.contentDocument.body').should('not.be.empty') // wait for iframe to load
      .then(cy.wrap) // wrap the body
      .clear()
      .type('welcome');
  });



  it('approach 2 using custom command', function () {
    // Step 1: Visit the iframe page directly
    cy.visit('https://the-internet.herokuapp.com/iframe');

    // Step 2: Access the iframe content and type into the body
    cy.get('iframe#mce_0_ifr') // correct iframe selector
      .its('0.contentDocument.body').should('not.be.empty') // wait for iframe to load
      .then(cy.wrap) // wrap the body
      .clear()
      .type('welcome');
  });

  
  it.only('approach3  using cypress plugin', function () {
    // Step 1: Visit the iframe page directly
    cy.visit('https://the-internet.herokuapp.com/iframe');
 cy.frameLoaded('iframe#mce_0_ifr');
  cy.iframe('iframe#mce_0_ifr').clear().type('welcome');
  });
});
