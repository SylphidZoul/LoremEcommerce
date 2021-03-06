import React, { createContext, useReducer } from 'react'
import { cartReducer, initialState } from '../Reducers/CartReducer'

const CartContext = createContext()
const { Provider } = CartContext

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addProduct = (product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  const removeProduct = (productId) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: productId })
  }

  const getPayment = (id) => {
    window.fetch(`https://lorem-backend.herokuapp.com/checkout/${id}`)
      .then((res) => res.json())
      .then((response) => {
        const payment = response.body
        dispatch({ type: 'GET_PAYMENT', payload: payment })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const value = {
    state,
    addProduct,
    removeProduct,
    getPayment
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export { CartContextProvider, CartContext }
