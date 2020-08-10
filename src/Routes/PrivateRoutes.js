import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'

export const PrivateRoute = ({ Component, ...rest }) => {
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
          isAuth ? (<Component />) : (<Redirect to={Data} />)
        )
      }}
    />
  )
}
