import React from 'react'
import FaSpotify from '@meronex/icons/fa/FaSpotify'
import FaCartPlus from '@meronex/icons/fa/FaCartPlus'
import {
  DetailWrapper,
  NameDiv,
  QuantityDiv,
  DescriptionDiv,
  DetailsDiv,
  TracksDiv,
  Img, Name,
  Artist,
  Text,
  Price,
  CartButton,
  DataField,
  QuantityButton,
  QuantityInput
} from '../StyledComponents/StyledDetails'

export const Details = ({ product, add, release, quantity, handleQuantity }) => {
  return (
    <DetailWrapper>
      <Img src={product.img} alt={product.name} />
      <NameDiv>
        <Name>
          {product.name}
        </Name>
        <Artist>
          {product.artist}
        </Artist>
      </NameDiv>
      <QuantityDiv>
        <Price>
          ${product.unitPrice}
        </Price>
        <DataField>
          Cantidad:
        </DataField>
        <QuantityButton onClick={handleQuantity} name='decrease'>
          -
        </QuantityButton>
        <QuantityInput type='number' disabled value={quantity} />
        <QuantityButton onClick={handleQuantity} name='increase'>
          +
        </QuantityButton>
      </QuantityDiv>
      <CartButton onClick={add}>
        Añadir al carrito
        <FaCartPlus />
      </CartButton>
      <DescriptionDiv>
        <Text>
          {product.description}
        </Text>
      </DescriptionDiv>
      <DetailsDiv>
        <DataField>
          Género:
        </DataField>
        <Text>
          {product.genre}
        </Text>
        <DataField>
          Fecha de Lanzamiento:
        </DataField>
        <Text>
          {release}
        </Text>
        <DataField>
          Preview:
        </DataField>
        <Text>
          <a href={product.spotify} target='_blank' rel='noopener noreferrer'>
            <FaSpotify size='50px' color='#1DB954' />
          </a>
          <br />
          Spotify
        </Text>
      </DetailsDiv>
      <TracksDiv>
        <DataField>
          Tracklist:
        </DataField>
        <ol>
          {product.tracks.map((track, index) => {
            return (
              <li key={index}>
                <Text>
                  {index + 1} - {track}
                </Text>
              </li>
            )
          })}
        </ol>
      </TracksDiv>
    </DetailWrapper>
  )
}
