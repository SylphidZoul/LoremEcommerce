import styled from 'styled-components'
import Band from '../Assets/band.svg'

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px 5% 10%;
  font-family: 'Metal Mania';
  background: url(${Band});
  background-size: cover;
  @media screen and (min-width: 480px){
    padding-top: 90px;
    height: 600px;
  }
  @media screen and (min-width: 768px){
    height: 750px;
    padding: 200px 5% 7%;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  color: var(--mainSilver);
  letter-spacing: 2pt;
  font-weight: 500;
  @media (min-width: 1000px){
    font-size: 2.5em; 
  }
`

export const SubTitle = styled.p`
  width: 80%;
  max-width: 630px;
  font-size: 1em;
  color: var(--mainSilver);
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.8pt;
  font-family: 'Poppins', sans-serif;
`

export const HeaderButton = styled.div`
  width: 80%;
  font-size: 1.8em;
  text-align: center;
  color: var(--mainSilver);
  padding: 4%;
  border: 1px solid var(--mainSilver);
  border-radius: 1px;
  transition: all 250ms ease-in-out;
  letter-spacing: 2pt;
  @media screen and (min-width: 480px){
    width: 60%;
    padding: 3%;
  }
  @media screen and (min-width: 768px){
    width: initial;
    font-size: 2em;
    padding: 2%;
    cursor: pointer;
    &:hover {
      background: var(--mainSilver);
      mix-blend-mode: screen;
      color: black;
    }
  }
`
