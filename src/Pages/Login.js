import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { FormComponent as Form } from '../Components/Form'
import { LoginContext } from '../Context/LoginContext'
import { Burger } from '../Components/Burger'
import { GoogleButton } from '../Components/GoogleButton'
import { FormTitle } from '../StyledComponents/StyledForm'
import { LoginWrapper, Link, Error } from '../StyledComponents/StyledLogin'
import { FacebookButton } from '../Components/FacebookButton'

const Login = (props) => {
  const { error, isFetching } = useContext(LoginContext)

  const closeModal = () => {
    props.history.push(props.location.pathname)
  }

  return props.location.search === '?login' && (ReactDOM.createPortal((
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
      <Form operation='LogIn' isFetching={isFetching} />
      <Link to='/signup'>
        ¿Aún no tienes cuenta?
      </Link>
      <GoogleButton login />
      <FacebookButton login />
    </LoginWrapper>
  ), document.getElementById('login'))
  )
}

export default Login
