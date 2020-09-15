/* import { useState, useEffect } from 'react'

export const useProductsData = (params, pageNumber) => {
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState('')
  const [hasMore, setHasMore] = useState(false)
  console.log(pageNumber)

  useEffect(() => {
    setData([])
  }, [params])

  useEffect(() => {
    window.fetch(`http://localhost:3004/products/${params}&pageNumber=${pageNumber}`, {
    })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setData((prevData) => {
          return prevData.concat(response.body)
        })
        setHasMore(response.body.length === 15)
        setIsFetching(false)
      })
      .catch((e) => setError('Ups hubo un error!'))
  }, [params, pageNumber])

  return { data, isFetching, error, hasMore }
} */

/* import React, { useState, useEffect, useContext, useCallback, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ProductCard } from '../Components/ProductCard'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'
import { useProductsData } from '../Hooks/useProductsData'
import { LoadingPageSpinner } from '../StyledComponents/StyledSpinner'
import { CardContainer } from '../StyledComponents/StyledProducts'

export const ProductsContainer = ({ params }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const { addProduct } = useContext(CartContext)
  const { isAuth } = useContext(AuthContext)
  const { data, isFetching, error, hasMore } = useProductsData(params, pageNumber)
  const Location = useLocation()
  const History = useHistory()

  console.log(data)

  const observer = useRef()
  const lastProductRef = useCallback(node => {
    if (isFetching) return
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [isFetching, hasMore])

  const handleButton = (product) => {
    if (!isAuth) {
      return History.push(`${Location.pathname}?login`)
    }
    product.quantity = 1
    return addProduct(product)
  }

  useEffect(() => {
    setPageNumber(1)
  }, [params])

  return (
    isFetching
      ? <LoadingPageSpinner />
      : (
        <>
          {error && <h2>{error}</h2>}
          <CardContainer>
            {data.length === 0 && <h1>No se encontraron resultados</h1>}
            {data.map((product, index) => {
              if (data.length === index + 1) {
                return (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    img={product.img}
                    name={product.name}
                    unitPrice={product.unitPrice}
                    artist={product.artist}
                    addProduct={() => handleButton(product)}
                    ref={lastProductRef}
                  />
                )
              }
              return (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  img={product.img}
                  name={product.name}
                  unitPrice={product.unitPrice}
                  artist={product.artist}
                  addProduct={() => handleButton(product)}
                />
              )
            }
            )}
          </CardContainer>
        </>
      )
  )
}
*/

/* import React, { useState, useEffect, useContext, useCallback, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ProductCard } from '../Components/ProductCard'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'
import { useProductsData } from '../Hooks/useProductsData'
import { LoadingPageSpinner } from '../StyledComponents/StyledSpinner'
import { CardContainer } from '../StyledComponents/StyledProducts'

export const ProductsContainer = ({ params }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const { addProduct } = useContext(CartContext)
  const { isAuth } = useContext(AuthContext)
  const { data, isFetching, error, hasMore } = useProductsData(params, pageNumber)
  const Location = useLocation()
  const History = useHistory()

  console.log(data)

  const observer = useRef()
  const lastProductRef = useCallback(node => {
    if (isFetching) return
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [isFetching, hasMore])

  const handleButton = (product) => {
    if (!isAuth) {
      return History.push(`${Location.pathname}?login`)
    }
    product.quantity = 1
    return addProduct(product)
  }

  useEffect(() => {
    setPageNumber(1)
  }, [params])

  return (
    isFetching
      ? <LoadingPageSpinner />
      : (
        <>
          {error && <h2>{error}</h2>}
          <CardContainer>
            {data.length === 0 && <h1>No se encontraron resultados</h1>}
            {data.map((product, index) => {
              if (data.length === index + 1) {
                return (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    img={product.img}
                    name={product.name}
                    unitPrice={product.unitPrice}
                    artist={product.artist}
                    addProduct={() => handleButton(product)}
                    ref={lastProductRef}
                  />
                )
              }
              return (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  img={product.img}
                  name={product.name}
                  unitPrice={product.unitPrice}
                  artist={product.artist}
                  addProduct={() => handleButton(product)}
                />
              )
            }
            )}
          </CardContainer>
        </>
      )
  )
} */
