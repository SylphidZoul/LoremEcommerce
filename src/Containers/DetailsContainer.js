import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useProductsData } from '../Hooks/useProductsData'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'
import { Details } from '../Components/Details'

export const DetailsContainer = ({ product }) => {
  const { data, isFetching } = useProductsData(`id=${product}`)
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
    const product = data
    product.quantity = quantity
    addProduct(product)
  }

  useEffect(() => {
    if (!isFetching) {
      const formatedDate = data.release.split('T')
      setRelease(formatedDate[0])
    }
  }, [isFetching, data])

  return (
    !isFetching &&
      <Details
        product={data}
        add={addToCart}
        quantity={quantity}
        handleQuantity={handleQuantity}
        release={release}
      />

  )
}
