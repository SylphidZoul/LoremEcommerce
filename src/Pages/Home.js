import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper'
import { Header } from '../Components/Header'
import { SectionComponent } from '../Components/SectionComponent'
import { ProductsContainer } from '../Containers/ProductsContainer'
import { PaymentBanner } from '../Components/PaymentBanner'

const Home = () => {
  return (
    <ContentWrapper
      title='Home'
      subtitle='Los mejores albúms de rock los encontrás acá.'
    >
      <Header />
      <SectionComponent colorTop='mainDark' color='mainWhite' title='Últimos Agregados'>
        <ProductsContainer params='query=feed' />
      </SectionComponent>
      <SectionComponent colorTop='mainWhite' color='mainSilver'>
        <PaymentBanner color='var(--mainDark)' />
      </SectionComponent>
    </ContentWrapper>
  )
}

export default Home
