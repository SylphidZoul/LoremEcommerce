const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(
    item => item._id === product._id
  )

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { cart: updatedCart, last: product }
}

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { cart: updatedCart }
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return addProductToCart(action.product, state)
    case 'REMOVE_PRODUCT':
      return removeProductFromCart(action.productId, state)
    default:
      return state
  }
}
