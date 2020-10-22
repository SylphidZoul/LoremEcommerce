import React, { useContext, useState, useEffect } from 'react'
import { CartComponent } from '../Components/CartComponent'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'

export const CartContainer = () => {
  const [total, setTotal] = useState(0)
  const [empty, setEmpty] = useState(true)
  const { state, removeProduct } = useContext(CartContext)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    if (state.cart.length > 0) {
      setEmpty(false)
      const subtotal = state.cart.map(({ unitPrice, quantity }) => unitPrice * quantity)
      const result = subtotal.reduce((a, b) => a + b, 0)
      setTotal(result)
    } else {
      setEmpty(true)
    }
  }, [state])

  const onBuy = () => {
    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(state.cart)
    }
    window.fetch('http://localhost:3004/checkout/', config)
      .then(res => res.json())
      .then(response => {
        window.open(response.body.init_point, '_blank')
      })
      .catch((e) => console.error('Ha habido un error'))
  }

  return (
    <CartComponent
      empty={empty}
      total={total}
      products={state.cart}
      remove={removeProduct}
      onBuy={onBuy}
    />
  )
}
