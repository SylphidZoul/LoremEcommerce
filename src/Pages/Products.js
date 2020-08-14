import React from 'react'
import { SectionComponent } from '../Components/SectionComponent'
import { ProductsContainer } from '../Containers/ProductsContainer'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import Guitar from '../Components/Guitar'

const Products = () => {
  return (
    <>
      <NavBackground>
        <Guitar />
      </NavBackground>
      <SectionComponent colorTop='mainDark' color='mainWhite' title='Todos los álbums'>
        <ProductsContainer query='all' />
      </SectionComponent>
    </>
  )
}

export default Products
