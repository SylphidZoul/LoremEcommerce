import styled from 'styled-components'
import { FadeInFromBelow } from './Animations'

export const GridWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px 30px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 30px;
  overflow-y: hidden;
  @media screen and (min-width: 480px) {
    padding: 0 40px 30px;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    padding: 0 50px 30px;
  }
`
export const Article = styled.article`
  animation: ${FadeInFromBelow} 4000ms ease;
`
export const Title = styled.h2`
  display: inline-block;
  position: relative;
  font-size: 28px;
  color: var(--${props => props.color});
  letter-spacing: 10px;
  padding-bottom: 15px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 35px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 5px;
    background: var(--mainPurple);
    width: 100px;
    bottom: 0;
    left: calc(50% - 50px);
  }
  @media screen and (min-width: 480px) {
    text-align: left;
    &::after {
      left: 0;
    }
  }
`
export const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: var(--${props => props.color});
  text-align: center;
  @media screen and (min-width: 480px) {
    text-align: left;
  }
`
export const Svg = styled.svg`
  width: 175px;
  animation: ${FadeInFromBelow} 4000ms ease;
  @media screen and (min-width: 768px) {
    width: ${props => props.width};
  }
`
export const Img = styled.img`
  width: 50%;
  animation: ${FadeInFromBelow} 4000ms ease;
`
