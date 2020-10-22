import styled, { css } from 'styled-components'

export const Svg = styled.svg`
  width: 180px;
  margin-left: -5px;
  ${props => props.navbar && css`
  position: relative;
  height: 40%;
  top: 30%;
  `}
  @media screen and (min-width: 768px){
    ${props => props.navbar && css`
    position: absolute;
    transition: all 300ms ease-in-out;
    top: ${props => props.scroll ? '15px' : '30px'};
    width: ${props => props.scroll ? '120px' : '200px'};
    left: ${props => props.scroll ? '5%' : 'calc(50% - 100px)'};
    transform: ${props => props.scroll ? 'translateX(-20%)' : 'none'};
    `}
  }
`
