import React, { createContext, useState } from 'react'

const LoginContext = createContext()
const { Provider } = LoginContext

const LoginContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState('')
  const [error, setError] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

  const handleAuth = async (user) => {
    setIsFetching(true)
    const userRequest = `email=${user.email}`
    const Response = await window.fetch('http://localhost:4000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: userRequest
    })
    const userDB = await Response.json()

    if (userDB.ok) {
      setUser(userDB.user.nombre)
      setIsAuth(true)
    } else {
      setError('Datos Incorrectos.')
    }
    setIsFetching(false)
  }

  const handleModal = () => setLoginModal(!loginModal)

  const value = {
    isAuth,
    handleAuth,
    user,
    error,
    isFetching,
    loginModal,
    handleModal
  }

  return (
    <Provider value={value}>
      {props.children}
    </Provider>
  )
}

export { LoginContextProvider, LoginContext }
