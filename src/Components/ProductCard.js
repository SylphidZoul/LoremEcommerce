import React, { forwardRef } from 'react'
import { useLazyLoading } from '../Hooks/useLazyLoading'
import { Card, CardText, AlbumCover, Price, Button, Link } from '../StyledComponents/StyledProducts'
import FaCartPlus from '@meronex/icons/fa/FaCartPlus'
import PropTypes from 'prop-types'

export const ProductCard = forwardRef(({ id, img, name, unitPrice, artist, addProduct }, observer) => {
  const [show, ref] = useLazyLoading()
  return (
    <Card ref={ref}>
      {show &&
        <>
          <Link to={`/products/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <AlbumCover src={img} alt={name} />
            <Price>${unitPrice}</Price>
            <CardText>
              {name}
              <br />
              {artist}
            </CardText>
          </Link>
        </>}
      <Button onClick={addProduct} ref={observer}>
        <FaCartPlus size='30px' />
      </Button>
    </Card>
  )
})
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  addProduct: PropTypes.func.isRequired
}
