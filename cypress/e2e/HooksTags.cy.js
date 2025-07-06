//before
//after
//beforeEach
//afterEach
describe('My TestSuite  ', function() {


    before(()=>{
cy.log("**** lunching The app*****")


    })

after(()=>{

cy.log("****  logout the app*****")


    })

    beforeEach(()=>{


cy.log("****  app login from every it  block *****")

    })

afterEach(()=>{
cy.log("****  app logout from  every it block *****")

})

  it('Search', function() {
cy.log("**** searhing*****")
   
  })

  it(' Advance Search', function() {

   cy.log("****  Advance Searhing*****")
  })

})
