import React from 'react'
import { useLazyLoading } from '../Hooks/useLazyLoading'
import { PaymentWrapper, H2, P, Img } from '../StyledComponents/StyledPaymentBanner'
import MercadoPago from '../Assets/version-vertical-large.png'
import PropTypes from 'prop-types'

export const PaymentBanner = ({ color }) => {
  const [show, ref] = useLazyLoading()
  return (
    <PaymentWrapper ref={ref} color={color}>
      {
        show &&
          <>
            <H2>Métodos de pago</H2>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis veritatis esse consequuntur,
              dolores ab reprehenderit distinctio vitae nostrum ipsam.
              Hic, dignissimos vitae quasi voluptatibus omnis a voluptate rem quam? Quasi.
            </P>
            <Img src={MercadoPago} alt='Mercado Pago' />
          </>
      }
    </PaymentWrapper>
  )
}
PaymentBanner.propTypes = {
  color: PropTypes.string
}