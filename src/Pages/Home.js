import React from 'react'
import { Header } from '../Components/Header'
import { SectionComponent } from '../Components/SectionComponent'
import { ProductsContainer } from '../Containers/ProductsContainer'
import { PaymentHome } from '../Components/PaymentHome'

const Home = () => {
  return (
    <>
      <Header />
      <SectionComponent colorTop='mainDark' color='mainLavander' title='Últimos Agregados'>
        <ProductsContainer params='query=feed' />
      </SectionComponent>
      <SectionComponent colorTop='mainLavander' color='mainDark' colorGradient='mainViolet' gradient>
        <PaymentHome color='var(--mainWhite)' />
      </SectionComponent>
    </>
  )
}

export default Home
