import React, { createContext, useReducer } from 'react'
import { cartReducer } from './CartReducer'

const CartContext = createContext()
const { Provider } = CartContext

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { cart: [] })

  const addProduct = (product) => {
    dispatch({ type: 'ADD_PRODUCT', product })
  }

  const removeProduct = (productId) => {
    dispatch({ type: 'REMOVE_PRODUCT', productId })
  }

  const value = {
    cart,
    addProduct,
    removeProduct
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export { CartContextProvider, CartContext }
