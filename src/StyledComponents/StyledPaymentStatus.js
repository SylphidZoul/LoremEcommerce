import styled from 'styled-components'

export const Wrapper = styled.article`
  position: relative;
  display: grid;
  color: var(--mainDark);
  padding: 10px;
  row-gap: 10px;
  justify-items: center;
  @media screen and (min-width: 768px){
    width: 60%;
    border: 1px solid rgba(var(--rgbDark), 0.1);
    background: rgba(230, 230, 230, 0.3);
    justify-self: center;
    padding: 20px 0 50px;
  }
`
export const H2 = styled.h2`
  font-size: 26px;
  font-weight: 500;
  /* text-align: center; */
  color: var(--mainPurple);
`

export const ItemsDetail = styled.div`
  display: grid;
  /* grid-template: 30px 30px / repeat(2, 1fr);
  grid-template-areas: 'name name' 'quantity price'; */
  justify-items: center;
`
export const H3 = styled.h3`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: var(--mainPurple);
`

export const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  grid-area: ${props => props.area};
`
