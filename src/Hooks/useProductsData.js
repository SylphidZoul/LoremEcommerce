import { useReducer, useEffect, useRef, useCallback } from 'react'
import { initialState, productReducer } from '../Reducers/ProductsReducer'

export const useProductsData = (params) => {
  const [state, dispatch] = useReducer(productReducer, initialState)
  const { products, isFetching, hasMore, pageNumber, query } = state
  const observer = useRef()

  const lastProductRef = useCallback(node => {
    if (isFetching) return
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        dispatch({ type: 'ADD_PAGE' })
      }
    })
    if (node) observer.current.observe(node)
  }, [isFetching, hasMore])

  useEffect(() => {
    dispatch({ type: 'UPDATE_QUERY', payload: { params } })
    // eslint-disable-next-line
  }, [pageNumber])

  useEffect(() => {
    dispatch({ type: 'RESET' })
    dispatch({ type: 'UPDATE_QUERY', payload: { params, reseted: true } })
  }, [params])

  useEffect(() => {
    let isMounted = true
    if (query) {
      dispatch({ type: 'FETCHING' })
      window.fetch(`https://lorem-backend.herokuapp.com/products/${query}`, {
      })
        .then(res => res.json())
        .then(response => {
          if (isMounted) {
            const products = response.body
            dispatch({ type: 'UPDATE_PRODUCTS', payload: products })
          }
        })
        .catch(e => console.log('Ha habido un error con el servidor'))
    }
    return () => (isMounted = false)
  }, [query])

  return { products, isFetching, lastProductRef }
}
