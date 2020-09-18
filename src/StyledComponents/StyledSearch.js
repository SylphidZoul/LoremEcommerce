import styled from 'styled-components'

export const SearchForm = styled.form`
  width: 100%;
  display: grid;
  grid-template: 46px 20px 32px / repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-template-areas: "searchbox searchbox" "fieldTitle sortTitle" "field sort";
  padding: 25px 0;
  background: var(--mainDark);
  z-index: 10;
  background-image: linear-gradient(225deg, rgba(50, 50, 50, 0.01) 0%, rgba(50, 50, 50, 0.01) 14.286%,rgba(236, 236, 236, 0.01) 14.286%, rgba(236, 236, 236, 0.01) 28.572%,rgba(108, 108, 108, 0.01) 28.572%, rgba(108, 108, 108, 0.01) 42.858%,rgba(160, 160, 160, 0.01) 42.858%, rgba(160, 160, 160, 0.01) 57.144%,rgba(105, 105, 105, 0.01) 57.144%, rgba(105, 105, 105, 0.01) 71.42999999999999%,rgba(151, 151, 151, 0.01) 71.43%, rgba(151, 151, 151, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(315deg, rgba(183, 183, 183, 0.1) 0%, rgba(183, 183, 183, 0.1) 20%,rgba(112, 112, 112, 0.1) 20%, rgba(112, 112, 112, 0.1) 40%,rgba(6, 6, 6, 0.1) 40%, rgba(6, 6, 6, 0.1) 60%,rgba(36, 36, 36, 0.1) 60%, rgba(36, 36, 36, 0.1) 80%,rgba(78, 78, 78, 0.1) 80%, rgba(78, 78, 78, 0.1) 100%),linear-gradient(180deg, rgba(69, 69, 69, 0.03) 0%, rgba(69, 69, 69, 0.03) 12.5%,rgba(248, 248, 248, 0.03) 12.5%, rgba(248, 248, 248, 0.03) 25%,rgba(9, 9, 9, 0.03) 25%, rgba(9, 9, 9, 0.03) 37.5%,rgba(170, 170, 170, 0.03) 37.5%, rgba(170, 170, 170, 0.03) 50%,rgba(171, 171, 171, 0.03) 50%, rgba(171, 171, 171, 0.03) 62.5%,rgba(42, 42, 42, 0.03) 62.5%, rgba(42, 42, 42, 0.03) 75%,rgba(182, 182, 182, 0.03) 75%, rgba(182, 182, 182, 0.03) 87.5%,rgba(169, 169, 169, 0.03) 87.5%, rgba(169, 169, 169, 0.03) 100%),linear-gradient(180deg, rgba(133, 133, 133, 0.09) 0%, rgba(133, 133, 133, 0.09) 16.667%,rgba(114, 114, 114, 0.09) 16.667%, rgba(114, 114, 114, 0.09) 33.334%,rgba(80, 80, 80, 0.09) 33.334%, rgba(80, 80, 80, 0.09) 50.001000000000005%,rgba(212, 212, 212, 0.09) 50.001%, rgba(212, 212, 212, 0.09) 66.668%,rgba(9, 9, 9, 0.09) 66.668%, rgba(9, 9, 9, 0.09) 83.33500000000001%,rgba(173, 173, 173, 0.09) 83.335%, rgba(173, 173, 173, 0.09) 100.002%),linear-gradient(270deg, rgb(88,63,217),rgb(63,3,119));
  box-shadow: 0px 0px 7px 2px rgba(var(--rgbViolet),0.6);
`

export const SearchBar = styled.div`
  position: relative;
  grid-area: searchbox;
  width: 90%;
  justify-self: center;
  background: #fff;
  border-radius: 500px;
  padding: 5px 15px;
  border: 2px solid var(--mainPurple);
  @media screen and (min-width: 480px) {
    width: 50%;
  }
`

export const SearchBox = styled.input`
  width: 80%;
  height: 28px;
  font-size: 20px;
  border: none;
  outline: none;
  background: #fff;
`

export const SearchButton = styled.button`
  position: absolute;
  top: -1px;
  right: -1px;
  height: 43px;
  width: 58px;
  border-radius: 500px;
  outline: none;
  border: none;
  background: var(--mainPurple);
  color: var(--mainWhite);
  outline: none;
  cursor: pointer;
`
export const SearchLabel = styled.label`
  font-size: 20px;
  color: var(--mainWhite);
  grid-area: ${props => props.Type};
  justify-self: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    justify-self: ${props => props.Type === 'fieldTitle' ? 'end' : 'start'};
  }
`
export const SearchSelect = styled.select`
  width: 100%;
  max-width: 250px;
  padding: 0 5px;
  grid-area: ${props => props.Type};
  border: 2px solid var(--mainPurple);
  border-radius: 500px;
  background: #fff;
  outline: none;
  justify-self: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    justify-self: ${props => props.Type === 'field' ? 'end' : 'start'};
  }
`
