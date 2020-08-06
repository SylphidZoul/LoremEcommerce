import React from 'react'
import { CardContainer, Card, CardText } from '../StyledComponents/StyledProducts'
import { ContentWrapper } from '../Components/ContentWrapper'

export const ProductsList = ({ products }) => {
  return (
    <ContentWrapper title='Lorem Home' subtitle='Lorem meta description home'>
      <CardContainer>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <CardText>
                {product.name}<br />{product.price}<br />{product.descripcion}
              </CardText>
            </Card>
          )
        })}
        {/* <Card>
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
        <Card>
          <CardText>Nuestra lista de productos</CardText>
        </Card>
        <Card>
          <CardText>Nuestra lista de productos</CardText>
        </Card>
        <Card>
          <CardText>Nuestra lista de productos</CardText>
        </Card>
        <Card>
          <CardText>Nuestra lista de productos</CardText>
        </Card>
        <Card>
          <CardText>Nuestra lista de productos</CardText>
        </Card> */}
      </CardContainer>
    </ContentWrapper>
  )
}
