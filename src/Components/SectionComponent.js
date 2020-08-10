import React from 'react'
import { Section, ContentWrapper, Divider, SectionTitle } from '../StyledComponents/StyledSection'
import PropTypes from 'prop-types'

export const SectionComponent = ({ children, colorTop = 'mainWhite', color = 'mainDark', title }) => {
  return (
    <Section color={color} colorTop={colorTop}>
      <Divider color={colorTop} />
      <ContentWrapper>
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
  children: PropTypes.node,
  colorTop: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string
}
