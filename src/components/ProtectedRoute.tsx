import React, { FC, ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../store'

type ProtectedRouteProps = {
  path: string
  render(): ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ path, render }) => {
  const authState = useSelector((state: State) => state.auth)

  if (authState.isAuth) {
    return <Route path={path} render={render} />
  } else {
    return <Redirect to="/login" />
  }
}
