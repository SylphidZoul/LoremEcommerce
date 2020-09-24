import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import Guitar from '../Components/Guitar'
import { Skull } from '../Components/Skull'

export const ContentWrapper = ({ children, title, subtitle, background }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | LoremEcommerce </title>}
        {subtitle && <meta name='description' content={subtitle} />}
        <link rel='icon' href='assets/favicon.ico' />
      </Helmet>
      {background && (
        <NavBackground>
          <Guitar />
          <Skull />
        </NavBackground>
      )}
      {children}
    </>
  )
}
ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  background: PropTypes.bool
}
