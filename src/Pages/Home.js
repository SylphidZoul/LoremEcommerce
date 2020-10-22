import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper'
import { Header } from '../Components/Header'
import { SectionComponent } from '../Components/SectionComponent'
import { ProductsContainer } from '../Containers/ProductsContainer'
import { PresentationComponent } from '../Components/PresentationComponent'
import { Img } from '../StyledComponents/StyledPresentation'
import { Shipping } from '../Assets/Shipping'
import MercadoPago from '../Assets/mp.png'

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
      <SectionComponent color='mainDark'>
        <PresentationComponent
          title='Directo a tu puerta'
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Repellendus, modi ad incidunt deleniti similique molestiae
          eligendi perferendis porro odit! Dolor quo, corporis est quam
          beatae atque ullam assumenda iusto nostrum?
          Magni ea fugiat, omnis fugit reprehenderit commodi harum minus
          adipisci iure at sapiente, dignissimos facere nulla rerum porro,
          suscipit repudiandae voluptatibus eum.'
          textColor='mainSilver'
        >
          <Shipping width='70%' />
        </PresentationComponent>
      </SectionComponent>
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <PresentationComponent
          title='Métodos de pago'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis veritatis esse consequuntur,
          dolores ab reprehenderit distinctio vitae nostrum ipsam.
          Hic, dignissimos vitae quasi voluptatibus omnis a voluptate rem quam? Quasi.'
          childrenFirst
        >
          <Img src={MercadoPago} alt='MercadoPago' />
        </PresentationComponent>
      </SectionComponent>
    </ContentWrapper>
  )
}

export default Home
