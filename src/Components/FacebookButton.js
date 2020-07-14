import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { SocialMediaButton } from '../StyledComponents/SocialMediaButton'
import { FaFacebookF } from 'react-icons/fa'

export const FacebookButton = ({ login }) => {
  const responseFacebook = (response) => {
    console.log(response)
  }

  return (
    <FacebookLogin
      appId='1698932393605899'
      fields='name,email,picture'
      callback={responseFacebook}
      render={renderProps => (
        <SocialMediaButton onClick={renderProps.onClick} login={login}>
          <FaFacebookF />
          &nbsp;Ingresa con Facebook
        </SocialMediaButton>
      )}
    />
  )
}
