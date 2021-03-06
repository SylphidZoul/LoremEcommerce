import styled, { keyframes, css } from 'styled-components'

const spin = keyframes`
  from { 
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Spinner = styled.div`
  margin: 0 auto;
  border: 5px solid var(--mainDark);
  border-top: 5px solid var(--mainPurple);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1s linear infinite;
`

export const LoadingPageSpinner = styled(Spinner)`
  position: relative;
  width: 75px;
  height: 75px;
  border-width: 10px;
  justify-self: center;
  ${props => props.fullPage ? css`top: calc(50vh - 37.5px);` : css`margin: 40px 0;`}
`

export const LoadingPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`
