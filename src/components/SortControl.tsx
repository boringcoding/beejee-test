import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { actionCreators, State } from '../store'
import { SortField } from '../models/SortField'
import { SortDirection } from '../models/SortDirection'

export const SortControl: FC = () => {
  const dispatch = useDispatch()
  const { updateSortingDirection, updateSortingField } = bindActionCreators(
    actionCreators,
    dispatch
  )
  const appState = useSelector((state: State) => state.app)

  const handleSortingClick = (field: SortField) => {
    updateSortingField(field)
  }

  const handleDirectionClick = (direction: SortDirection) => {
    updateSortingDirection(direction)
  }

  return (
    <>
      <div className="inline-flex rounded-lg text-md mr-5 mb-2">
        <Button
          label="id"
          onClick={handleSortingClick}
          selected={appState.sortField}
          additionalClassNames="rounded-l-lg"
        />
        <Button label="username" onClick={handleSortingClick} selected={appState.sortField} />
        <Button label="email" onClick={handleSortingClick} selected={appState.sortField} />
        <Button
          label="status"
          onClick={handleSortingClick}
          selected={appState.sortField}
          additionalClassNames="rounded-r-lg"
        />
      </div>
      <div className="inline-flex rounded-lg text-md mr-5 mb-2">
        <Button
          label="asc"
          onClick={handleDirectionClick}
          selected={appState.sortDirection}
          additionalClassNames="rounded-l-lg"
        />
        <Button
          label="desc"
          onClick={handleDirectionClick}
          selected={appState.sortDirection}
          additionalClassNames="rounded-r-lg"
        />
      </div>
    </>
  )
}

type ButtonProps = {
  label: string
  selected: string
  onClick(label: string): void
  additionalClassNames?: string
}

const Button: FC<ButtonProps> = ({ label, onClick, additionalClassNames = null, selected }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={classNames(
        'mr-0.5 hover:bg-indigo-500 hover:text-white border border-indigo-500 px-4 py-2 focus:outline-none',
        additionalClassNames,
        {
          'bg-indigo-500 text-white': label === selected,
          'bg-white text-indigo-500': label !== selected,
        }
      )}
    >
      {label}
    </button>
  )
}
