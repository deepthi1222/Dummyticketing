const homePage = require('../page_Elements/Home_Page.json');
const config = require('../../fixtures/config.json');
class homePagesteps{

launchdummyticketApplication(){
cy.visit(config.url);
cy.title().should('eq',config.title);
cy.log("Application Launched Successfully");

}

verifyHomePageSuccessful(){

cy.xpath(homePage.DummyTicketBookinglogo).should('be.visible');
cy.log('You are in HomePage');
}

verifycontactNumbers(US,UK,India,UAE){

    cy.xpath(homePage.USContactNumber).should('have.text',US);
    cy.xpath(homePage.UKContactNumber).should('have.text',UK);
    cy.xpath(homePage.IndiaContactNumber).should('have.text',India);
    cy.xpath(homePage.UAEContactNumber).should('have.text',UAE);
    cy.log("You have verified all the contact numbers");

}
verifyApplicationHomePageLinks(){
    cy.xpath(homePage.HomeLink).should('be.visible');
    
    cy.xpath(homePage.BuyTicketlink).should('be.visible');
    cy.xpath(homePage.Contactlink).should('be.visible');
    cy.xpath(homePage.Followusfacebooklink).should('be.visible');
    cy.xpath(homePage.Followusyoutubelink).should('be.visible');
    cy.xpath(homePage.FollowusInstagramlink).should('be.visible');
    cy.log("You have verified all the Links in the Homepage");


}

clickBuyTicketLink(){

    cy.xpath(homePage.BuyTicketlink).click();
    cy.log("Clicked on BuyTicketLink");

}

}

export default new homePagesteps();