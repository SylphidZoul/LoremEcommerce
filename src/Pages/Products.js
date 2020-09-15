import React, { useState } from 'react'
import { SectionComponent } from '../Components/SectionComponent'
import { ProductsContainer } from '../Containers/ProductsContainer'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { Search } from '../Containers/SearchContainer'
import Guitar from '../Components/Guitar'

const Products = () => {
  const [params, setParams] = useState('query=&field=all&sort=latest')

  const handleQuery = (query) => {
    if (query === '') return setParams('query=&field=all&sort=latest')
    setParams(query)
  }

  return (
    <>
      <NavBackground>
        <Guitar />
      </NavBackground>
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <Search onSearch={handleQuery} />
        <ProductsContainer params={params} />
      </SectionComponent>
    </>
  )
}

export default Products
