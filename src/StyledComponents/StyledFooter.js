import styled, { css } from 'styled-components'

export const FooterWrapper = styled.footer`
  height: 550px;
  padding: 30px 24px 15px;
  display: grid;
  grid-template-rows: 5fr 4fr;
  row-gap: 20px;
  justify-content: center;
  color: var(--mainLavander);
  background: var(--mainDark);
  & > p {
    align-self: center;
    font-size: 12px;
  }
  @media screen and (min-width: 480px) {
    height: 400px;
    padding: 30px 40px 15px;
  }
  @media screen and (min-width: 768px) {
    height: 360px;
    grid-template: 1fr 70px / repeat(2, minmax(auto, 512px));
    padding: 60px 50px 0;
  }
`
export const BrandDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 2px solid var(--mainLavander);
`
export const Text = styled.p`
  line-height: 20px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const NetworksUl = styled.ul`
  display: flex;
  flex-direction: row;
  ${props => props.end && css`
    width: initial;
    align-self: center;
    justify-self: end;
    font-size: 12px;
  `}
  & a {
    margin-right: 20px;
    color: var(--mainLavander);
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
