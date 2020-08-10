import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { SocialMediaButton } from '../StyledComponents/SocialMediaButton'
import FaGoogle from '@meronex/icons/fa/FaGoogle'
import PropTypes from 'prop-types'

export const GoogleButton = ({ loginStyle, handleSocialButton, keys }) => {
  return (
    <GoogleLogin
      clientId={keys}
      onSuccess={(response) => handleSocialButton(response.tokenId, 'google')}
      onFailure={(error) => console.log(error)}
      cookiePolicy='single_host_origin'
      render={renderProps => (
        <SocialMediaButton {... renderProps} google login={loginStyle}>
          <FaGoogle />
          &nbsp;Ingresa con Google
        </SocialMediaButton>
      )}
    />
  )
}
GoogleButton.propTypes = {
  loginStyle: PropTypes.bool,
  handleSocialButton: PropTypes.func.isRequired,
  keys: PropTypes.string.isRequired
}
