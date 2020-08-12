import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    @media screen and (min-width: 480px){
        width: ${props => props.login ? '45%' : '100%'};
    }
    @media screen and (min-width: 768px){
        width: 100%; 
    }
`
export const FormTitle = styled.h2`
    color: var(--mainWhite);
    font-weight: 600;
    text-align: center;
    font-size: 2em;
    @media screen and (min-width: 480px){
        font-size: 1.5em;
        margin-bottom: 5%;
    }
    @media screen and (min-width: 768px){
        width: 75%;
        align-self: center;
        font-size: 2em;
        margin-bottom: 0;
    }
`
export const Input = styled.input`
    width: 98%;
    height: 30px;
    font-size: 1em;
    letter-spacing: 1.3pt;
    font-weight: 200;
    background: transparent;
    color: var(--mainWhite);
    border: none;
    padding: 0 1%;
    border-bottom: 1px solid var(--mainWhite);
    margin-bottom: 8%;
    margin-top: 2%;
    outline: none;
    &::placeholder {
        color: var(--mainWhite);
        opacity: 1;
    }
    &::-ms-input-placeholder {
        color: var(--mainWhite);
    }
    @media screen and (min-width: 480px){
        font-size: 0.9em;
    }
    `
export const Button = styled.button`
    width: 100%;
    background: var(--mainWhite);
    color: var(--mainDark);
    font-size: 1.5em;
    padding: 8px 0;
    border: none;
    border-radius: 500px;
    cursor: pointer;
    &:hover{
        color: var(--mainWhite);
        background: var(--mainSilver);
    }
    @media screen and (min-width: 480px){
        margin-bottom: 8%;
    }
    @media screen and (min-width: 768px){
        margin-bottom: 0%;
    }
`
