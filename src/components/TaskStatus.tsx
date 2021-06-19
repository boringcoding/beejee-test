import React, { FC } from 'react'
import classNames from 'classnames'

type TaskStatusProps = {
  status: number
}

type StatusMapperType = {
  [key: number]: string
}

const StatusMapper: StatusMapperType = {
  0: 'Not done',
  1: 'Not done, edited',
  10: 'Done',
  11: 'Done, edited',
}

export const TaskStatus: FC<TaskStatusProps> = ({ status }) => {
  return (
    <div
      className={classNames('focus:outline-none py-1 px-2 rounded text-xs leading-3 mt-2 mr-2', {
        'text-green-700 bg-green-100': status === 10 || status === 11,
        'text-red-700 bg-red-100': status === 0 || status === 1,
      })}
    >
      {StatusMapper[status]}
    </div>
  )
}
