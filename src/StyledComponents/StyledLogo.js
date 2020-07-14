import styled from 'styled-components'

export const Svg = styled.svg`
  height: 75%;

  @media screen and (min-width: 768px){
    position: absolute;
    transition: all 200ms ease-in-out;
    top: ${props => props.scroll ? '0' : '30px'};
    height: ${props => props.scroll ? '90%' : '45%'};
    left: ${props => props.scroll ? '0' : 'calc(50% - 190px)'};
    transform: ${props => props.scroll ? 'translateX(-20%)' : 'none'}
  }
`
