import React, { SyntheticEvent } from 'react'
import { useTextField } from '../hooks/useTextField'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store'
import { useHistory } from 'react-router-dom'

export const NewTaskForm = () => {
  const dispatch = useDispatch()

  const { createTask } = bindActionCreators(actionCreators, dispatch)

  const username = useTextField()
  const email = useTextField()
  const text = useTextField()

	const history = useHistory()
  const successRedirect = () => history.push('/')

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    createTask({ username: username.value, email: email.value, text: text.value }, successRedirect)
  }

  return (
    <form className="shadow-md rounded-md max-w-md mx-auto pt-3" onSubmit={onSubmit}>
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 px-4 py-1">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          value={username.value}
          onChange={username.onChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div className="col-span-6 sm:col-span-3 lg:col-span-2 px-4 py-1">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="text"
          value={email.value}
          onChange={email.onChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 px-4 py-1">
        <label className="block text-sm font-medium text-gray-700">Text</label>
        <textarea
          value={text.value}
          onChange={text.onChange}
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
