import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, Title, SubTitle, HeaderButton } from '../StyledComponents/StyledHeader'

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Title>Lorem ipsum dolor sit amet consectetur</Title>
        <SubTitle>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Rerum doloremque aut animi odit eligendi accusamus fugit eos recusandae impedit,
          voluptas placeat sit vitae porro autem, atque quis quas.
          Repellendus, modi ad incidunt deleniti similique molestiae eligendi perferendis porro odit!
        </SubTitle>
        <HeaderButton>
          <Link to='/products' style={{ color: 'inherit', textDecoration: 'none' }}>
            Ir a Nuestro Catálogo
          </Link>
        </HeaderButton>
      </HeaderWrapper>
    </>
  )
}
