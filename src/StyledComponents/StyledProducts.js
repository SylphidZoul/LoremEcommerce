import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
    }
`
export const Card = styled.div`

    width: 20%;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EEE;
    box-shadow: 0px 0px 7px 0px rgba(var(--rgbDark),0.3);

    @media screen and (min-width: 768px){
        margin: 30px;
        width: 20%;
        height: 360px;
        flex-direction: column;
    }
`

export const Icon = styled.span`
    color: var(--mainDark);
    padding: 5%;
    font-size: 90px;

    @media screen and (min-width: 768px){
        font-size: 120px;
    }
`

export const CardText = styled.p`
    padding: 5% 10%;
    line-height: 1.1;
    font-size: 0.7em;
    text-align: center;
    color: var(--mainDark);

    @media screen and (min-width: 768px){
        font-size: 0.8em;
    }
`
