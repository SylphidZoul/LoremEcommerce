import styled from 'styled-components'

export const SocialMediaButton = styled.button`
  position: relative;
  font-size: 1.2em;
  width: 100%;
  padding: 10px 0;
  font-family: 'Montserrat', sans-serif;
  border: none;
  background: ${props => props.google ? '#DB4437' : '#3b5998'};
  color: var(--mainWhite);
  cursor: pointer;
  &:hover{
    background: var(--mainWhite);
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
