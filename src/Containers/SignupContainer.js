import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { SignupComponent } from '../Pages/Signup'

const SignupContainer = ({ history, location }) => {
  const { error, isAuth } = useContext(AuthContext)

  useEffect(() => {
    if (isAuth) {
      (location.search && location.search !== '?login')
        ? history.push(location.search.slice(1))
        : history.push('/')
    }
  })

  return <SignupComponent error={error} />
}

export default SignupContainer
