import styled from 'styled-components'

export const Section = styled.section`
  background: linear-gradient(180deg,
    var(--${props => props.colorTop ? props.colorTop : props.color}) 2px,
    var(--${props => props.color}) 3px,
    var(--${props => props.color}));
  min-height: 445px;
  padding-top: ${props => props.colorTop ? '0' : '30px'};
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  row-gap: 40px;
  padding: 20px 0;
  overflow-x: hidden;
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
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 10px;
  font-family: 'Metal Mania';
  color: ${props => props.color !== 'mainWhite' ? 'var(--mainSilver)' : 'var(--mainPurple)'};
`
