import axios from 'axios'
import { API_URL, developerParam } from '../config'
import { ApiError } from '../models/ApiError'

const api = axios.create({
  baseURL: API_URL,
  params: {
    developer: developerParam,
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token && config.data) {
    config.data.append('token', token)
  }
  return config
})

api.interceptors.response.use((config) => {
  if (config.data.status === 'error' && config.data.message.token) {
    localStorage.removeItem('token')
    throw new ApiError('Invalid token', { token: 'invalid' })
  }
  return config
})

export { api }
