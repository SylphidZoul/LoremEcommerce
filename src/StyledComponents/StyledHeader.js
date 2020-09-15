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
  padding: calc(8% + 60px) 20% 5%;
  font-family: 'Metal Mania';
  background: url(${Band});
  background-size: cover;
  @media screen and (min-width: 480px){
    padding-top: 0;
    height: 600px;
  }
  @media screen and (min-width: 768px){
    height: 750px;
    padding-top: calc(200px + 6%);
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  color: var(--mainWhite);
  letter-spacing: 2pt;
  font-weight: 500;
  @media (min-width: 1000px){
    font-size: 2.5em; 
  }
`

export const SubTitle = styled.h3`
  width: 80%;
  max-width: 630px;
  font-size: 1em;
  color: var(--mainWhite);
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.8pt;
  font-family: 'Poppins', sans-serif;
`

export const HeaderButton = styled.div`
  font-size: 1.8em;
  text-align: center;
  color: var(--mainWhite);
  padding: 7%;
  border: 1px solid var(--mainWhite);
  border-radius: 1px;
  transition: all 250ms ease-in-out;
  letter-spacing: 2pt;
  @media screen and (min-width: 480px){
    padding: 5%;
  }
  @media screen and (min-width: 768px){
    font-size: 2em;
    padding: 2%;
    cursor: pointer;
    &:hover {
      background: var(--mainWhite);
      mix-blend-mode: screen;
      color: black;
    }
  }
`
