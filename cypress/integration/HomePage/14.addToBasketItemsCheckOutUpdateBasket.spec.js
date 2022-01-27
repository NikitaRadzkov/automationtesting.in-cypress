import Home from '../../pageObjects/Home'
import Shop from '../../pageObjects/Shop'
import Item from '../../pageObjects/Item'
import Basket from '../../pageObjects/Basket'
import Checkout from '../../pageObjects/Checkout'

describe('Arrivals Add to Basket items add book', () => {
  it('Should add to Basket items, add book', () => {
    Home.visit().clickShopMenu()

    Shop.clickHomeMenu()

    Home.getArrivals().clickAllArrivals()

    Item.clickAddBtn().clickCartBtn()

    Basket.clickCheckout()

    Checkout.verifyTotalPrice()

    Basket.visit()
      .verifyUpdateDisbled()
      .changeQuantity('2')
      .clickUpdate()
      .getUpdatedMessage()
      .clickCheckout()

    Checkout.verifyTotalPrice()
  })
})
