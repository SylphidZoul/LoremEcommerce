import React, { useContext } from 'react'
import { Form, Label, Input, Button } from '../StyledComponents/StyledForm'
import { LoginContext } from '../Context/LoginContext'

export const FormComponent = ({ operation }) => {
  const { handleLogged, isFetching } = useContext(LoginContext)

  const handleLogin = (event) => {
    event.preventDefault()
    const user = { email: event.target[0].value, password: event.target[1].value }
    handleLogged(user)
  }

  if (operation === 'LogIn') {
    return (
      <Form onSubmit={handleLogin} login>
        <Label htmlFor='email-input'>E-mail:</Label>
        <Input placeholder='Ingrese su e-mail' id='email-input' type='email' />
        <Label htmlFor='password-input'>Contraseña:</Label>
        <Input placeholder='Ingrese su contraseña' id='password-input' type='password' />
        <Button type='submit'>{isFetching ? 'Cargando...' : 'Ingresar'}</Button>
      </Form>
    )
  } else {
    return (
      <Form>
        <Label htmlFor='name-input'>Nombre:</Label>
        <Input placeholder='Ingrese su nombre' id='name-input' type='text' />
        <Label htmlFor='email-input'>E-mail:</Label>
        <Input placeholder='Ingrese su e-mail' id='email-input' type='email' />
        <Label htmlFor='password-input'>Contraseña:</Label>
        <Input placeholder='Ingrese su contraseña' id='password-input' type='password' />
        <Label htmlFor='password-input2'>Contraseña:</Label>
        <Input placeholder='Confirme su contraseña' id='password-input2' type='password' />
        <Button type='submit'>{isFetching ? 'Cargando...' : 'Registrarse'}</Button>
      </Form>
    )
  }
}
