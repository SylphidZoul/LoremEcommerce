import React from 'react'
import { CardContainer } from '../StyledComponents/StyledProducts'
import { ProductCard } from './ProductCard'
import PropTypes from 'prop-types'

export const ProductsList = ({ products }) => {
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
          />
        )
      })}
    </CardContainer>
  )
}
ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}
