import styled from 'styled-components'

export const Section = styled.section`
  background: linear-gradient(180deg, rgba(0,0,0,0) 0.1%, var(--${props => props.color}) 0.2%, var(--${props => props.color}) 99.9%, rgba(0,0,0,0) 100%);
`
export const Divider = styled.div`
  border-bottom: 8.74496644295vw solid transparent;
  border-left: 100vw solid ${props => `var(--${props.color})`};
  @media screen and (min-width: 1024px) {
    border-left-width: calc(100vw - 16px);
  }
`
export const Divider2 = styled.div`
  border-top: 8.74496644295vw solid transparent;
  border-right: 100vw solid ${props => `var(--${props.color})`};
  @media screen and (min-width: 1024px) {
    border-right-width: calc(100vw - 16px);
  }
`
