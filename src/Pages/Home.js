import React from 'react'
import { Header } from '../Components/Header'
import { SectionComponent } from '../Components/SectionComponent'
import { HomeProductsContainer } from '../Containers/HomeProductsContainer'
import { PaymentHome } from '../Components/PaymentHome'

const Home = () => {
  return (
    <>
      <Header />
      <SectionComponent colorTop='mainDark' color='mainWhite' title='Últimos Agregados'>
        <HomeProductsContainer />
      </SectionComponent>
      <SectionComponent colorTop='mainWhite' color='mainSilver'>
        <PaymentHome />
      </SectionComponent>
      <footer style={{
        color: 'var(--mainDark)',
        height: '200px'
      }}
      />
    </>
  )
}

export default Home
