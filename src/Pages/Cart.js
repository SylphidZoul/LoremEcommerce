import React from 'react'
import { CartContainer } from '../Containers/CartContainer'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { SectionComponent } from '../Components/SectionComponent'
import { PaymentHome } from '../Components/PaymentHome'
import Guitar from '../Components/Guitar'

const Cart = () => {
  return (
    <>
      <NavBackground>
        <Guitar />
      </NavBackground>
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <CartContainer />
      </SectionComponent>
      <SectionComponent colorTop='mainLavander' color='mainWhite'>
        <PaymentHome color='var(--mainDark)' />
      </SectionComponent>
    </>
  )
}
export default Cart
