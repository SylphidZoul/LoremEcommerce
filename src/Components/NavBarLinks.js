import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { BsPeople, BsPerson } from 'react-icons/bs'
import { NavUl, Link } from '../StyledComponents/StyledNavbar'
import { LoginContext } from '../Context/LoginContext'
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai'
import PropTypes from 'prop-types'

export const NavBarLinks = ({ isOpen, isScrolled, onClickedLink }) => {
  const { isAuth, user } = useContext(LoginContext)
  const Location = useLocation()

  return (
    <NavUl open={isOpen} scroll={isScrolled}>
      <li>
        <Link open={isOpen} to='/about' onClick={onClickedLink}>
          <BsPeople />
        &nbsp;Sobre Nosotros
        </Link>
      </li>
      <li>
        <Link open={isOpen} to='/products' onClick={onClickedLink}>
          <AiOutlineShop />
        &nbsp;Productos
        </Link>
      </li>
      <li>
        <Link
          open={isOpen}
          onClick={onClickedLink}
          to={{ pathname: '/cart', state: { from: Location.pathname } }}
        >
          <AiOutlineShoppingCart />
            &nbsp;Carrito
        </Link>
      </li>
      <li>
        {
          isAuth
            ? (
              <Link
                open={isOpen}
                onClick={onClickedLink}
                to={{ pathname: '/profile', state: { from: Location.pathname } }}
              >
                <BsPerson />
                {user}
              </Link>
            )
            : (
              <Link
                open={isOpen}
                onClick={onClickedLink}
                to={{
                  pathname: Location.pathname, search: '?login'
                }}
              >
                <BsPerson />
              &nbsp;Ingresa
              </Link>
            )
        }
      </li>
    </NavUl>
  )
}
NavBarLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired
}
