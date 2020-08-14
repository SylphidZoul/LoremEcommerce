import React from 'react'
import { Header } from '../Components/Header'
import { SectionComponent } from '../Components/SectionComponent'
import { ProductsContainer } from '../Containers/ProductsContainer'
import { PaymentHome } from '../Components/PaymentHome'

const Home = () => {
  return (
    <>
      <Header />
      <SectionComponent colorTop='mainDark' color='mainWhite' title='Últimos Agregados'>
        <ProductsContainer />
      </SectionComponent>
      <SectionComponent colorTop='mainWhite' color='mainSilver'>
        <PaymentHome />
      </SectionComponent>
    </>
  )
}

export default Home
