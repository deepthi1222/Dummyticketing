const couponCode = require('../page_Elements/Coupon_Code.json');

class couponCodeActions{

EnterCouponCode(CouponCode){

cy.xpath(couponCode.DummyTickettText).should('be.visible');   
cy.xpath(couponCode.ChoosetheCorrectOption).should('be.visible');
cy.xpath(couponCode.CouponCodeLink).click();
cy.xpath(couponCode.CouponCodetxtbox).type(CouponCode);
cy.xpath(couponCode.ApplyCouponButton).click();
cy.xpath(couponCode.CouponErrorMessage).contains(CouponCode);

}



}

export default new couponCodeActions();
