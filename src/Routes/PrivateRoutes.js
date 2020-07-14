import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'

function PrivateRoute ({ children, ...rest }) {
  const { isAuth } = useContext(LoginContext)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const Data = {
          pathname: (location.state ? location.state.from : '/'),
          search: '?login'
        }
        return (
          isAuth ? (children) : (<Redirect to={Data} />)
        )
      }}
    />
  )
}
export default PrivateRoute
