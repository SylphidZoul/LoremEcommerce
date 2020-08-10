import React from 'react'
import { ProductsList } from '../Components/ProductsList'
import { useProductsData } from '../Hooks/useProductsData'
import { LoadingPage } from '../StyledComponents/StyledSpinner'

export const HomeProductsContainer = () => {
  const { data, isFetching } = useProductsData()

  return (
    isFetching ? <LoadingPage /> : <ProductsList products={data} />
  )
}
