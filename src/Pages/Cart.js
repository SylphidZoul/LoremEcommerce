import React from 'react'
import { CartContainer } from '../Containers/CartContainer'
import { ContentWrapper } from '../Components/ContentWrapper'
import { SectionComponent } from '../Components/SectionComponent'
import { PresentationComponent } from '../Components/PresentationComponent'
import { Img } from '../StyledComponents/StyledPresentation'
import MercadoPago from '../Assets/mp.png'

const Cart = () => {
  return (
    <ContentWrapper
      title='Carrito de compras'
      subtitle='Tus albúms'
      background
    >
      <SectionComponent color='mainSilver' gradient>
        <CartContainer />
      </SectionComponent>
      <SectionComponent colorTop='mainSilver' color='mainLavander'>
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
export default Cart
