export const initialState = {
  products: [],
  isFetching: true,
  hasMore: true,
  pageNumber: 1,
  query: ''
}

const updateProducts = (products, state) => {
  const prevProducts = [...state.products]
  const updatedProducts = prevProducts.concat(products)
  const hasMore = (products.length === 15)
  const isFetching = false

  return { ...state, products: updatedProducts, hasMore, isFetching }
}

const addPage = (state) => {
  const updatedPage = state.pageNumber + 1

  return { ...state, pageNumber: updatedPage }
}

const updateQuery = ({ params, reseted }, state) => {
  let updatedQuery = ''
  if (reseted) {
    updatedQuery = `${params}&pageNumber=1`
  } else {
    updatedQuery = `${params}&pageNumber=${state.pageNumber}`
  }

  return { ...state, query: updatedQuery }
}

const resetProducts = (state) => {
  return { ...state, pageNumber: 1, products: [] }
}

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      return updateProducts(action.payload, state)
    case 'ADD_PAGE':
      return addPage(state)
    case 'UPDATE_QUERY':
      return updateQuery(action.payload, state)
    case 'RESET':
      return resetProducts(state)
    case 'FETCHING':
      return { ...state, isFetching: true }
    default:
      return state
  }
}
