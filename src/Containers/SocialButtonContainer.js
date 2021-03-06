import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { GoogleButton } from '../Components/GoogleButton'
import { FacebookButton } from '../Components/FacebookButton'
import { Spinner } from '../StyledComponents/StyledSpinner'

export const SocialButtonsContainer = ({ loginStyle }) => {
  const [facebookId, setFacebookId] = useState('')
  const [googleId, setGoogleId] = useState('')
  const { handleAuth } = useContext(AuthContext)

  const handleSocialButton = (token, socialNet) => {
    const user = { token }
    handleAuth(user, socialNet)
  }

  useEffect(() => {
    window.fetch('https://lorem-backend.herokuapp.com/keys')
      .then((response) => response.json())
      .then((res) => {
        setFacebookId(res.body.facebook)
        setGoogleId(res.body.google)
      })
      .catch((e) => console.log(e))
  }, [])

  if (!facebookId || !googleId) {
    return (
      <Spinner />
    )
  }

  return (
    <>
      <GoogleButton
        loginStyle={loginStyle}
        handleSocialButton={handleSocialButton}
        keys={googleId}
      />
      <FacebookButton
        loginStyle={loginStyle}
        handleSocialButton={handleSocialButton}
        keys={facebookId}
      />
    </>
  )
}
