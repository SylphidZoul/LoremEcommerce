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
  color: var(--mainSilver);
  font-weight: 500;
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
    letter-spacing: 3pt;
  }
`
export const Input = styled.input`
  width: 98%;
  height: 30px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1pt;
  font-weight: 300;
  background: transparent;
  color: var(--mainSilver);
  border: none;
  border-bottom: 1px solid var(--mainSilver);
  margin-bottom: 8%;
  margin-top: 2%;
  padding: 0 0.5%;
  outline: none;
  &::placeholder {
    color: var(--mainSilver);
    opacity: 1;
  }
  &::-ms-input-placeholder {
    color: var(--mainSilver);
  }
`
export const Button = styled.button`
  width: 100%;
  background: var(--mainSilver);
  color: var(--mainDark);
  font-size: 24px;
  padding: 8px 0;
  min-height: 44px;
  border: none;
  border-radius: 500px;
  cursor: pointer;
  &:hover{
    color: var(--mainSilver);
    background: var(--mainPurple);
  }
  @media screen and (min-width: 480px){
    margin-bottom: 8%;
  }
  @media screen and (min-width: 768px){
    margin-bottom: 0%;
  }
`
