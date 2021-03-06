import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'
import data from '../../fixtures/data'

describe('Arrivals Add to Basket books and use coupon for item less than 450', () => {
  it('Should add to Basket books and use coupon for item less than 450', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.clickAddBtn().clickCartBtn()

    Basket.addCoupon(data.coupon).clickApplyCoupon().getErrorMessage()
  })
})
