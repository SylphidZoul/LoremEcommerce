import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'

const Profile = () => {
  const { user } = useContext(LoginContext)

  return (
    <div style={{ height: '700px', width: '100%', background: '#f9f9f9' }}>
      <h1>Perfil de {user}</h1>
    </div>
  )
}

export default Profile
