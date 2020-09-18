import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { PaymentComponent } from '../Components/PaymentComponent'
import { LoadingPageSpinner } from '../StyledComponents/StyledSpinner'
import queryString from 'query-string'

export const PaymentContainer = () => {
  const [status, setStatus] = useState('')
  const [icon, setIcon] = useState('')
  const [urlParams, setUrlParams] = useState('')
  const { getPayment, state } = useContext(CartContext)
  const Location = useLocation()

  useEffect(() => {
    Location.search && setUrlParams(Location.search)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (urlParams) {
      const query = queryString.parse(urlParams)
      getPayment(query.external_reference)
    }
    // eslint-disable-next-line
  }, [urlParams])

  useEffect(() => {
    if (state.payment.order_status) {
      switch (state.payment.order_status) {
        case 'paid':
          setStatus('Pago Aprobado')
          setIcon('FcApproval')
          break
        case 'payment_in_process':
          setStatus('Pago Pendiente')
          setIcon('FcOvertime')
          break
        default:
          setStatus('Pago cancelado')
          setIcon('FcCancel')
          break
      }
    }
  }, [state.payment])

  return (
    <>
      {
        !state.payment.payment_status
          ? <LoadingPageSpinner />
          : <PaymentComponent status={status} payment={state.payment} icon={icon} />
      }
    </>
  )
}
