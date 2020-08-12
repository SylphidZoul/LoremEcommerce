import styled, { css } from 'styled-components'
import { NavLink as RouterNavLink, Link as RouterLink } from 'react-router-dom'

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 300ms ease-in-out;
  z-index: 100;
  ${props => props.scroll && css`
    height: 60px;
    background: rgba(var(--rgbDark), 0.7);
    border-bottom: 1px solid var(--mainWhite);
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.5);
  `}
  @media screen and (min-width: 480px){
    height: ${props => props.scroll ? '50px' : '90px'};
  }

  @media screen and (min-width: 768px){
    height: 200px;
    padding: 130px 0 10px;
    background: transparent;
    background-size: cover;
    background-position-y: -30px;
    ${props => props.scroll && css`
      background: rgba(var(--rgbDark), 0.7);
      background-image: none;
      height: 70px;
      padding: 20px 0 0;
    `}
  }
`

export const NavUl = styled.ul`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  top: 0;
  padding-right: 15%;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transform: translateX(-18%) skew(-16deg);
  & > li {
    z-index: 102;
    transform: skew(16deg);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -15px;
    background: rgba(var(--rgbDark), 0.9);
    transform-origin: 0 0;
    transform: ${props => props.open ? 'skew(-2deg) translateX(-7%)' : 'skew(-14deg) translateX(-120%)'};
    transition: all .275s .1s;
    z-index: 101;
    opacity: ${props => props.open ? 1 : 0};
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.5);
  }
  @media screen and (min-width: 480px){
      padding-top: 10%;
  }
  @media screen and (min-width: 768px){
    position: initial;
    width: 70%;
    max-width: 1000px;
    height: initial;
    flex-direction: row;
    visibility: visible;
    padding: 0 0 20px;
    transform: none;
    border-bottom: ${props => props.scroll ? 'none' : '1px solid var(--mainWhite)'};
    align-self: ${props => props.scroll ? 'flex-end' : 'center'};
    transition: all 200ms ease-in-out;
    &::before {
      display: none;
    }
    & > li {
      transform: none;
    }
  }
  @media screen and (min-width: 1024px){
    width: ${props => props.scroll ? '55%' : '70%'};
  }  
`
const Links = css`
  color: var(--mainWhite);
  font-size: 25px;
  transition: all 500ms 100ms;
  opacity: ${props => props.open ? 1 : 0};
  @media screen and (min-width: 480px){
    letter-spacing: 2pt;
    font-size: 26px;
  }
  @media screen and (min-width: 768px){
    font-size: 16px;
    letter-spacing: 0.5pt;
    transition: all 0.2s ease 0s;
    font-weight: 400;
    opacity: 1;
  }
  @media screen and (min-width: 1024px){
    padding: 8px 12px 7px;
    border-radius: 5px;
    &:hover{
      background-color: var(--mainWhite);
      color: var(--mainDark);   
      cursor: pointer;
    }
  }
`

export const NavLink = styled(RouterNavLink)`
  ${Links}
  text-decoration: none;
  &[aria-current]{
    color: var(--mainRed);
    font-weight: 600;
  }
`
export const Link = styled(RouterLink)`
  ${Links}
  text-decoration: none;
`
export const LogoLink = styled(RouterLink)`
  height: 100%;
  text-decoration: none;
  z-index: 1;
`
