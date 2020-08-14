import styled from 'styled-components'

export const NavBackground = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100px;
  @media screen and (min-width: 468px) {
    height: 80px;
  }
  @media screen and (min-width: 768px) {
    height: 201px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: calc(50% - 512px);
    max-width: 1024px;
  }
`

export const GuitarSvg = styled.svg`
  position: absolute;
  width: 100%;
  transform: rotate(98.5deg);
  right: 0;
  max-height: 400px;
  top: -110px;
  @media screen and (min-width: 460px) {
    top: -120px;
    max-height: 350px;
  }
  @media screen and (min-width: 768px) {
    top: -300px;
    max-height: 800px;
  }
  @media screen and (min-width: 1024px) {
    top: -400px;
    max-height: 1200px;
  }
`
