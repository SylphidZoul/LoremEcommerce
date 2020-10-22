import React from 'react'
import { Logo } from '../Assets/Logo'
import { FooterWrapper, BrandDiv, Text, NetworksUl } from '../StyledComponents/StyledFooter'
import AiFillLinkedin from '@meronex/icons/ai/AiFillLinkedin'
import AiFillFacebook from '@meronex/icons/ai/AiFillFacebook'
import AiFillInstagram from '@meronex/icons/ai/AiFillInstagram'
import AiFillTwitterSquare from '@meronex/icons/ai/AiFillTwitterSquare'

export const Footer = () => {
  return (
    <FooterWrapper>
      <BrandDiv>
        <Logo />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos libero deleniti quia magni sapiente.
          Ratione repudiandae enim omnis.
        </Text>
        <NetworksUl>
          <li>
            <a href='#'>
              <AiFillFacebook size='24px' />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiFillInstagram size='24px' />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiFillTwitterSquare size='24px' />
            </a>
          </li>
          <li>
            <a href='#'>
              <AiFillLinkedin size='24px' />
            </a>
          </li>
        </NetworksUl>
      </BrandDiv>
      <BrandDiv>
        <p>asdasdasdasgdsf</p>
        <p>asd sd asdsadas dasdqw das</p>
        <p> asdasfas fqw fsafd asdasdasdasd</p>
      </BrandDiv>
      <p>© 2020 Lorem</p>
      <NetworksUl end>
        <a href='#'>
          Terminos de uso
        </a>
        <a href='#'>
          Politica de privacidad
        </a>
        <a href='#'>
          Politica de cookie
        </a>
      </NetworksUl>
    </FooterWrapper>
  )
}
