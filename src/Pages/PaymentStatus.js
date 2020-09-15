import React from 'react'
import { PaymentContainer } from '../Containers/PaymentContainer'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { SectionComponent } from '../Components/SectionComponent'
import Guitar from '../Components/Guitar'

const PaymentStatus = () => {
  return (
    <>
      <NavBackground>
        <Guitar />
      </NavBackground>
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <PaymentContainer />
      </SectionComponent>
    </>
  )
}

export default PaymentStatus
