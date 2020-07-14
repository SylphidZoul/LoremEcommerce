import React from 'react'
import { CardContainer, Card, CardText } from '../StyledComponents/StyledHome'
import { ContentWrapper } from '../Components/ContentWrapper'

export const ProductsList = () => {
  return (
    <ContentWrapper title='Lorem Home' subtitle='Lorem meta description home'>
      <CardContainer>
        <Card>
          <CardText>Servicio técnico oficial<br />Mantenimientos preventivos<br />Instalación de laboratorios</CardText>
        </Card>
        <Card>
          <CardText>Venta y alquiler de equipamiento para laboratorios<br />Provedores de equipamiento clinico de humanos y veterinario</CardText>
        </Card>
        <Card>
          <CardText>Reactivos - Descartables<br />Consumibles para todas las marcas</CardText>
        </Card>
        <Card>
          <CardText>Nuestra lista de productos</CardText>
        </Card>
      </CardContainer>
    </ContentWrapper>
  )
}
