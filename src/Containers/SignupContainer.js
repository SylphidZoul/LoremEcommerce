import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../Context/LoginContext'
import { SignupComponent } from '../Pages/Signup'

export const SignupContainer = (props) => {
  const [redirect, setRedirect] = useState('')
  const { error, isAuth } = useContext(LoginContext)

  useEffect(() => {
    if (isAuth) {
      setRedirect(props.location.search.slice(1))
      props.history.push(redirect)
    }
  })

  return <SignupComponent error={error} />
}
