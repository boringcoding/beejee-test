import React, { FC, SyntheticEvent } from 'react'
import { useTextField } from '../hooks/useTextField'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store'
import { useHistory } from 'react-router-dom'

export const LoginForm: FC = () => {
  const dispatch = useDispatch()
  const { login } = bindActionCreators(actionCreators, dispatch)

  const username = useTextField()
  const password = useTextField()

  const history = useHistory()
  const successRedirect = () => history.push('/')

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    login({ username: username.value, password: password.value }, successRedirect)
  }

  return (
    <form className="shadow-md rounded-md max-w-md mx-auto pt-3" onSubmit={onSubmit}>
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 px-4 py-1">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          {...username}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2 px-4 py-1">
        <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...password}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
