import React from 'react'
import PropTypes from 'prop-types'
import { NavWrapper, LogoLink, NavUl, Link, NavLink } from '../StyledComponents/StyledNavbar'
import { BsPeople, BsPerson } from 'react-icons/bs'
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai'
import { Logo } from './Logo'
import { Burger } from './Burger'

export const NavbarComponent = ({ isScrolled, isOpen, handleOpen, isAuth, userName, currentPath }) => {
  return (
    <NavWrapper scroll={isScrolled}>
      <Burger open={isOpen} onClick={handleOpen} />
      <LogoLink to='/'>
        <Logo scroll={isScrolled} />
      </LogoLink>
      <NavUl open={isOpen} scroll={isScrolled}>
        <li>
          <NavLink open={isOpen} to='/about' onClick={handleOpen}>
            <BsPeople />
            &nbsp;
            Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink open={isOpen} to='/products' onClick={handleOpen}>
            <AiOutlineShop />
            &nbsp;
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            open={isOpen}
            onClick={handleOpen}
            to={{ pathname: '/cart', state: { from: currentPath } }}
          >
            <AiOutlineShoppingCart />
            &nbsp;
            Carrito
          </NavLink>
        </li>
        <li>
          {
            isAuth
              ? (
                <NavLink
                  open={isOpen}
                  onClick={handleOpen}
                  to={{ pathname: '/profile', state: { from: currentPath } }}
                >
                  <BsPerson />
                  &nbsp;
                  {userName}
                </NavLink>
              )
              : (
                <Link
                  open={isOpen}
                  onClick={handleOpen}
                  to={{
                    pathname: currentPath, search: '?login'
                  }}
                >
                  <BsPerson />
                  &nbsp;
                  Ingresa
                </Link>
              )
          }
        </li>
      </NavUl>
    </NavWrapper>
  )
}
NavbarComponent.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  currentPath: PropTypes.string.isRequired
}
