import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper'
import { SectionComponent } from '../Components/SectionComponent'

const About = () => {
  return (
    <ContentWrapper
      title='Sobre Nosotros'
      subtitle='¿Quiénes somos y por qué confiar en nosotros?'
      background
    >
      <SectionComponent color='mainLavander'>
        <div style={{ height: '600px' }}>
          <h1 style={{ color: 'var(--mainDark)', fontSize: '50px' }}>ABOUT US</h1>
        </div>
      </SectionComponent>
    </ContentWrapper>
  )
}

export default About
