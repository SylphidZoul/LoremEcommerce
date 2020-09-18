import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useProductsData } from '../Hooks/useProductsData'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'
import { Details } from '../Components/Details'
import { LoadingPageSpinner } from '../StyledComponents/StyledSpinner'

export const DetailsContainer = ({ product }) => {
  const { products, isFetching } = useProductsData(`id=${product}`)
  const { addProduct } = useContext(CartContext)
  const { isAuth } = useContext(AuthContext)
  const [release, setRelease] = useState('')
  const [quantity, setQuantity] = useState(1)
  const Location = useLocation()
  const History = useHistory()

  const handleQuantity = (e) => {
    if (e.target.name === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (e.target.name === 'increase' && quantity < 99) {
      setQuantity(quantity + 1)
    }
  }

  const addToCart = () => {
    if (!isAuth) {
      return History.push(`${Location.pathname}?login`)
    }
    const product = { ...products[0], quantity }
    addProduct(product)
  }

  useEffect(() => {
    if (!isFetching) {
      const formatedDate = products[0].release.split('T')
      setRelease(formatedDate[0])
    }
  }, [isFetching, products])

  return (
    isFetching
      ? <LoadingPageSpinner />
      : (
        <Details
          product={products[0]}
          add={addToCart}
          quantity={quantity}
          handleQuantity={handleQuantity}
          release={release}
        />
      )
  )
}
