import React, { useContext } from 'react'
import { NavBackground } from '../StyledComponents/StyledNavBackground'
import { SectionComponent } from '../Components/SectionComponent'
import Guitar from '../Components/Guitar'
import { AuthContext } from '../Context/AuthContext'

const Profile = () => {
  const { userData, logOut } = useContext(AuthContext)

  return (
    <>
      <NavBackground>
        <Guitar />
      </NavBackground>
      <SectionComponent colorTop='mainDark' color='mainLavander'>
        <div style={{ height: '700px', width: '100%', background: '#f9f9f9', paddingTop: '400px' }}>
          <h1>Perfil de {userData.name}</h1>
          <button onClick={logOut}>Desconectar</button>
        </div>
      </SectionComponent>
    </>
  )
}

export default Profile
