import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../Context/LoginContext'
import { SignupComponent } from '../Pages/Signup'

const SignupContainer = ({ history, location }) => {
  const { error, isAuth } = useContext(LoginContext)

  useEffect(() => {
    if (isAuth) {
      (location.search && location.search !== '?login') ? history.push(location.search.slice(1)) : history.push('/')
    }
  })

  return <SignupComponent error={error} />
}

export default SignupContainer
