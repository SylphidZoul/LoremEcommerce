import React from 'react'
import PropTypes from 'prop-types'
import { Form } from '../Containers/FormContainer'
import { SocialButtonsContainer } from '../Containers/SocialButtonContainer'
import { Burger } from '../Components/Burger'
import { FormTitle } from '../StyledComponents/StyledForm'
import { LoginWrapper, Link, Error } from '../StyledComponents/StyledLogin'

export const LoginComponent = ({ closeModal, error, isFetching, currentPath, handleSocialButton }) => {
  return (
    <LoginWrapper>
      <Burger modal onClick={closeModal} />
      <FormTitle>
        Ingresa
      </FormTitle>
      {
        error &&
          <Error>
            {error}
          </Error>
      }
      <Form operation='login' isFetching={isFetching} />
      <Link to={{ pathname: '/signup', search: currentPath }}>
        ¿Aún no tienes cuenta?
      </Link>
      <SocialButtonsContainer loginStyle />
    </LoginWrapper>
  )
}
LoginComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  currentPath: PropTypes.string.isRequired
}
