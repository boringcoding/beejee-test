import { AxiosPromise } from 'axios'
import { api } from '../http'
import { TasksResponse, TasksResponseError } from '../models/response/TasksResponse'
import { FetchTasksInput } from '../models/inputs/FetchTasksInput'
import { CreateTaskInput } from '../models/inputs/CreateTaskInput'
import { TaskResponse } from '../models/response/TaskResponse'
import { UpdateTaskInput } from '../models/inputs/UpdateTaskInput'
import { StatusResponse } from '../models/response/StatusResponse'

export class TasksService {
  static async fetchTasks(
    fetchTasksInput: FetchTasksInput
  ): Promise<AxiosPromise<TasksResponse>> {
    return api.get('/', {
      params: {
        sort_field: fetchTasksInput.sortField,
        sort_direction: fetchTasksInput.sortDirection,
        page: fetchTasksInput.page,
      },
    })
  }

  static async createTask(createTaskInput: CreateTaskInput): Promise<AxiosPromise<TaskResponse | TasksResponseError>> {
    const formData = new FormData()

    formData.append('username', createTaskInput.username)
    formData.append('email', createTaskInput.email)
    formData.append('text', createTaskInput.text)

    return api.post('/create', formData)
  }

  static async updateTask(updateTaskInput: UpdateTaskInput): Promise<AxiosPromise<StatusResponse>> {
    const formData = new FormData()

    formData.append('status', String(updateTaskInput.status))
    formData.append('text', updateTaskInput.text)

    return api.post(`/edit/${updateTaskInput.id}`, formData)
  }
}
