import React from 'react'
import { useLazyLoading } from '../Hooks/useLazyLoading'
import { Card, CardText, AlbumCover, Price, Button, Link } from '../StyledComponents/StyledProducts'
import FaCartPlus from '@meronex/icons/fa/FaCartPlus'
import PropTypes from 'prop-types'

export const ProductCard = ({ id, img, name, unitPrice, artist, addProduct }) => {
  const [show, ref] = useLazyLoading()
  return (
    <Card ref={ref}>
      {show &&
        <>
          <Link to={`/products/${id}`}>
            <AlbumCover src={img} alt={name} loading='lazy' />
            <Price>${unitPrice}</Price>
            <CardText>
              {name}
              <br />
              {artist}
            </CardText>
          </Link>
          <Button onClick={addProduct}>
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
