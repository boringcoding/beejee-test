import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../store'

export const Nav = () => {
  const dispatch = useDispatch()
  const { logout } = bindActionCreators(actionCreators, dispatch)
  const authState = useSelector((state: State) => state.auth)

  return (
    <div className="mb-5 flex justify-end">
      <NavItem label="Tasks" path="/" />
      <NavItem label="New Task" path="/add" />
      {authState.isAuth ? (
        <button
          onClick={logout}
          className="ml-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Logout
        </button>
      ) : (
        <NavItem label="Login" path="/login" />
      )}
    </div>
  )
}

type NavItemProps = {
  label: string
  path: string
}

const NavItem: FC<NavItemProps> = ({ label, path }) => {
  return (
    <NavLink
      exact
      activeClassName="bg-indigo-900"
      className="ml-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      to={path}
    >
      {label}
    </NavLink>
  )
}
