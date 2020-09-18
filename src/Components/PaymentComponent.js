import React from 'react'
import PropTypes from 'prop-types'
import FcApproval from '@meronex/icons/fc/FcApproval'
import FcOvertime from '@meronex/icons/fc/FcOvertime'
import FcCancel from '@meronex/icons/fc/FcCancel'
import { Wrapper, H2, ItemsDetail, H3, P } from '../StyledComponents/StyledPaymentStatus'

const Icons = {
  FcApproval,
  FcOvertime,
  FcCancel
}

export const PaymentComponent = ({ status, payment, icon }) => {
  const StatusIcon = Icons[icon]
  
  return (
    <Wrapper>
      <H2>
        ¡Gracias por tu compra!
      </H2>
      <H2>
        {status}
      </H2>
      {
        StatusIcon &&
          <StatusIcon size='100px' />
      }
      <H3>
        ID de transacción
      </H3>
      <P>
        {payment.transaction.id}
      </P>
      <H3>
        Comprador:
      </H3>
      <P>
        {payment.transaction.payer.email}
      </P>
      <H3>
        Productos:
      </H3>
      {payment.items.map((item) => {
        return (
          <ItemsDetail key={item.product._id}>
            <P area='name'>{item.product.name} ${item.product.unitPrice} x{item.quantity}</P>
          </ItemsDetail>
        )
      })}
      <H3>
        Total: ${payment.total}
      </H3>
      <P>
        Te enviaremos un email con mas detalles.
      </P>
    </Wrapper>
  )
}
PaymentComponent.propTypes = {
  status: PropTypes.string.isRequired,
  payment: PropTypes.shape({
    transaction: PropTypes.shape({
      id: PropTypes.number,
      payer: PropTypes.shape({
        email: PropTypes.string
      })
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        items: PropTypes.shape({
          _id: PropTypes._id,
          name: PropTypes.string,
          unitPrice: PropTypes.number
        }),
        quantity: PropTypes.number
      })
    ),
    total: PropTypes.number
  }).isRequired,
  icon: PropTypes.string.isRequired
}
