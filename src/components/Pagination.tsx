import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { actionCreators, State } from '../store'
import { tasksPerPage } from '../config'

export const Pagination = () => {
  const [pagesCount, setPagesCount] = useState(1)
  const dispatch = useDispatch()
  const { updatePage } = bindActionCreators(actionCreators, dispatch)
  const appState = useSelector((state: State) => state.app)
  const tasksState = useSelector((state: State) => state.tasks)

  useEffect(() => {
    setPagesCount(Math.ceil(tasksState.total / tasksPerPage))
  }, [tasksState.total])

  const handlePageChange = (page: number) => {
    if (page === appState.page) {
      return
    }
    updatePage(page)
  }

  if (pagesCount <= 1) {
    return null
  }

  return (
    <div className="inline-flex flex-grow justify-between rounded-lg text-md">
      {[...Array(pagesCount)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={classNames(
            'flex-grow text-center  hover:bg-indigo-500 hover:text-white border border-indigo-500 px-4 py-2 focus:outline-none mr-0.5',
            {
              'rounded-l-lg': index === 0,
              'rounded-r-lg': index === pagesCount - 1,
              'bg-indigo-500 text-white': index + 1 === appState.page,
              'bg-white text-indigo-500': index + 1 !== appState.page,
            }
          )}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}
