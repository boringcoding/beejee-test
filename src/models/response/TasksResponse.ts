import { BaseResponse } from './BaseResponse'
import { ITask } from '../ITask'

export interface TasksResponseMessageSuccess {
  tasks: ITask[]
  total_task_count: number
}

export type TasksResponseErrorMessage = {
  [key: string]: string
}

export interface TasksResponse extends BaseResponse<TasksResponseMessageSuccess> {}
export interface TasksResponseError extends BaseResponse<TasksResponseErrorMessage> {}
