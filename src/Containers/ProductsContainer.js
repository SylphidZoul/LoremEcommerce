import React, { useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ProductCard } from '../Components/ProductCard'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'
import { useProductsData } from '../Hooks/useProductsData'
import { LoadingPageSpinner } from '../StyledComponents/StyledSpinner'
import { CardContainer } from '../StyledComponents/StyledProducts'

export const ProductsContainer = ({ params }) => {
  const { data, isFetching } = useProductsData(params)
  const { addProduct } = useContext(CartContext)
  const { isAuth } = useContext(AuthContext)
  const Location = useLocation()
  const History = useHistory()

  const handleButton = (product) => {
    if (!isAuth) {
      return History.push(`${Location.pathname}?login`)
    }
    product.quantity = 1
    return addProduct(product)
  }

  return (
    isFetching
      ? <LoadingPageSpinner />
      : (
        <CardContainer>
          {data.length === 0 && <h1>No se encontraron resultados</h1>}
          {data.map((product) => {
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
          })}
        </CardContainer>
      )
  )
}
