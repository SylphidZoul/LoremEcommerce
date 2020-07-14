import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        height: 60vh;
    }
`
export const Card = styled.div`

    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--mainWhite);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);

    @media screen and (min-width: 768px){
        margin: auto 0;
        width: 20%;
        height: 90%;
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
