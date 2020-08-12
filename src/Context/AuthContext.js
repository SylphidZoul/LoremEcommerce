import React, { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { useUserData } from '../Hooks/useUserData'

const AuthContext = createContext()
const { Provider } = AuthContext

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', '')
  const [isAuth, setIsAuth] = useState(() => token !== '')
  const [userData, setUserData] = useUserData(isAuth, token)
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
        } else {
          setError(data.body)
        }
        setIsFetching(false)
      })
      .catch((e) => {
        setError('Error Interno')
      })
  }

  const logOut = () => {
    window.localStorage.removeItem('token')
    setIsAuth(false)
  }

  useEffect(() => {
    setTimeout(() => setError(''), 5000)
  }, [error])

  const value = {
    isAuth,
    handleAuth,
    logOut,
    userData,
    error,
    isFetching,
    setError
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export { AuthContextProvider, AuthContext }
