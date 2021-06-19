import { ActionType } from './action-types'
import { ITask } from '../models/ITask'
import { SortField } from '../models/SortField'
import { SortDirection } from '../models/SortDirection'
import { Message } from '../models/Message'

interface LoginAction {
  type: ActionType.LOGIN
}

interface LogoutAction {
  type: ActionType.LOGOUT
}

interface FetchTasksAction {
  type: ActionType.FETCH_TASKS
  payload: {
    tasks: ITask[]
    total: number
  }
}

interface LoadingAction {
  type: ActionType.SET_LOADING
  payload: boolean
}

interface UpdateSortFieldAction {
  type: ActionType.UPDATE_SORT_FIELD
  payload: SortField
}

interface UpdateSortDirectionAction {
  type: ActionType.UPDATE_SORT_DIRECTION
  payload: SortDirection
}

interface UpdatePageAction {
  type: ActionType.UPDATE_PAGE
  payload: number
}

export interface AddMessage {
  type: ActionType.ADD_MESSAGE
  payload: Message
}

interface RemoveMessage {
  type: ActionType.REMOVE_MESSAGE
  payload: string
}

export type AuthAction = LoginAction | LogoutAction
export type TasksAction = FetchTasksAction | LoadingAction
export type AppAction =
  | UpdateSortFieldAction
  | UpdateSortDirectionAction
  | UpdatePageAction
  | AddMessage
  | RemoveMessage
