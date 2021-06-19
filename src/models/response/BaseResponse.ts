import { ResponseStatus } from '../ResponseStatus'

export interface BaseResponse<T> {
  status: ResponseStatus
  message: T
}
