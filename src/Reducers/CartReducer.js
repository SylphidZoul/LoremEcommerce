const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(
    item => item._id === product._id
  )

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    }
    updatedItem.quantity += product.quantity
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart, last: product }
}

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(item => item._id === productId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return addProductToCart(action.product, state)
    case 'REMOVE_PRODUCT':
      return removeProductFromCart(action.productId, state)
    case 'GET_PAYMENT':
      return { ...state, payment: action.payment }
    default:
      return state
  }
}
