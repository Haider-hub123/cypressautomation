import Login from "../pageobjects/LoginPage2.js";
describe('My Test', function() {

  it.skip('My first test under demo', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.fixture('TestLogin.json').then((data)=>{
    cy.get("input[placeholder='Username']").type(data.Username);
     cy.get("input[placeholder='Password']").type(data.Password);
     cy.get("button[type='submit']").click();
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected);
    })
  })

/// throgh hooks
let userdata;
before(()=>{

 cy.fixture('TestLogin.json').then((data)=>{
  userdata=data;

})
})

  it.skip('My first test  throgh hooks', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[placeholder='Username']").type(userdata.Username);
     cy.get("input[placeholder='Password']").type(userdata.Password);
     cy.get("button[type='submit']").click();
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected);
    })
//POM
it.only('LoginTest', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.fixture('TestLogin.json').then((data)=>{
  const ln= new Login();
   ln.setUserName(data.Username);
   ln.setPassword(data.Password);
   ln.clickSubmit();
   ln.verifyLogin();


})  
})
})