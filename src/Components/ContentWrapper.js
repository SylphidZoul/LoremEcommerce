import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import Guitar from '../Components/Guitar'

export const ContentWrapper = ({ children, title, subtitle, background }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | LoremEcommerce </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      {background && (
        <NavBackground>
          <Guitar />
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
