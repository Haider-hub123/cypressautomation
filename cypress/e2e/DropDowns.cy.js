describe('Handle dropdown', function() {

  it.skip('dropdown with select', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.title().should('eq', 'OrangeHRM');
  })


  it.skip('dropdown without select', function() {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('Japan').type('{enter}')
    cy.get('#select2-billing_country-container').should('have.text','Japan')
  })

  it.skip('auto suggested dropdown', function() {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').type('Delhi')
    cy.get('.suggestion-title').contains('Delhi University').click()
  })

  it('Dynamic auto suggestion drop down', function() {
    cy.visit('https://www.google.com/');
    cy.get('.gLFyf').type('cypress automation')
    cy.wait(3000)
    cy.get('div.wM6W7d>span').should('have.length',13)
    cy.get('div.wM6W7d>span').each(($el, index, $list)=>{

        if($el.text()=='cypress automation tutorial'){


            cy.wrap($el).click()
        }
    }
    
    )
    cy.get('.gLFyf').should('have.value','cypress automation tutorial')

  })



})