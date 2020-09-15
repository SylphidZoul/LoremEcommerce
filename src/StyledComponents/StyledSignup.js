import styled from 'styled-components'
import Crowd from '../Assets/crowd.svg'

export const Background = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0 3%;
  background-image: url(${Crowd});
  background-size: cover;
  background-position-x: -250px;
  z-index: 0;
  @media screen and (min-width: 768px){
    padding: calc(200px + 3%) 0 3%;
    height: 850px;
    background-position-x: -400px;
  }
  @media screen and (min-width: 1024px){
    background-position-x: -200px;
    padding-bottom: 1%;
  }
`

export const SignupForm = styled.div`
  position: relative;
  z-index: 1;
  width: 90%;
  height: 100%;
  padding: 4% 5% 2%;
  background: rgba(var(--rgbDark), 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  box-shadow: 0px 0px 10px 0px var(--mainPurple);
  @media screen and (min-width: 480px){
    width: 60%;
    max-width: 360px;
  }
  @media screen and (min-width: 768px){
    width: 60%;
    padding: 2% 3% 2%;
  }
  @media screen and (min-width: 1024px) {
    width: calc(100% / 2.5);
    max-width: 450px;
  }
`
export const Error = styled.span`
  color: red;
  align-self: center;`
