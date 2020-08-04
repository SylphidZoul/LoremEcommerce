import React from 'react'
import { Form, Label, Input, Button } from '../StyledComponents/StyledForm'
import { Spinner } from '../StyledComponents/StyledSpinner'

export const FormComponent = ({ operation, handleSubmit, isFetching }) => {
  if (operation === 'login') {
    return (
      <Form onSubmit={handleSubmit} login>
        <Label htmlFor='email-input'>E-mail:</Label>
        <Input placeholder='Ingrese su e-mail' id='email-input' type='email' />
        <Label htmlFor='password-input'>Contraseña:</Label>
        <Input placeholder='Ingrese su contraseña' id='password-input' type='password' />
        <Button type='submit'>{isFetching ? <Spinner /> : 'Ingresar'}</Button>
      </Form>
    )
  } else {
    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor='name-input'>Nombre:</Label>
        <Input placeholder='Ingrese su nombre' id='name-input' type='text' />
        <Label htmlFor='email-input'>E-mail:</Label>
        <Input placeholder='Ingrese su e-mail' id='email-input' type='email' />
        <Label htmlFor='password-input'>Contraseña:</Label>
        <Input placeholder='Ingrese su contraseña' id='password-input' type='password' />
        <Label htmlFor='password-input2'>Contraseña:</Label>
        <Input placeholder='Confirme su contraseña' id='password-input2' type='password' />
        <Button type='submit'>{isFetching ? <Spinner /> : 'Registrarse'}</Button>
      </Form>
    )
  }
}
