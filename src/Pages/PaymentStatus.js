import React from 'react'
import { PaymentContainer } from '../Containers/PaymentContainer'
import { ContentWrapper } from '../Components/ContentWrapper'
import { SectionComponent } from '../Components/SectionComponent'

const PaymentStatus = () => {
  return (
    <ContentWrapper
      title='Resultado del pago'
      subtitle='Detalles de la transacción'
      background
    >
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <PaymentContainer />
      </SectionComponent>
    </ContentWrapper>
  )
}

export default PaymentStatus
