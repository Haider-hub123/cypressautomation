class Login{



txtuname=":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
txtpassword =":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
btn= "button[type='submit']";
lblmsg =".oxd-topbar-header-breadcrumb > .oxd-text";


setUserName(username){


cy.get(this.txtuname).type(username);


}

setPassword(password){

cy.get(this.txtpassword).type(password);

}

clickSubmit(){

cy.get(this.btn).click();



}


verifyLogin(){


cy.get(this.lblmsg).should('have.text','Dashboard');



}
}
export default Login;