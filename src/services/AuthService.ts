import { api } from '../http'
import { AxiosPromise } from 'axios'
import {AuthResponse, AuthResponseError} from '../models/response/AuthResponse'
import { LoginInput } from '../models/inputs/LoginInput'

export class AuthService {
  static async login(loginInput: LoginInput): Promise<AxiosPromise<AuthResponse | AuthResponseError>> {
    const formData = new FormData()

    formData.append('username', loginInput.username)
    formData.append('password', loginInput.password)

    return api.post(`/login`, formData)
  }
}
