import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

export const ContentWrapper = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | LoremEcommerce </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      {children}
    </>
  )
}
ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
