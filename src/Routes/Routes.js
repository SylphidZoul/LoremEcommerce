import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Pages/Home'
import PrivateRoute from './PrivateRoutes'
import { Cart } from '../Pages/Cart'
import { Login } from '../Containers/LoginContainer'
import Profile from '../Pages/Profile'
import { SignupContainer } from '../Containers/SignupContainer'

export const Routes = () => {
  return (
    <>
      <Route component={Home} path='/' exact />
      <Route component={SignupContainer} path='/signup' />
      <Route component={Login} path='/' />
      <PrivateRoute path='/cart'>
        <Cart />
      </PrivateRoute>
      <PrivateRoute path='/profile'>
        <Profile />
      </PrivateRoute>
    </>
  )
}
