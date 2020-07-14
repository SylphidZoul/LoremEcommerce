import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'
import { GoogleLogin } from 'react-google-login'
import { SocialMediaButton, Icon } from '../StyledComponents/SocialMediaButton'
import { FaGoogle } from 'react-icons/fa'

const CLIENT_ID = '718229612647-hbf5fgptmnh84vdfhc90pnrcpk05li46.apps.googleusercontent.com'

export const GoogleButton = ({ login }) => {
  const { isFetching } = useContext(LoginContext)

  const handleLogged = (data) => {
    console.log(data)
  }

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      onSuccess={(response) => handleLogged(response.profileObj)}
      onFailure={(error) => handleLogged(error)}
      cookiePolicy='single_host_origin'
      render={renderProps => (
        <SocialMediaButton {... renderProps} google login={login}>
          <FaGoogle />
          &nbsp;Ingresa con Google
        </SocialMediaButton>
      )}
    />
  )
}
