import React, { useState, useEffect } from 'react'
import { NavWrapper, LogoLink } from '../StyledComponents/StyledNavbar'
import { NavBarLinks } from '../Components/NavBarLinks'
import { Logo } from '../Components/Logo'
import { Burger } from '../Components/Burger'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY < 50 ? setIsScrolled(false) : setIsScrolled(true)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <NavWrapper scroll={isScrolled}>
      <Burger open={isOpen} onClick={handleOpen} />
      <LogoLink to='/'>
        <Logo scroll={isScrolled} />
      </LogoLink>
      <NavBarLinks isOpen={isOpen} isScrolled={isScrolled} onClickedLink={handleOpen} />
    </NavWrapper>
  )
}
