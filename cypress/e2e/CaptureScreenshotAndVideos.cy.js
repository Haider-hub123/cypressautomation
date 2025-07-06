describe('my suite', function() {

  it('Capture screen shots and videos', function() {
    cy.visit('https://automationteststore.com/');
    /*cy.screenshot('homepage')
    cy.wait(5000);
    cy.get("img[title='Automation Test Store']").screenshot('logo');*/
//if you want to captrue screen shots and videos of failure then you must run in CLI 
    cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=65']").click();
    cy.get('.maintext').should('have.text','camera');

  })
})