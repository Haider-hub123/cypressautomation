
describe('My First Test', function() {
  it('verify the title - positive', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.title().should('eq', 'OrangeHRM');
  });

  it('verify the title - negative', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.title().should('eq', 'OrangeHRM123');
  });

  
});
