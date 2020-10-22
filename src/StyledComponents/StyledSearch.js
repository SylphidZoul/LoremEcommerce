import styled from 'styled-components'

export const SearchForm = styled.form`
  width: 100%;
  display: grid;
  grid-template: 35px 25px 32px / repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-template-areas: "searchbox searchbox" "fieldTitle sortTitle" "field sort";
  justify-items: center;
  padding: 0 0 20px;
`

export const SearchBar = styled.div`
  position: relative;
  grid-area: searchbox;
  width: 90%;
  background: var(--mainWhite);
  border-radius: 5px;
  padding: 0px 15px;
  border: 2px solid var(--mainPurple);
  @media screen and (min-width: 480px) {
    width: 75%;
  }
`

export const SearchBox = styled.input`
  width: 80%;
  height: 28px;
  font-size: 20px;
  border: none;
  outline: none;
  background: var(--mainWhite);
`

export const SearchButton = styled.button`
  position: absolute;
  top: -1px;
  right: -1px;
  height: 34px;
  width: 58px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: var(--mainPurple);
  color: var(--mainSilver);
  outline: none;
  cursor: pointer;
`
export const SearchLabel = styled.label`
  font-size: 18px;
  color: var(--mainPurple);
  grid-area: ${props => props.Type};
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchSelect = styled.select`
  width: 90%;
  max-width: 250px;
  padding: 0 5px;
  grid-area: ${props => props.Type};
  border: 2px solid var(--mainPurple);
  border-radius: 5px;
  background: var(--mainWhite);
  outline: none;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
