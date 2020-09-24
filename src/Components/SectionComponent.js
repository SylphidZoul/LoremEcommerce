import React from 'react'
import { Section, ContentWrapper, Divider, SectionTitle } from '../StyledComponents/StyledSection'
import PropTypes from 'prop-types'

export const SectionComponent = ({
  children,
  colorTop,
  color = 'mainDark',
  title
}) => {
  return (
    <Section color={color} colorTop={colorTop}>
      {colorTop &&
        <Divider color={colorTop} />}
      <ContentWrapper color={color}>
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
  colorTop: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string
}
