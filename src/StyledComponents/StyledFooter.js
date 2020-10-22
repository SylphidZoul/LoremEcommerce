import styled, { css } from 'styled-components'

export const FooterWrapper = styled.footer`
  background: var(--mainDark);
  height: 360px;
  display: grid;
  grid-template: 1fr 70px / repeat(2, minmax(auto, 512px));
  justify-content: center;
  padding: 60px 5% 0;
  color: var(--mainLavander);
  & > p {
    align-self: center;
    font-size: 12px;
  }
`
export const BrandDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  border-bottom: 2px solid var(--mainLavander);
`
export const Text = styled.p`
  width: 350px;
  line-height: 20px;
  font-size: 14px;
`
export const NetworksUl = styled.ul`
  display: flex;
  flex-direction: row;
  width: 300px;
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
`
