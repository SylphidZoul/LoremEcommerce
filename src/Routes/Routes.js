import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Header'
import PrivateRoute from './PrivateRoutes'
import { ProductsList } from '../Pages/Products'
import { Cart } from '../Pages/Cart'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import { Register } from '../Pages/Signup'

export const Routes = () => {
  return (
    <>
      <Route component={Header} path='/' exact />
      <Route component={ProductsList} path='/products' />
      <Route component={Register} path='/signup' />
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
