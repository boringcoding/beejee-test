import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import { bindActionCreators } from 'redux'
import { useHistory, useParams } from 'react-router-dom'
import { useTextField } from '../hooks/useTextField'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../store'

export interface EditTaskParams {
  id: string
}

export const EditTaskForm: FC = () => {
  const dispatch = useDispatch()
  const { updateTask } = bindActionCreators(actionCreators, dispatch)

  const text = useTextField()
  const [status, setStatus] = useState<number>(0)
  const { id } = useParams<EditTaskParams>()

  const history = useHistory()
  const successRedirect = () => history.push('/')

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    updateTask({ id: Number(id), text: text.value, status }, successRedirect)
  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(Number(e.target.value))
  }

  return (
    <form className="shadow-md rounded-md max-w-md mx-auto pt-3" onSubmit={onSubmit}>
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 px-4 py-1">
        <label className="block text-sm font-medium text-gray-700">Text</label>
        <textarea
          value={text.value}
          onChange={text.onChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3 lg:col-span-2 px-4 py-1">
        <label className="block text-sm font-medium text-gray-700">Status</label>
				<RadioItem onStatusChange={onStatusChange} value={0} status={status} label="Not done" />
				<RadioItem onStatusChange={onStatusChange} value={1} status={status} label="Not done, edited" />
				<RadioItem onStatusChange={onStatusChange} value={10} status={status} label="Done" />
				<RadioItem onStatusChange={onStatusChange} value={11} status={status} label="Done, edited" />
      </div>
      <div className="px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  )
}

type RadioItemProps = {
  status: number
	value: number
  onStatusChange(e: ChangeEvent<HTMLInputElement>): void
  label: string
}

const RadioItem: FC<RadioItemProps> = ({ status, onStatusChange, label, value }) => {
  return (
    <label className="flex items-center">
      <input
        className="mr-2"
        name="status"
        type="radio"
        onChange={onStatusChange}
        value={value}
        checked={status === value}
      />
      <span className="uppercase">{label}</span>
    </label>
  )
}
