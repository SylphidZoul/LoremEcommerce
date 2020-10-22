import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const CartWrapper = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: 100px;
  row-gap: 40px;
  width: 100%;
  padding: 10px;
  color: var(--mainDark);
  @media screen and (min-width: 480px) {
    justify-self: center;
    width: 65%;
  }
  @media screen and (min-width: 768px) {
    width: 75%;
    padding: 10px 20px;
  }
`
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(var(--rgbPurple),0.1);
`
export const Title = styled.h3`
  padding: 10px;
  letter-spacing: 1pt;
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  color: var(--mainPurple);
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
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
  position: relative;
  display: grid;
  grid-template: repeat(2, 1fr) / 100px repeat(2, 1fr);
  grid-template-areas: 'img name name' 'img price quantity';
  width: 100%;
  /* background: var(--mainLavander); */
  align-items: center;
  justify-items: center;
  /* padding-bottom: 10px; */
  border-bottom: 1px solid rgba(var(--rgbDark), 0.4); 
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    grid-template: 1fr / 100px repeat(3, 1fr);
    grid-template-areas: 'img quantity name price';
  }
`

export const Img = styled.img`
  grid-area: img;
  width: 100%;
  height: 100px;
`
export const Name = styled.h3`
  grid-area: name;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Price = styled.h3`
  grid-area: price;
  letter-spacing: 0.8pt;
  color: var(--mainPurple);
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
  }
`
export const Quantity = styled.p`
  grid-area: quantity;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(var(--rgbDark), 0.3); 
  font-weight: 400;
  @media screen and (min-width: 768px) {
    padding: 10px 70px 20px;
    align-items: center;
    font-size: 20px;
  }
`
export const RemoveButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }
`

export const CheckOutButton = styled.button`
  border: none;
  padding: 10px;
  background: var(--mainPurple);
  border-radius: 5px;
  color: var(--mainSilver);
  font-size: 18px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    width: 65%;
    justify-self: center;
  }
  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }
`
