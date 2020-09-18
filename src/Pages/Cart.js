import React from 'react'
import { CartContainer } from '../Containers/CartContainer'
import { ContentWrapper } from '../Components/ContentWrapper'
import { SectionComponent } from '../Components/SectionComponent'
import { PaymentBanner } from '../Components/PaymentBanner'

const Cart = () => {
  return (
    <ContentWrapper
      title='Carrito de compras'
      subtitle='Tus albúms'
      background
    >
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <CartContainer />
      </SectionComponent>
      <SectionComponent colorTop='mainLavander' color='mainWhite'>
        <PaymentBanner color='var(--mainDark)' />
      </SectionComponent>
    </ContentWrapper>
  )
}
export default Cart
