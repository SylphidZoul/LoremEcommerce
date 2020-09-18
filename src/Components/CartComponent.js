import React from 'react'
import { EmptyCart } from './EmptyCart'
import PropTypes from 'prop-types'
import {
  CartWrapper,
  Head,
  ItemsWrapper,
  Title, Link,
  Item, Img,
  Name, Price,
  Quantity, Total,
  RemoveButton,
  CheckOutButton
} from '../StyledComponents/StyledCart'

export const CartComponent = ({ empty, total, products, remove, onBuy }) => {
  return (
    <CartWrapper>
      <Head>
        <Title>
          {
            !empty
              ? 'Tus Albúms'
              : '¡Aún no has añadido nada!'
          }
        </Title>
        <Link to='/products'>Volver a los Productos</Link>
      </Head>
      {
        empty
          ? <EmptyCart />
          : (
            <>
              <ItemsWrapper>
                {products.map((product) => {
                  return (
                    <Item key={product._id}>
                      <Img src={product.img} alt={product.name} />
                      <Name>
                        {product.name}
                        <br />
                        {product.artist}
                      </Name>
                      <Price>
                        ${product.unitPrice}
                      </Price>
                      <Quantity>
                        Cantidad: {product.quantity}
                      </Quantity>
                      <RemoveButton onClick={() => remove(product._id)}>
                        x
                      </RemoveButton>
                    </Item>
                  )
                })}
              </ItemsWrapper>
              <Total>
                <h5>
                  Total:
                </h5>
                <Price>
                  ${total}
                </Price>
              </Total>
              <CheckOutButton onClick={onBuy}>
                Continuar con MercadoPago
              </CheckOutButton>
            </>
          )
      }
    </CartWrapper>
  )
}

CartComponent.propTypes = {
  empty: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  products: PropTypes.arrayOf({
    _id: PropTypes.string,
    name: PropTypes.string,
    artist: PropTypes.string,
    img: PropTypes.string,
    unitPrice: PropTypes.number,
    quantity: PropTypes.number
  }).isRequired,
  remove: PropTypes.func.isRequired,
  onBuy: PropTypes.func.isRequired
}