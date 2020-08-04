import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { SocialMediaButton } from '../StyledComponents/SocialMediaButton'
import { FaFacebookF } from 'react-icons/fa'

export const FacebookButton = ({ login, handleSocialButton, keys }) => {
  return (
    <FacebookLogin
      appId={keys}
      fields='name,email,picture'
      callback={(response) => handleSocialButton(response, 'facebook')}
      render={renderProps => (
        <SocialMediaButton onClick={renderProps.onClick} login={login}>
          <FaFacebookF />
          &nbsp;Ingresa con Facebook
        </SocialMediaButton>
      )}
    />
  )
}
