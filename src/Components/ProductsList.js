import React, { useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { CardContainer } from '../StyledComponents/StyledProducts'
import { ProductCard } from './ProductCard'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'
import PropTypes from 'prop-types'

export const ProductsList = ({ products, location }) => {
  const { addProduct } = useContext(CartContext)
  const { isAuth } = useContext(AuthContext)
  const Location = useLocation()
  const History = useHistory()

  const handleButton = (product) => {
    if (!isAuth) {
      return History.push(`${Location.pathname}?login`)
    }
    return addProduct(product)
  }

  return (
    <CardContainer>
      {products.map((product) => {
        return (
          <ProductCard
            key={product._id}
            img={product.img}
            name={product.name}
            unitPrice={product.unitPrice}
            artist={product.artist}
            addProduct={() => handleButton(product)}
          />
        )
      })}
    </CardContainer>
  )
}
ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
