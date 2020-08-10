import styled, { keyframes } from 'styled-components'

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
  border-top: 5px solid var(--mainRed);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1s ease-out infinite;
`

export const LoadingPage = styled(Spinner)`
  position: absolute;
  width: 75px;
  height: 75px;
  border-width: 15px;
  top: 50%;
  left: 50%;
  margin-top: -37.5px;
  margin-left: -37.5px;
`
