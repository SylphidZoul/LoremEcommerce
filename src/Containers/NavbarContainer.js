import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useLocation } from 'react-router-dom'
import { NavbarComponent } from '../Components/Navbar'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAuth, userData } = useContext(AuthContext)
  const Location = useLocation()

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
    <NavbarComponent
      isScrolled={isScrolled}
      isOpen={isOpen}
      handleOpen={handleOpen}
      isAuth={isAuth}
      userName={userData.name}
      currentPath={Location.pathname}
    />
  )
}
