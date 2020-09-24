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
      <SectionComponent color='mainSilver'>
        <CartContainer />
      </SectionComponent>
      <SectionComponent colorTop='mainSilver' color='mainWhite'>
        <PaymentBanner color='var(--mainDark)' />
      </SectionComponent>
    </ContentWrapper>
  )
}
export default Cart
