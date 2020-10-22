import { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`
export const FadeInFromBelow = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  20% {
    transform: translateY(0);
  }
  100% {
    opacity: 1;
  }
`

export const TranslateLeft = keyframes`
  0% {
      transform: translateX(-100%)
  }
  100% {
      transform: translateX(0)
  }
`
export const TranslateRight = keyframes`
  0% {
      transform: translateX(100%)
  }
  100% {
      transform: translateX(0)
  }
`
