import styled from 'styled-components'

export const NavBackground = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100px;
  background-image: radial-gradient(circle at center center,rgb(10, 3, 9), rgba(var(--rgbPurple), 0.7));
  box-shadow: 0px 2px 5px 1px rgba(84,39,184,0.5);
  @media screen and (min-width: 480px) {
    height: 80px;
  }
  @media screen and (min-width: 768px) {
    height: 201px;
  }
`

export const GuitarSvg = styled.svg`
  position: absolute;
  transform: rotate(55deg);
  max-height: 300px;
  top: -100px;
  left: 30px;
  @media screen and (min-width: 460px) {
    top: -140px;
    max-height: 350px;
  }
  @media screen and (min-width: 768px) {
    top: -300px;
    max-height: 800px;
  }
  @media screen and (min-width: 1024px) {
    top: -80px;
    left: -55%;
    max-height: 400px;
  }
`
export const SkullSvg = styled.svg`
  display: none;
  @media screen and (min-width: 1024px){
    display: initial;
    position: absolute;
    left: 65%;
    top: -150px;
    max-height: 450px;
  }
`
