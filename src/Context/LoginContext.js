import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { useUserData } from '../Hooks/useUserData'
const LoginContext = createContext()
const { Provider } = LoginContext

const LoginContextProvider = (props) => {
  const [token, setToken] = useLocalStorage('token', '')
  const [isAuth, setIsAuth] = useState(() => token !== '')
  const { userData, setUserData } = useUserData(isAuth, token)
  const [error, setError] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const handleAuth = (user, operation) => {
    setIsFetching(true)
    const url = `http://localhost:3004/user/${operation}`
    const config = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }
    window.fetch(url, config)
      .then(res => res.json())
      .then((data) => {
        if (!data.error) {
          const userDB = data.body.user
          setUserData(userDB)
          setIsAuth(true)
          setToken(data.body.token)
          setError('')
          setIsFetching(false)
        } else {
          setError(data.body)
          setIsFetching(false)
        }
      })
  }

  const value = {
    isAuth,
    handleAuth,
    userData,
    error,
    isFetching,
    setError,
    setIsAuth
  }

  return (
    <Provider value={value}>
      {props.children}
    </Provider>
  )
}

export { LoginContextProvider, LoginContext }
