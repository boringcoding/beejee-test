import { Dispatch } from 'redux'
import { AppAction, AuthAction, TasksAction } from './actions'
import { ActionType } from './action-types'
import { SortField } from '../models/SortField'
import { SortDirection } from '../models/SortDirection'
import { FetchTasksInput } from '../models/inputs/FetchTasksInput'
import { TasksService } from '../services/TasksService'
import { CreateTaskInput } from '../models/inputs/CreateTaskInput'
import { UpdateTaskInput } from '../models/inputs/UpdateTaskInput'
import { AuthService } from '../services/AuthService'
import { LoginInput } from '../models/inputs/LoginInput'
import { ApiError, ErrorMessage } from '../models/ApiError'
import { messagesTimeout } from '../config'
import { CreateMessageInput } from '../models/inputs/CreateMessageInput'
import { randomString } from '../util/randomString'

export const handleApiError = (message: string, data: ErrorMessage) => {
  throw new ApiError(message, data)
}

export const login = (loginInput: LoginInput, successRedirect: () => void) => async (
  dispatch: Dispatch<AuthAction | any>
) => {
  try {
    const { data } = await AuthService.login(loginInput)

    if (data.status === 'error') {
      handleApiError('There is an error!', data.message as ErrorMessage)
    }

    localStorage.setItem('token', data.message.token)

    dispatch({
      type: ActionType.LOGIN,
    })

    successRedirect()
  } catch (err) {
    if (err.data) {
      Object.keys(err.data).forEach((key) => {
        dispatch(addMessage({ text: `${key}: ${err.data[key]}`, type: 'error' }))
      })
    }
  }
}

export const logout = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    localStorage.removeItem('token')
    dispatch({
      type: ActionType.LOGOUT,
    })
  }
}

export const addMessage = (createMessageInput: CreateMessageInput) => {
  return (dispatch: Dispatch<AppAction | any>) => {
    const id = randomString()

    dispatch({
      type: ActionType.ADD_MESSAGE,
      payload: {
        id,
        ...createMessageInput,
      },
    })

    setTimeout(() => {
      dispatch(removeMessage(id))
    }, messagesTimeout)
  }
}

export const removeMessage = (id: string) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: ActionType.REMOVE_MESSAGE,
      payload: id,
    })
  }
}

export const fetchTasks = (fetchTasksInput: FetchTasksInput) => async (
  dispatch: Dispatch<TasksAction | any>
) => {
  dispatch(setLoading(true))
  try {
    const { data } = await TasksService.fetchTasks(fetchTasksInput)

    dispatch({
      type: ActionType.FETCH_TASKS,
      payload: {
        tasks: data.message.tasks,
        total: data.message.total_task_count,
      },
    })
  } catch (err) {
    console.log(err)
  } finally {
		dispatch(setLoading(false))
	}
}

export const setLoading = (loading: boolean) => (dispatch: Dispatch<TasksAction>) => {
  dispatch({
    type: ActionType.SET_LOADING,
    payload: loading,
  })
}

export const createTask = (createTaskInput: CreateTaskInput, successRedirect: () => void) => async (
  dispatch: Dispatch<TasksAction | any>
) => {
  try {
    const { data: createdData } = await TasksService.createTask(createTaskInput)
    const { data } = await TasksService.fetchTasks({
      sortField: 'id',
      sortDirection: 'asc',
      page: 1,
    })

    if (createdData.status === 'error') {
      handleApiError('There is an error!', createdData.message as ErrorMessage)
    }

    dispatch({
      type: ActionType.FETCH_TASKS,
      payload: {
        tasks: data.message.tasks,
        total: data.message.total_task_count,
      },
    })
    dispatch(addMessage({ text: 'The task has been added.', type: 'info' }))
    successRedirect()
  } catch (err) {
    if (err.data) {
      Object.keys(err.data).forEach((key) => {
        dispatch(addMessage({ text: `${key}: ${err.data[key]}`, type: 'error' }))
      })
    }
  }
}

export const updateTask = (updateTaskInput: UpdateTaskInput, successRedirect: () => void) => async (
  dispatch: Dispatch<AuthAction>
) => {
  try {
    await TasksService.updateTask(updateTaskInput)
    successRedirect()
  } catch (err) {
    if (err.data.token === 'invalid') {
      dispatch({
        type: ActionType.LOGOUT,
      })
    }
  }
}

export const updatePage = (page: number) => (dispatch: Dispatch<AppAction>) => {
  dispatch({
    type: ActionType.UPDATE_PAGE,
    payload: page,
  })
}

export const updateSortingField = (field: SortField) => (dispatch: Dispatch<AppAction>) => {
  dispatch({
    type: ActionType.UPDATE_SORT_FIELD,
    payload: field,
  })
}

export const updateSortingDirection = (direction: SortDirection) => (
  dispatch: Dispatch<AppAction>
) => {
  dispatch({
    type: ActionType.UPDATE_SORT_DIRECTION,
    payload: direction,
  })
}
