describe('Normal alert', function() {

  it('js alert', function() {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsAlert()']").click()
    cy.on('window:alert',(t)=>{


        expect(t).to.contains('I am a JS Alert');
    })


    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })

it('js confirmation alert with ok button', function() {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get("button[onclick='jsConfirm()']").click()
   cy.on('window:confirm',(t)=>{


        expect(t).to.contains('I am a JS Confirm');
    })

    cy.get('#result').should('have.text', 'You clicked: Ok')

  })

  it('js confirmation alert with cancel button', function() {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get("button[onclick='jsConfirm()']").click()
   cy.on('window:confirm',(t)=>{


        expect(t).to.contains('I am a JS Confirm');
    })

    cy.on('window:confirm',()=> false);

     cy.get('#result').should('have.text', 'You clicked: Cancel')
    
    })

it('js promt alert', function() {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

 cy.window().then((win)=>{
cy.stub(win,'prompt').returns('welcom')
cy.get("button[onclick='jsPrompt()']").click()
 //cy.on('window:prompt',()=> false);
cy.get('#result').should('have.text', 'You entered: welcom')

})
    })

it.only('Authenticated Alert', function() {
    //Approch1
   /* cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
                                                                          username:"admin",
                                                                          password:"admin"
    }})

cy.get("div[class='example'] p").should('have.contain','Congratulations!')

*/
cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

})
})
