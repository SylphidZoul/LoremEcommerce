import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const CartWrapper = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: 70px;
  width: 100%;
  color: var(--mainDark);
  padding: 10px;
  row-gap: 20px;
  @media screen and (min-width: 480px) {
    background: var(--mainWhite);
    border: 1px solid rgba(var(--rgbDark), 0.2);
    border-radius: 5px;
    width: 65%;
    justify-self: center;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    width: 75%;
  }
`
export const Head = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
export const Title = styled.h3`
  font-weight: 500;
  letter-spacing: 1pt;
  font-size: 30px;
  padding: 10px;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const Link = styled(RouterLink)`
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Item = styled.div`
  display: grid;
  position: relative;
  background: rgba(230, 230, 230, 0.6);
  grid-template: repeat(2, 1fr) / 100px repeat(2, 1fr);
  grid-template-areas: 'img name name' 'img price quantity';
  width: 100%;
  border: 1px solid rgba(var(--rgbDark), 0.1); 
  align-items: center;
  justify-items: center;
  @media screen and (min-width: 768px) {
    grid-template: 1fr / 100px repeat(3, 1fr);
    grid-template-areas: 'img price name quantity';
  }
`

export const Img = styled.img`
  width: 100%;
  grid-area: img;
`
export const Name = styled.h3`
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  grid-area: name;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Price = styled.h3`
  letter-spacing: 0.8pt;
  grid-area: price;
  color: var(--mainPurple);
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
  }
`
export const Quantity = styled.p`
  font-size: 12px;
  grid-area: quantity;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Total = styled.div`
  width: 100%;
  background: rgba(230, 230, 230, 0.6);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  height: 30px;
  font-weight: 400;
  border: 1px solid rgba(var(--rgbDark), 0.1); 
  @media screen and (min-width: 768px) {
    font-size: 20px;
    align-items: center;
  }
`
export const RemoveButton = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  top: 2px;
  right: 2px;
  background: transparent;
  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }
`

export const CheckOutButton = styled.button`
  border: none;
  font-weight: 600;
  background: var(--mainPurple);
  font-size: 18px;
  border-radius: 5px;
  color: var(--mainWhite);
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 65%;
    justify-self: center;
  }
  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }
`
