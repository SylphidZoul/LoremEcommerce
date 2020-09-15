import React from 'react'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { SectionComponent } from '../Components/SectionComponent'
import Guitar from '../Components/Guitar'

const About = () => {
  return (
    <>
      <NavBackground>
        <Guitar />
      </NavBackground>
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <div style={{ background: 'red', height: '600px' }}>
          <h1 style={{ color: 'white', fontSize: '50px' }}>ABOUT US</h1>
        </div>
      </SectionComponent>
    </>
  )
}

export default About
