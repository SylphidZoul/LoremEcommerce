import styled from 'styled-components'
import Concert from '../Assets/concertsignup.jpg'

export const Background = styled.div`
  width: 100%;
  height: 650px;
  background: url(${Concert});
  background-position-x: calc(960px + 25vw);
  @media screen and (min-width: 768px){
    height: 750px;
  }
  @media screen and (min-width: 1024px){
    background-size: cover;
    background-position: 0 0;
    height: 850px;
  }
`
export const SignupLayer = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(17,10,17,0.5);
  padding: 3% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 678px){
  }
`
export const SignupForm = styled.div`
  width: 90%;
  height: 100%;
  padding: 4% 5% 2%;
  background: rgba(17,10,17,0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid var(--mainWhite);
  box-shadow: 3px 3px 4px 0px var(--mainDark);
  @media screen and (min-width: 468px){
    width: 60%;
  }
  @media screen and (min-width: 768px){
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: calc(100% / 2.5);
    padding: 4% 3% 2%;
  }
  @media screen and (min-width: 1600px){
    width: calc(100% / 3.5);
    padding: 4% 2% 2%;
  }
`
