describe('my suite', function() {

  it('Navigation test 123', function() {
    cy.visit('https://automationteststore.com/');
    cy.title().should('eq', 'A place to practice your automation skills!');

    cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=65']").click();
    cy.get('.maintext').should('have.text','Books');

    cy.go('back');

    cy.title().should('eq', 'A place to practice your automation skills!');
    cy.go('forward');
    cy.get('.maintext').should('have.text','Books');
  })
})