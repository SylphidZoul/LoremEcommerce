import React from 'react'
import { Section, Divider, Divider2 } from '../StyledComponents/StyledSection'

export const SectionComponent = ({ children, colorTop = 'mainWhite', color = 'mainDark', colorBot = 'mainWhite' }) => {
  return (
    <Section color={color}>
      <Divider color={colorTop} />
      {children}
      <Divider2 color={colorBot} />
    </Section>
  )
}
