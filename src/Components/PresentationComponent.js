import React from 'react'
import { useLazyLoading } from '../Hooks/useLazyLoading'
import { GridWrapper, Text, Title, Article } from '../StyledComponents/StyledPresentation'
import PropTypes from 'prop-types'

export const PresentationComponent = ({
  childrenFirst,
  children,
  text,
  textColor,
  title
}) => {
  const [show, ref] = useLazyLoading()

  return (
    <GridWrapper ref={ref}>
      {
        show &&
          <>
            {childrenFirst && children}
            <Article>
              <Title color={textColor}>
                {title}
              </Title>
              <Text color={textColor}>
                {text}
              </Text>
            </Article>
            {!childrenFirst && children}
          </>
      }
    </GridWrapper>
  )
}

PresentationComponent.propTypes = {
  childrenFirst: PropTypes.bool,
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  title: PropTypes.string.isRequired
}
