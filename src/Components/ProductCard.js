import React from 'react'
import { useLazyLoading } from '../Hooks/useLazyLoading'
import { Card, CardText, AlbumCover, Price, Button } from '../StyledComponents/StyledProducts'
import FaCartPlus from '@meronex/icons/fa/FaCartPlus'
import PropTypes from 'prop-types'

export const ProductCard = ({ img, name, unitPrice, artist }) => {
  const [show, ref] = useLazyLoading()
  return (
    <Card ref={ref}>
      {show &&
        <>
          <AlbumCover src={img} alt={name} loading='lazy' />
          <Price>${unitPrice}</Price>
          <CardText>
            {name}
            <br />
            {artist}
          </CardText>
          <Button>
            <FaCartPlus size='30px' />
          </Button>
        </>}
    </Card>
  )
}
ProductCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired
}
