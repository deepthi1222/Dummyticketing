const passengerdetails = require('../page_Elements/Passenger_Details.json');
class Enterpassengerdetails{
EnterPassengerDetails(FirstorGivenName,lastorsurName){

cy.xpath(passengerdetails.FirstorGivenName).type(FirstorGivenName);
cy.xpath(passengerdetails.lastorsurName).type(lastorsurName);




}



}

export default new Enterpassengerdetails();