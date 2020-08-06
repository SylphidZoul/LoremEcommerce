import React from 'react'
import PropTypes from 'prop-types'
import { ContentWrapper } from '../Components/ContentWrapper'
import { Form } from '../Containers/FormContainer'
import { FormTitle } from '../StyledComponents/StyledForm'
import { Background, SignupForm, Error } from '../StyledComponents/StyledSignup'
import { SocialButtonsContainer } from '../Containers/SocialButtonContainer'

export const SignupComponent = ({ error }) => {
  return (
    <ContentWrapper title='Registro' subtitle='Registrate para comprar los mejores discos.'>
      <Background>
        <SignupForm>
          <FormTitle>Registro</FormTitle>
          {error && <Error>{error}</Error>}
          <Form operation='signup' />
          <SocialButtonsContainer />
        </SignupForm>
      </Background>
    </ContentWrapper>
  )
}
SignupComponent.propTypes = {
  error: PropTypes.string
}
