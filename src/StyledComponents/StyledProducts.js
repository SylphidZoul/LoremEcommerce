import styled from 'styled-components'
import { FadeIn } from './Animations'

export const CardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(auto, 340px);
    align-items: center;
    justify-items: center;
    grid-gap: 40px;
    @media screen and (min-width: 468px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0px;
    }
    @media screen and (min-width: 768px){
        grid-auto-rows: minmax(auto, 1fr);
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 50px;
    }
`
export const Card = styled.div`
    width: 75%;
    max-width: 240px;
    min-height: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #EEE;
    box-shadow: 0px 0px 7px 0px rgba(var(--rgbDark),0.3);
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 7px 4px rgba(var(--rgbDark),0.5);
    }
`
export const CardText = styled.p`
    line-height: 1.4;
    font-weight: 400;
    text-align: center;
    color: var(--mainDark);
    @media screen and (min-width: 768px){
        font-size: 0.9em;
    }
`
export const Price = styled.h3`
    font-weight: 600;
    color: var(--mainSilver);
    font-size: 1.3em;
    letter-spacing: 1pt;
    align-self: flex-start;
    margin: 10px 0 5px 10px;
    @media screen and (min-width: 768px){
    margin: 15px 0 10px 15px;
    }
`
export const AlbumCover = styled.img`
    width: 100%;
    animation: ${FadeIn} 2000ms ease-out forwards;
`
export const Button = styled.button`
    color: var(--mainSilver);
    align-self: flex-end;
    border: none;
    cursor: pointer;
    &:hover {
        background: var(--mainSilver);
        color: var(--mainWhite);
    }
`
