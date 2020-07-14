import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper'
import { FormComponent as Form } from '../Components/Form'
import { FormTitle } from '../StyledComponents/StyledForm'
import { Background, SignupLayer, SignupForm } from '../StyledComponents/StyledSignup'
import { GoogleButton } from '../Components/GoogleButton'
import { FacebookButton } from '../Components/FacebookButton'

export const Register = () => {
  return (
    <ContentWrapper title='Registro' subtitle='Registrate para comprar los mejores discos.'>
      <Background>
        <SignupLayer>
          <SignupForm>
            <FormTitle>Registro</FormTitle>
            <Form operation='signup' />
            <GoogleButton />
            <FacebookButton />
          </SignupForm>
        </SignupLayer>
      </Background>
    </ContentWrapper>
  )
}
