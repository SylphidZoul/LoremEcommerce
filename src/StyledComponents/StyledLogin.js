import styled, { keyframes } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const LoginWrapper = styled.div`
    width: 304px;
    height: 510px;
    background: rgba(var(--rgbSilver),0.9);
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -255px;
    margin-left: -152px;
    padding: 3% 8%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px solid var(--mainDark);
    box-shadow: 3px 3px 4px 0px var(--mainDark);
    transition: all 500ms ease-in-out;
    animation: ${FadeIn} 500ms ease-in-out;

    @media screen and (min-width: 480px){ 
        width: 510px;
        height: 304px;
        margin-left: -255px;
        margin-top: -152px;
        padding: 3%;
        justify-content: space-evenly;
    }

    @media screen and (min-width: 768px){
        width: 375px;
        height: 550px;
        margin-top: -275px;
        margin-left: -187.5px;
        top: 50%;
        left: 50%;
        padding: 4% 2% 2%;
    }
`
export const Link = styled(RouterLink)`
    font-size: 0.8em;
    color: var(--mainWhite);
    font-weight: 300;
    letter-spacing: 0.8pt;
    text-align: center;
    text-decoration: none;
    &:hover{
        color: var(--mainRed);
    }
`
export const Error = styled.span`
  color: var(--mainRed);
  font-weight: 500;
  align-self: center`
