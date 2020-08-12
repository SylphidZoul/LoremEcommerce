import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Profile = () => {
  const { userData, logOut } = useContext(AuthContext)

  return (
    <div style={{ height: '700px', width: '100%', background: '#f9f9f9', paddingTop: '400px' }}>
      <h1>Perfil de {userData.name}</h1>
      <button onClick={logOut}>Desconectar</button>
    </div>
  )
}

export default Profile
