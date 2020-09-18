import styled from 'styled-components'
import { TranslateLeft, TranslateRight } from './Animations'

export const PaymentWrapper = styled.div`
  display: grid;
  grid-template: 35px 125px 1fr / 1fr;
  grid-template-areas: 'title'
                        'logo'
                        'p';
  grid-gap: 30px;
  color: ${props => props.color};
  justify-items: center;
  @media screen and (min-width: 768px) {
    grid-template: 125px 125px / 1fr 1fr;
    grid-template-areas: 'title logo'
                         'p logo';
    grid-gap: 0;
    padding-left: 40px;
    padding-bottom: 40px;
  }
`
export const H2 = styled.h2`
  grid-area: title;
  font-size: 2rem;
  font-weight: 500;
  animation: ${TranslateLeft} 1500ms ease-in-out forwards;
  @media screen and (min-width: 768px) {
    letter-spacing: 3pt;
    align-self: center;
    justify-self: start;
  }
`
export const P = styled.p`
  width: 80%;
  text-align: center;
  grid-area: p;
  line-height: 110%;
  letter-spacing: 0.8pt;
  opacity: 0.7;
  font-weight: 500;
  font-size: 14px;
  animation: ${TranslateLeft} 1500ms ease-in-out forwards;
  @media screen and (min-width: 768px) {
    width: 100%;
    justify-self: start;
    text-align: left;
    line-height: 130%;
  }
`
export const Img = styled.img`
  grid-area: logo;
  height: 100%;
  animation: ${TranslateRight} 1500ms ease-in-out forwards;
`
