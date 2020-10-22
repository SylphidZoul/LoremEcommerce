import React from 'react'
import PropTypes from 'prop-types'
import { NavWrapper, LogoLink, NavUl, Link, NavLink } from '../StyledComponents/StyledNavbar'
import { Logo } from '../Assets/Logo'
import { Burger } from './Burger'
import BsPeople from '@meronex/icons/bs/BsPeople'
import BsPerson from '@meronex/icons/bs/BsPerson'
import AiOutlineShop from '@meronex/icons/ai/AiOutlineShop'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'

export const NavbarComponent = ({ isScrolled, isOpen, onLinkClick, isAuth, userName, currentPath }) => {
  return (
    <NavWrapper scroll={isScrolled}>
      <Burger open={isOpen} onClick={onLinkClick} />
      <LogoLink to='/'>
        <Logo scroll={isScrolled} onClick={onLinkClick} navbar />
      </LogoLink>
      <NavUl open={isOpen} scroll={isScrolled}>
        <li>
          <NavLink open={isOpen} to='/about' onClick={onLinkClick}>
            <BsPeople />
            &nbsp;
            Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink open={isOpen} to='/products' onClick={onLinkClick}>
            <AiOutlineShop />
            &nbsp;
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            open={isOpen}
            onClick={onLinkClick}
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
                  onClick={onLinkClick}
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
  onLinkClick: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  currentPath: PropTypes.string.isRequired
}
