import React from 'react'
import { DetailsContainer } from '../Containers/DetailsContainer'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { SectionComponent } from '../Components/SectionComponent'
import Guitar from '../Assets/Guitar'
import { Skull } from '../Assets/Skull'

const ProductDetails = ({ match }) => {
  return (
    <>
      <NavBackground>
        <Skull />
        <Guitar />
      </NavBackground>
      <SectionComponent color='mainLavander' gradient>
        <DetailsContainer product={match.params.id} />
      </SectionComponent>
    </>
  )
}

export default ProductDetails
