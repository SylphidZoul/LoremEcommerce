import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { FadeIn } from './Animations'

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(auto, 340px);
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
  }
  @media screen and (min-width: 768px){
    grid-auto-rows: minmax(auto, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 50px;
    padding: 0 0 40px;
  }
`
export const Card = styled.article`
  position: relative;
  width: 75%;
  max-width: 240px;
  min-height: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background: #EEE; */
  /* box-shadow: 0px 0px 5px 1px rgba(var(--rgbPurple),0.6); */
  transition: all 300ms ease;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 2px solid rgba(var(--rgbPurple), 0.4);
  padding-bottom: 20px;
  &:hover img{
      transform: scale(1.05);
      /* box-shadow: 0px 0px 7px 2px rgba(var(--rgbPurple),0.6); */
  }
`
export const CardText = styled.p`
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  color: black;
  @media screen and (min-width: 768px){
      font-size: 0.9em;
  }
`
export const Price = styled.h3`
  font-weight: 500;
  color: var(--mainPurple);
  font-size: 1.2em;
  letter-spacing: 1pt;
  align-self: flex-start;
  margin: 10px 0 5px 10px;
  @media screen and (min-width: 768px){
    margin: 15px 0 10px 15px;
  }
`
export const AlbumCover = styled.img`
  min-height: 240px;
  animation: ${FadeIn} 2000ms ease-out forwards;
  transition: all 300ms ease-out;
`
export const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: 60px;
  background: transparent;
  color: var(--mainPurple);
  border: none;
  @media screen and (min-width: 768px) {
    /* position: relative;
    align-self: flex-end; */
    bottom: 60px;
    cursor: pointer;
    &:hover {
      background: var(--mainPurple);
      color: var(--mainSilver);
    }
  }
`
export const Link = styled(RouterLink)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`
