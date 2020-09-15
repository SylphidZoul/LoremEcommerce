import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(7, minmax(min-content, max-content));
  grid-template-areas: 'logo'
                       'name'
                       'quantity'
                       'cartbutton'
                       'description'
                       'details'
                       'tracklist';
  padding: 20px;
  color: var(--mainDark);
  grid-row-gap: 20px;
  @media screen and (min-width: 480px) {
    grid-template: repeat(5, minmax(min-content, max-content)) / 50% 50%;
    grid-template-areas: 'name logo'
                         'quantity logo'
                         'cartbutton cartbutton'
                         'description description'
                         'details tracklist';
  }
  @media screen and (min-width: 768px) {
    grid-template-areas: 'name logo'
                         'quantity logo'
                         'cartbutton logo'
                         'description description'
                         'details tracklist';
    padding: 40px;
    background: var(--mainWhite);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`
export const NameDiv = styled.div`
  grid-area: name;
`
export const QuantityDiv = styled.div`
  grid-area: quantity;  
`
export const DescriptionDiv = styled.div`
  grid-area: description;  
`
export const DetailsDiv = styled.div`
  grid-area: details; 

`
export const TracksDiv = styled.div`
  grid-area: tracklist;
`
export const Img = styled.img`
  justify-self: center;
  box-shadow: 0px 0px 4px 2px var(--mainPurple);
  grid-area: logo;
  @media screen and (min-width: 768px) {
    padding: 20px;
    justify-self: start;
  }
`
export const Name = styled.h2`
  font-size: 32px;
  color: var(--mainPurple);
  
`
export const Artist = styled.h3`
  letter-spacing: 2pt;
  font-size: 22px;
`
export const QuantityButton = styled.button`
  width: 40px;
  font-size: 30px;
  border: none;
  background: var(--mainPurple);
  color: var(--mainWhite);
  cursor: pointer;
`
export const QuantityInput = styled.input`
  font-size: 24px;
  width: 40px;
  background: transparent;
  text-align: center;
  border: none;
  &[disabled] {
    color: var(--mainDark);
  }
  @media screen and (min-width: 768px) {
    font-size: 29px;
    width: 45px;
    margin-left: 10px;
  }
`
export const Text = styled.p`
  line-height: 120%;
  align-self: center;
  letter-spacing: 0.5pt;
`
export const CartButton = styled.button`
  width: 100%;
  border: none;
  font-weight: 600;
  background: var(--mainPurple);
  font-size: 22px;
  border-radius: 5px;
  color: var(--mainWhite);
  padding: 10px;
  grid-area: cartbutton;
  @media screen and (min-width: 480px) {
    width: 50%;
    justify-self: start;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    max-width: 60%;
    cursor: pointer;
  }
`
export const Price = styled.h3`
  font-size: 28px;
  color: var(--mainPurple);
  font-weight: 500;
`
export const DataField = styled.h6`
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`
