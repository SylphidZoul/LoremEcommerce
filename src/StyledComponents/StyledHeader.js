import styled from 'styled-components'
import Concert from '../Assets/concert.jpg'

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 700px;
    background: url(${Concert});
    background-size: cover;
    background-position-x: -130px;
    @media screen and (min-width: 480px){
        height: 550px;
    }
    @media screen and (min-width: 768px){
        background-position-x: 0;
    }
    @media screen and (min-width: 1280px){
        background-position-y: -100px; 
    }
    @media screen and (min-width: 1600px){
        background-position-y: -200px;
    }
`

export const HeaderLayer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(17,10,17,0.17690826330532217) 16%, rgba(17,10,17,1) 95%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 8% 20% 5%;
    font-family: 'Metal Mania';`

export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    color: var(--mainWhite);
    font-weight: bold;
    letter-spacing: 2pt;
    @media (min-width: 1000px){
       font-size: 2.5em; 
    }`

export const SubTitle = styled.h3`
    width: 80%;
    font-size: 1em;
    color: var(--mainWhite);
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.4pt;
    font-family: 'Montserrat', sans-serif;
    `

export const HeaderButton = styled.div`
    font-size: 1.8em;
    text-align: center;
    font-weight: bold;
    color: var(--mainWhite);
    padding: 7%;
    border: 1px solid var(--mainWhite);
    border-radius: 1px;
    transition: all 250ms ease-in-out;
    letter-spacing: 2pt;

    @media screen and (min-width: 768px){
        font-size: 2em;
        padding: 2%;
        cursor: pointer;
        &:hover {
            background: var(--mainWhite);
            mix-blend-mode: color-dodge;
            color: black;
        }
    }`
