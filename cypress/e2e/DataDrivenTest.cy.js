describe('My test suite', function() {

  it('Data driven test', function() {
    cy.fixture('OrangeHRM.json').then((data) => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      
      data.forEach((userdata) => {
        // Clear inputs before entering new values with slower typing
        cy.get("input[placeholder='Username']").clear().type(userdata.Username, { delay: 100 });
        cy.get("input[placeholder='Password']").clear().type(userdata.Password, { delay: 100 });
        
        cy.get("button[type='submit']").click();
        
        // Wait for a short time before checking the result
        cy.wait(5000); // Introducing delay for better readability of test execution

        if(userdata.Username === 'Admin' && userdata.Password === 'admin123') {
          // Ensure successful login message appears
          cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text', userdata.expected)
            .should('be.visible');
          
          // Log out
          cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); // Logout

          // Wait for the page to reload and ensure login form is visible
          cy.reload();  // Ensure the page is reset properly

          // Wait for login form to be visible after reload
          cy.get("input[placeholder='Username']").should('be.visible');
          cy.get("input[placeholder='Password']").should('be.visible');
        } else {
          // Ensure the error alert appears for invalid login
          cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
            .should('have.text', 'Invalid credentials')
            .should('be.visible');
        }
      });
    });
  });
});
