import { combineReducers } from 'redux'
import { authReducer } from './auth-reducer'
import { tasksReducer } from './tasks-reducer'
import { appReducer } from './app-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  tasks: tasksReducer,
})

export type State = ReturnType<typeof rootReducer>
