import React from 'react'
import PropTypes from 'prop-types'
import FaSpotify from '@meronex/icons/fa/FaSpotify'
import FaCartPlus from '@meronex/icons/fa/FaCartPlus'
import { ContentWrapper } from './ContentWrapper'
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
  const { name, artist, description, img, unitPrice, genre, spotify, tracks } = product
  return (
    <ContentWrapper
      title={name}
      subtitle={description}
    >
      <DetailWrapper>
        <Img src={img} alt={name} />
        <NameDiv>
          <Name>
            {name}
          </Name>
          <Artist>
            {artist}
          </Artist>
        </NameDiv>
        <QuantityDiv>
          <Price>
            ${unitPrice}
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
            {description}
          </Text>
        </DescriptionDiv>
        <DetailsDiv>
          <DataField>
            Género:
          </DataField>
          <Text>
            {genre}
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
            <a href={spotify} target='_blank' rel='noopener noreferrer'>
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
            {tracks.map((track, index) => {
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
    </ContentWrapper>
  )
}
Details.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    unitPrice: PropTypes.number,
    genre: PropTypes.string,
    spotify: PropTypes.string,
    tracks: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  add: PropTypes.func.isRequired,
  release: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleQuantity: PropTypes.func.isRequired
}
