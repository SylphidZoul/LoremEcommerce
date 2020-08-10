import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'

const Profile = () => {
  const { userData, setIsAuth } = useContext(LoginContext)

  const logOut = () => {
    window.localStorage.removeItem('token')
    setIsAuth(false)
  }

  return (
    <div style={{ height: '700px', width: '100%', background: '#f9f9f9', paddingTop: '400px' }}>
      <h1>Perfil de {userData.name}</h1>
      <button onClick={logOut}>Desconectar</button>
    </div>
  )
}

export default Profile
