import { AuthAction } from '../actions'
import { ActionType } from '../action-types'

interface AuthState {
  isAuth: boolean
}

const initialState: AuthState = {
  isAuth: false,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case ActionType.LOGIN: {
      return { ...state, isAuth: true }
    }
    case ActionType.LOGOUT: {
      return { ...state, isAuth: false }
    }
    default: {
      return state
    }
  }
}
