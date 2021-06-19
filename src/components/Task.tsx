import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ITask } from '../models/ITask'
import {TaskStatus} from "./TaskStatus";

type TaskProps = {
  task: ITask
}

export const Task: FC<TaskProps> = ({ task }) => {
  return (
    <div className="rounded-md shadow-md bg-white px-5 py-3">
      <span className="block focus:outline-none text-gray-600 text-sm mb-2">{task.text}</span>
      <span className="block focus:outline-none text-xs italic text-gray-400 mb-1">
        <strong>Task ID:</strong> {task.id}
      </span>
      <span className="block focus:outline-none text-xs italic text-gray-400 mb-1">
        <strong>Username:</strong> {task.username}
      </span>
      <span className="block focus:outline-none text-xs italic text-gray-400 mb-1">
        <strong>Email:</strong> {task.email}
      </span>
      <div className="flex items-center justify-left">
				<TaskStatus status={task.status} />
      </div>
      <Link
        to={`/edit/${task.id}`}
        className="inline-block bg-red-400 hover:bg-red-600 text-white px-6 py-1 focus:outline-none rounded-md mt-2"
      >
        Edit
      </Link>
    </div>
  )
}
