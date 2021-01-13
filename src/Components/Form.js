import React from 'react'
import { Form, Input, Button } from '../StyledComponents/StyledForm'
import { Spinner } from '../StyledComponents/StyledSpinner'
import PropTypes from 'prop-types'

export const FormComponent = ({ operation, handleSubmit, isFetching }) => {
  if (operation === 'login') {
    return (
      <Form onSubmit={handleSubmit} login>
        <Input placeholder='Ingrese su e-mail' autoComplete='off' id='email-input' type='email' />
        <Input placeholder='Ingrese su contraseña' autoComplete='off' id='password-input' type='password' />
        <Button type='submit' disabled={isFetching}>{isFetching ? <Spinner /> : 'Ingresar'}</Button>
      </Form>
    )
  } else {
    return (
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Ingrese su nombre' autoComplete='off' id='name-input' type='text' />
        <Input placeholder='Ingrese su e-mail' autoComplete='off' id='email-input' type='email' />
        <Input placeholder='Ingrese su contraseña' autoComplete='off' id='password-input' type='password' />
        <Input placeholder='Confirme su contraseña' autoComplete='off' id='password-input2' type='password' />
        <Button type='submit' disabled={isFetching}>{isFetching ? <Spinner /> : 'Registrarse'}</Button>
      </Form>
    )
  }
}
FormComponent.propTypes = {
  operation: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool
}
