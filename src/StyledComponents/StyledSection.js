import styled, { css } from 'styled-components'

export const Section = styled.section`
  background: linear-gradient(180deg,
    var(--${props => props.colorTop}) 2px,
    var(--${props => props.color}) 3px,
    var(--${props => props.color}));
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  row-gap: 50px;
  padding: 20px 0;
  overflow-x: hidden;
  ${props => props.gradient &&
    css`background-image: linear-gradient(180deg,
      var(--${props => props.color}),
      var(--${props => props.colorGradient}),
      var(--${props => props.color}));`
  }
`

export const Divider = styled.div`
  border-bottom: 8.74496644295vw solid transparent;
  border-left: 100vw solid ${props => `var(--${props.color})`};
  margin-top: -1px;
  @media screen and (min-width: 1024px) {
    border-left-width: calc(100vw - 16px);
  }
`

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 3pt;
  color: ${props => props.color !== 'mainLavander' ? 'var(--mainWhite)' : 'var(--mainPurple)'};
`
