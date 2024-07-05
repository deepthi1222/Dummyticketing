const BuyTicketvariable = require('../page_Elements/Buy_Ticket.json');

class BuyTicketActions{

SelectBuyTicketRadioButton(){

cy.xpath(BuyTicketvariable.DummyticketandhotelradioButton).check({force:true});
cy.xpath(BuyTicketvariable.RadioButtonSuccessfullMessage).contains("Dummy ticket and hotel");


}


}

export default new BuyTicketActions();