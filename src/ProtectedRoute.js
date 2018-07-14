import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (
    rest.auth.isAuthenticated() === true
      ? <Component {...props}{...rest} />
      : <Redirect to={{
          pathname:'/home',
          state: { from: props.location}
          }} />
  )}} />
)


export default ProtectedRoute