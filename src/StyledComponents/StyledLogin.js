import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import Guitar from '../Assets/guitar2.svg'
import { FadeIn } from './Animations'

export const LoginWrapper = styled.div`
    width: 304px;
    height: 460px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -230px;
    margin-left: -152px;
    padding: 3% 8%;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    box-shadow: 0px 0px 4px 0px var(--mainRed);
    background: var(--mainDark);
    background-image: url(${Guitar});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 110%;
    animation: ${FadeIn} 500ms ease-in-out;

    @media screen and (min-width: 480px){ 
        width: 510px;
        height: 304px;
        margin-left: -255px;
        margin-top: -152px;
        padding: 3%;
        justify-content: space-evenly;
        background-position-x: 50%;
    }

    @media screen and (min-width: 768px){
        width: 425px;
        height: 550px;
        margin-top: -275px;
        margin-left: -212.5px;
        top: 50%;
        left: 50%;
        padding: 2% 4%;
        background-position-x: 100%;
    }
    @media screen and (min-width: 1600px){
        padding: 1% 2%;
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
  color: red;
  font-weight: 500;
  align-self: center`
