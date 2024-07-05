import { describe } from 'mocha';
import homePagesteps from '../../page_Objects/page_Elements_Actions/Home_Page';
import couponCodeActions from '../../page_Objects/page_Elements_Actions/Coupon_Code_Actions';
import Buy_Ticket_Actions from '../../page_Objects/page_Elements_Actions/Buy_Ticket_Actions';
import Passenger_Details_Actions from '../../page_Objects/page_Elements_Actions/Passenger_Details_Actions';

describe('DummyTikcetApplication HomePage and Buy Tikcet Page', () => {


  beforeEach(() => {
    cy.fixture('testdata.json').as('data');

  })

  it('DummyticketBooking', () => {
    homePagesteps.launchdummyticketApplication();
    homePagesteps.verifyHomePageSuccessful();
    cy.get('@data').then((info) => {
      const testdata = info.find(test => test.testname === 'verifycontactNumbers').data;
      const testdata1 = info.find(test => test.testname === 'EnterCouponCode').data;
      const testdata2 = info.find(test => test.testname === 'PassengerDetails').data;
      homePagesteps.verifycontactNumbers(testdata.US, testdata.UK, testdata.India, testdata.UAE);
      homePagesteps.verifyApplicationHomePageLinks();
      homePagesteps.clickBuyTicketLink();
      homePagesteps.clickBuyTicketLink();
      couponCodeActions.EnterCouponCode(testdata1.couponCode);
      Buy_Ticket_Actions.SelectBuyTicketRadioButton();
      Passenger_Details_Actions.EnterPassengerDetails(testdata2.FirstorGivenName,testdata2.lastorsurName);
    })
  })
})

