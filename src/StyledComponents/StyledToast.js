import styled from 'styled-components'
import { TranslateRight } from './Animations'

export const ToastList = styled.div`
  position: fixed;
  font-size: 14px;
  bottom: 12px;
  right: 12px;
  display: flex;
  flex-direction: column-reverse;
`
export const Toast = styled.div`
  position: relative;
  display: grid;
  grid-template: repeat(2, 55px) / 110px 175px;
  grid-template-areas: 'img title' 'img message';
  justify-items: center;
  align-items: center;
  background-image: repeating-linear-gradient(90deg,
    hsla(263,0%,84%,0.06) 0px,
    hsla(263,0%,84%,0.06) 1px,
    transparent 1px,
    transparent 71px),
    repeating-linear-gradient(135deg, hsla(263,0%,84%,0.06) 0px,
    hsla(263,0%,84%,0.06) 1px,
    transparent 1px,
    transparent 71px),
    repeating-linear-gradient(45deg, hsla(263,0%,84%,0.05) 0px,
    hsla(263,0%,84%,0.05) 1px,
    transparent 1px,
    transparent 36px),
    repeating-linear-gradient(90deg, hsla(263,0%,84%,0.05) 0px,
    hsla(263,0%,84%,0.05) 1px,
    transparent 1px,
    transparent 36px),
    repeating-linear-gradient(45deg, hsla(263,0%,84%,0.05) 0px,
    hsla(263,0%,84%,0.05) 1px,
    transparent 1px, transparent 16px),
    repeating-linear-gradient(135deg, hsla(263,0%,84%,0.05) 0px,
    hsla(263,0%,84%,0.05) 1px,
    transparent 1px,
    transparent 16px),
    linear-gradient(90deg, hsl(72,13%,7%),hsl(72,13%,7%));
  color: var(--mainWhite);
  margin-top: 15px;
  animation: ${TranslateRight} 1000ms ease-out forwards;
  overflow-x: hidden;
`
export const ToastImg = styled.img`
  grid-area: img;
  min-height: 90%;
  max-height: 100%;
`
export const ToastTitle = styled.h3`
  grid-area: title;
  align-self: ${props => props.alignEnd ? 'end' : 'center'};
`
export const ToastMessage = styled.p`
  grid-area: message;
  font-size: 12px;
  text-align: center;
  align-self: start;
  line-height: 1rem;
`
export const Close = styled.span`
  position: absolute;
  top: 2px;
  right: 6px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`
