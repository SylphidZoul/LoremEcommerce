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
        backgroundImage: 'radial-gradient(circle at 71% 29%, rgba(250, 250, 250,0.03) 0%, rgba(250, 250, 250,0.03) 32%,transparent 32%, transparent 100%),radial-gradient(circle at 100% 82%, rgba(82, 82, 82,0.03) 0%, rgba(82, 82, 82,0.03) 26%,transparent 26%, transparent 100%),radial-gradient(circle at 30% 35%, rgba(78, 78, 78,0.03) 0%, rgba(78, 78, 78,0.03) 55%,transparent 55%, transparent 100%),radial-gradient(circle at 71% 54%, rgba(52, 52, 52,0.03) 0%, rgba(52, 52, 52,0.03) 13%,transparent 13%, transparent 100%),radial-gradient(circle at 17% 19%, rgba(202, 202, 202,0.03) 0%, rgba(202, 202, 202,0.03) 83%,transparent 83%, transparent 100%),radial-gradient(circle at 28% 30%, rgba(219, 219, 219,0.03) 0%, rgba(219, 219, 219,0.03) 39%,transparent 39%, transparent 100%),radial-gradient(circle at 56% 19%, rgba(155, 155, 155,0.03) 0%, rgba(155, 155, 155,0.03) 33%,transparent 33%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))',
        height: '200px'
      }}
      />
    </>
  )
}

export default Home