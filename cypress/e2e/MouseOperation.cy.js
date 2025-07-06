describe('MouseHover', function() {

  it.skip('Right click', function() {
cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo/fontawesome-icons.html')
cy.get('.fa-edit').should('not.be.visible')
cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
cy.get('.fa-edit').should('be.visible')


  })


   it('Right click approch2', function() {
cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo/fontawesome-icons.html')
cy.get('.fa-edit').should('not.be.visible')
cy.get('.context-menu-one.btn.btn-neutral').rightclick();
cy.get('.fa-edit').should('be.visible')


  })


   it('Doubleclick', function() {
cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')
cy.frameLoaded('#iframeResult').find("p[ondblclick='myFunction()']").trigger('dblclick');

  })


    it('drag and drop by using plugin', function() {
cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
cy.wait(3000)
cy.get('#box6').drag('#box106',{force:true})

  })

    it.only('scrolling the page', function() {
cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
cy.get('.not-prose > :nth-child(33)').scrollIntoView({duration:2000});
cy.get('.not-prose > :nth-child(33)').should('be.visible')
  })
})