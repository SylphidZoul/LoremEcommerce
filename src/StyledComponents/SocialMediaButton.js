import styled from 'styled-components'

export const SocialMediaButton = styled.button`
  position: relative;
  width: 100%;
  padding: 10px 0;
  border: none;
  background: ${props => props.google ? '#DB4437' : '#3b5998'};
  color: var(--mainSilver);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  cursor: pointer;
  &:hover{
    background: var(--mainSilver);
    color: ${props => props.google ? '#DB4437' : '#3b5998'}
  }
  @media screen and (min-width: 480px){
    width: ${props => props.login ? '40%' : '100%'};    
  }
  @media screen and (min-width: 768px){
    width: 100%;
    font-size: 1.3em;
  }
`
