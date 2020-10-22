import React, { useState } from 'react'
import { SectionComponent } from '../Components/SectionComponent'
import { ProductsContainer } from '../Containers/ProductsContainer'
import { Search } from '../Containers/SearchContainer'
import { ContentWrapper } from '../Components/ContentWrapper'

const Products = () => {
  const [params, setParams] = useState('query=&field=all&sort=latest')

  const handleQuery = (query) => {
    if (query === '') return setParams('query=&field=all&sort=latest')
    setParams(query)
  }

  return (
    <ContentWrapper
      title='Nuestros Albúms'
      subtitle='¡Los albúms de rock más pedidos!'
      background
    >
      <SectionComponent color='mainSilver' title='Descubre nuestros discos' gradient>
        <Search onSearch={handleQuery} />
        <ProductsContainer params={params} />
      </SectionComponent>
    </ContentWrapper>
  )
}

export default Products
