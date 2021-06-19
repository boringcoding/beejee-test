import { ITask } from '../../models/ITask'
import { ActionType } from '../action-types'
import { TasksAction } from '../actions'

interface TasksState {
  tasks: ITask[]
  total: number
  loading: boolean
}

const initialState: TasksState = {
  tasks: [],
  total: 0,
  loading: true,
}

export const tasksReducer = (state = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case ActionType.FETCH_TASKS: {
      return { ...state, tasks: action.payload.tasks, total: action.payload.total }
    }
    case ActionType.SET_LOADING: {
      return { ...state, loading: action.payload }
    }
    default: {
      return state
    }
  }
}
