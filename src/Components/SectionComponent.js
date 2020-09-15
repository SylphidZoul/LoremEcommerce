import React from 'react'
import { Section, ContentWrapper, Divider, SectionTitle } from '../StyledComponents/StyledSection'
import PropTypes from 'prop-types'

export const SectionComponent = ({
  children,
  colorTop = 'mainWhite',
  color = 'mainDark',
  title,
  colorGradient,
  gradient
}) => {
  return (
    <Section color={color} colorTop={colorTop}>
      <Divider color={colorTop} />
      <ContentWrapper gradient={gradient} color={color} colorGradient={colorGradient}>
        {title &&
          <SectionTitle color={color}>
            {title}
          </SectionTitle>}
        {children}
      </ContentWrapper>
    </Section>
  )
}
SectionComponent.propTypes = {
  children: PropTypes.node.isRequired,
  colorTop: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
  colorGradient: PropTypes.string,
  gradient: PropTypes.bool
}
