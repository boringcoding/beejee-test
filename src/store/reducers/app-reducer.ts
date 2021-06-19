import { AppAction } from '../actions'
import { ActionType } from '../action-types'
import { SortField } from '../../models/SortField'
import { SortDirection } from '../../models/SortDirection'
import { Message } from '../../models/Message'

interface AppState {
  sortField: SortField
  sortDirection: SortDirection
  page: number
  messages: Message[]
}

const initialState: AppState = {
  sortField: 'id',
  sortDirection: 'asc',
  page: 1,
  messages: [],
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.UPDATE_SORT_FIELD: {
      return { ...state, sortField: action.payload }
    }
    case ActionType.UPDATE_SORT_DIRECTION: {
      return { ...state, sortDirection: action.payload }
    }
    case ActionType.UPDATE_PAGE: {
      return { ...state, page: action.payload }
    }
    case ActionType.ADD_MESSAGE: {
      return { ...state, messages: [...state.messages, action.payload] }
    }
    case ActionType.REMOVE_MESSAGE: {
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload),
      }
    }
    default: {
      return state
    }
  }
}
