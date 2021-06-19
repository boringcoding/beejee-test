import React, { FC } from 'react'
import { Messages } from './Messages'
import { Nav } from './Nav'

type LayoutProps = {
  title: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="container mx-auto my-2">
      <Nav />
      <h2 className="text-2xl font-medium leading-7 text-gray-900 text-center mb-5 uppercase">
        {title}
      </h2>
      {children}
      <Messages />
    </div>
  )
}
