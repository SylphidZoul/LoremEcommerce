import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoutes'
import { LoadingPage } from '../StyledComponents/StyledSpinner'

const Home = lazy(() => import('../Pages/Home'))
const Login = lazy(() => import('../Containers/LoginContainer'))
const Signup = lazy(() => import('../Containers/SignupContainer'))
const Products = lazy(() => import('../Pages/Products'))
const About = lazy(() => import('../Pages/About'))
const Cart = lazy(() => import('../Pages/Cart'))
const Profile = lazy(() => import('../Pages/Profile'))

export const Routes = () => {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Route path='/' component={Login} />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={Signup} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={About} />
          <PrivateRoute path='/cart' Component={Cart} />
          <PrivateRoute path='/profile' Component={Profile} />
        </Switch>
      </Suspense>
    </>
  )
}
