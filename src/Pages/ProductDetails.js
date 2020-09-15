import React from 'react'
import { DetailsContainer } from '../Containers/DetailsContainer'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { SectionComponent } from '../Components/SectionComponent'
import Guitar from '../Components/Guitar'

const ProductDetails = ({ match }) => {
  return (
    <>
      <NavBackground>
        <Guitar />
      </NavBackground>
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <DetailsContainer product={match.params.id} />
      </SectionComponent>
    </>
  )
}

export default ProductDetails
