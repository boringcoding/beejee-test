import { BaseResponse } from './BaseResponse'

interface AuthResponseMessage {
  token: string
}

type AuthResponseErrorMessage = {
  [key: string]: string
}

export interface AuthResponse extends BaseResponse<AuthResponseMessage> {}

export interface AuthResponseError extends BaseResponse<AuthResponseErrorMessage> {}
