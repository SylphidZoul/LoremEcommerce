import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext } from '../Context/AuthContext'
import { LoginComponent } from '../Pages/Login'

const Login = ({ location, history }) => {
  const { error, isFetching, isAuth, handleAuth } = useContext(AuthContext)

  const closeModal = () => {
    history.push(location.pathname)
  }

  const handleSocialButton = (token, socialNet) => {
    const user = {
      token
    }
    handleAuth(user, socialNet)
  }

  useEffect(() => {
    isAuth && closeModal()
    // eslint-disable-next-line
  }, [isAuth])

  return (
    location.search === '?login' && (
      ReactDOM.createPortal(
        <LoginComponent
          closeModal={closeModal}
          error={error}
          isFetching={isFetching}
          currentPath={location.pathname}
          handleSocialButton={handleSocialButton}
        />,
        document.getElementById('login')
      )
    )
  )
}
export default Login
