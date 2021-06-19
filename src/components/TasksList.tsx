import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { Task } from './Task'
import { SortControl } from './SortControl'
import { actionCreators, State } from '../store'
import { ITask } from '../models/ITask'
import { Loader } from './Loader'

export const TasksList = () => {
  const dispatch = useDispatch()
  const { fetchTasks } = bindActionCreators(actionCreators, dispatch)
  const tasksState = useSelector((state: State) => state.tasks)
  const appState = useSelector((state: State) => state.app)

  useEffect(() => {
    fetchTasks({
      sortDirection: appState.sortDirection,
      sortField: appState.sortField,
      page: appState.page,
    })
  }, [appState.sortDirection, appState.sortField, appState.page])

  return (
    <>
      <h2 className="text-xl text-gray-900 uppercase font-light mb-2">Sort by:</h2>
      <SortControl />
      {tasksState.loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
					{!tasksState.tasks.length && 'No tasks yet.'}
          {tasksState.tasks.map((task: ITask) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      )}
    </>
  )
}
