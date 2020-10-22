import styled, { css } from 'styled-components'

export const Section = styled.section`
  min-height: 445px;
  padding-top: ${props => props.colorTop ? '0' : '30px'};
  background: var(--${props => props.color});
  ${
    props => props.colorTop && css`
    background: linear-gradient(180deg,
      var(--${props => props.colorTop}) 2px,
      var(--${props => props.color}) 3px,
      var(--${props => props.color}));
  `
  }
  ${
    props => props.gradient && css`
      background: linear-gradient(180deg,
        var(--mainWhite),
        var(--${props => props.color}));
    `
  }
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1074px);
  justify-content: center;
  row-gap: 40px;
  padding: 20px 0;
  overflow: hidden;
`

export const Divider = styled.div`
  border-bottom: 8.74496644295vw solid transparent;
  border-left: 100vw solid ${props => `var(--${props.color})`};
  margin-top: -1px;
  @media screen and (min-width: 1024px) {
    border-left-width: calc(100vw - 16px);
  }
`

export const SectionTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 10px;
  font-family: 'Metal Mania';
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(var(--rgbPurple),0.1);
  color: ${props => props.color !== 'mainDark' ? 'var(--mainPurple)' : 'var(--mainSilver)'};
`
