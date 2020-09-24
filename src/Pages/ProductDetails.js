import React from 'react'
import { DetailsContainer } from '../Containers/DetailsContainer'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { SectionComponent } from '../Components/SectionComponent'
import Guitar from '../Components/Guitar'
import { Skull } from '../Components/Skull'

const ProductDetails = ({ match }) => {
  return (
    <>
      <NavBackground>
        <Skull />
        <Guitar />
      </NavBackground>
      <SectionComponent color='mainWhite'>
        <DetailsContainer product={match.params.id} />
      </SectionComponent>
    </>
  )
}

export default ProductDetails
