import React from 'react'
import { ProductsList } from '../Components/ProductsList'
import { useProductsData } from '../Hooks/useProductsData'
import { LoadingPage } from '../StyledComponents/StyledSpinner'

export const ProductsContainer = ({ query = 'latest' }) => {
  const { data, isFetching } = useProductsData(query)

  return (
    isFetching ? <LoadingPage /> : <ProductsList products={data} />
  )
}
