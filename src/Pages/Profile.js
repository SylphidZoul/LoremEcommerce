import React, { useContext } from 'react'
import { ContentWrapper } from '../Components/ContentWrapper'
import { SectionComponent } from '../Components/SectionComponent'
import { AuthContext } from '../Context/AuthContext'

const Profile = () => {
  const { userData, logOut } = useContext(AuthContext)

  return (
    <ContentWrapper
      title={userData.name}
      subtitle='Perfil de usuario'
      background
    >
      <SectionComponent color='mainLavander'>
        <div style={{ height: '700px', width: '100%' }}>
          <h1 style={{ color: 'var(--mainDark)', fontSize: '40px' }}>
            Perfil de {userData.name}
          </h1>
          <button onClick={logOut}>
            Desconectar
          </button>
        </div>
      </SectionComponent>
    </ContentWrapper>
  )
}

export default Profile
