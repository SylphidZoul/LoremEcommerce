import React from 'react'
import { BurgerDiv, BurgerLine } from '../StyledComponents/StyledBurger'
import PropTypes from 'prop-types'

export const Burger = ({ open = true, modal = false, onClick }) => {
  return (
    <BurgerDiv modal={modal} onClick={onClick}>
      <BurgerLine open={open} first />
      <BurgerLine open={open} second />
      <BurgerLine open={open} third />
    </BurgerDiv>
  )
}
Burger.propTypes = {
  open: PropTypes.bool,
  modal: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
