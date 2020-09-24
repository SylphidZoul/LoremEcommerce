import styled, { css } from 'styled-components'

const TransformLine = (props) => {
  if (props.first) {
    return css`transform: translateY(10px) rotate(135deg);`
  }
  if (props.second) {
    return css`opacity: 0;`
  }
  if (props.third) {
    return css`transform: translateY(-10px) rotate(-135deg);`
  }
}

export const BurgerDiv = styled.div`
  position: absolute;
  top: ${props => props.modal ? '3%' : ''};
  left: ${props => props.modal ? '85%' : '5%'};
  z-index: 5;
  cursor: pointer;
  
  @media (min-width: 768px) {
    position: absolute;
    left: 85%;
    top: 3%;
    display: ${props => props.modal ? 'inline' : 'none'};
  }
`
export const BurgerLine = styled.div`
  width:30px;
  height:5px;
  margin:5px;
  background-color: var(--mainSilver);
  border: 1px solid var(--mainDark);
  border-radius: 20%;
  transition: all 0.3s ease-in-out;
  ${props => props.open && TransformLine(props)}
`
