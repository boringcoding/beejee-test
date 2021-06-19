import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { TasksPage } from './pages/TasksPage'
import { AddTaskPage } from './pages/AddTaskPage'
import { EditTaskPage } from './pages/EditTaskPage'
import { LoginPage } from './pages/LoginPage'
import { ActionType } from './store/action-types'
import { ProtectedRoute } from './components/ProtectedRoute'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch({
        type: ActionType.LOGIN,
      })
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={TasksPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/add" component={AddTaskPage} />
      <ProtectedRoute path="/edit/:id" render={() => <EditTaskPage />} />
    </Switch>
  )
}
